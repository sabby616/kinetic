import {
    interceptStudyLaunch, test, goToPage, createStudy, expect, dayjs, faker, rmStudy,
} from './test'

test('displays studies', async ({ page }) => {
    const studyName = faker.commerce.productDescription()

    const studyId = await createStudy({ page, opensAt: dayjs().subtract(1, 'day'), name: studyName })
    await goToPage({ page, path: '/studies', loginAs: 'user' })
    await page.waitForTimeout(100)
    await expect(page).toMatchText(RegExp(studyName))
    await page.click(`[data-study-id="${studyId}"]`)

    await rmStudy({ page, studyId })
})

test('filtering & sorting', async ({ page }) => {
    const studyName = faker.commerce.productDescription()

    const firstStudyId = await createStudy({
        page, mins: 5, points: 5, name: studyName, subject: 'biology',
    })
    const secondStudyId = await createStudy({
        page, mins: 15, points: 15, name: studyName, subject: 'physics',
    })

    await goToPage({ page, path: '/studies', loginAs: 'user' })

    await page.click('testId=sort-by-menu')
    await page.click('testId=sort-points:high-low')

    await page.pause()

    let ids = await page.$$eval('[data-study-id]', studies => studies.map(s => Number(s.dataset.studyId)))
    expect(ids.indexOf(firstStudyId)).toBeGreaterThan(ids.indexOf(secondStudyId))

    await page.click('testId=sort-by-menu')
    await page.click('testId=sort-points:low-high')

    ids = await page.$$eval('[data-study-id]', studies => studies.map(s => Number(s.dataset.studyId)))
    expect(ids.indexOf(firstStudyId)).toBeLessThan(ids.indexOf(secondStudyId))

    await page.click('testId=subjects-filter-menu')
    await page.click('testId=filter-subject:biology')
    ids = await page.$$eval('[data-study-id]', studies => studies.map(s => Number(s.dataset.studyId)))
    expect(ids).toContain(firstStudyId)
    expect(ids).not.toContain(secondStudyId)

    await rmStudy({ page, studyId: firstStudyId })
    await rmStudy({ page, studyId: secondStudyId })
})

test('it auto-launches mandatory studies', async ({ page }) => {
    const studyName = faker.commerce.productDescription()
    const studyId = await createStudy({
        page,
        isMandatory: true,
        opensAt: dayjs().subtract(1, 'day'),
        name: studyName,
    })
    await goToPage({ page, path: '/studies', loginAs: 'user' })
    await expect(page).toMatchText('.modal-header', studyName)
    await expect(page).not.toHaveSelector('testId=data-close-btn')

    await rmStudy({ page, studyId })
})

test('launching study and testing completion', async ({ page }) => {

    await interceptStudyLaunch({ page })

    const studyId = await createStudy({ page, name: faker.commerce.productDescription() })
    await goToPage({ page, path: `/study/details/${studyId}`, loginAs: 'user' })
    await page.click('testId=launch-study')

    // qualtrics will redirect here once complete
    await goToPage({ page, path: `/study/land/${studyId}`, loginAs: 'user' })

    await page.click('testId=view-studies')
    await expect(page).toHaveSelector(`[data-study-id="${studyId}"][aria-disabled="true"]`)
    await page.click(`[data-study-id="${studyId}"]`)
    // should not have navigated
    expect(
        await page.evaluate(() => document.location.pathname)
    ).toMatch(/studies$/)
    await rmStudy({ page, studyId })
})

test('launching study and aborting it', async ({ page }) => {

    await interceptStudyLaunch({ page })

    const studyId = await createStudy({ page, name: faker.commerce.productDescription() })
    await goToPage({ page, path: `/study/details/${studyId}`, loginAs: 'user' })
    await page.click('testId=launch-study')

    await goToPage({ page, path: `/study/land/${studyId}?consent=false`, loginAs: 'user' })
    await expect(page).not.toMatchText(/marked as complete/)

    await page.click('testId=view-studies')
    await expect(page).toHaveSelector(`[data-study-id="${studyId}"][aria-disabled="false"]`)

    await page.click(`[data-study-id="${studyId}"]`)
    // should have navigated
    expect(
        await page.evaluate(() => document.location.pathname)
    ).toMatch(RegExp(`/study/details/${studyId}$`))

    // now mark complete with consent granted
    await goToPage({ page, path: `/study/land/${studyId}?consent=true`, loginAs: 'user' })
    await expect(page).toMatchText(/marked as complete/)

    await rmStudy({ page, studyId })
})
