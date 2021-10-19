/* tslint:disable */
/* eslint-disable */
/**
 * OpenStax Kinetic API
 * The Kinetic API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v0/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PublicResearcher,
    PublicResearcherFromJSON,
    PublicResearcherFromJSONTyped,
    PublicResearcherToJSON,
} from './';

/**
 * 
 * @export
 * @interface ParticipantStudy
 */
export interface ParticipantStudy {
    /**
     * The study ID.
     * @type {number}
     * @memberof ParticipantStudy
     */
    id: number;
    /**
     * The study title that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    title: string;
    /**
     * The shorty study description that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    shortDescription: string;
    /**
     * The long study description that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    longDescription?: string;
    /**
     * The tags of the study object, used for grouping and filtering.
     * @type {Array<string>}
     * @memberof ParticipantStudy
     */
    tags: Array<string>;
    /**
     * The expected study duration in minutes.
     * @type {number}
     * @memberof ParticipantStudy
     */
    durationMinutes: number;
    /**
     * How many points will be awarded for participation in the study
     * @type {number}
     * @memberof ParticipantStudy
     */
    participationPoints?: number;
    /**
     * When the study was launched; null means not launched
     * @type {Date}
     * @memberof ParticipantStudy
     */
    firstLaunchedAt?: Date;
    /**
     * When the study was completed; null means not completed.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    completedAt?: Date;
    /**
     * When the study ends; null means open indefinitely.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    closesAt?: Date;
    /**
     * When the study was opted-out of; null means not opted out.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    optedOutAt?: Date;
    /**
     * The study's researchers.
     * @type {Array<PublicResearcher>}
     * @memberof ParticipantStudy
     */
    researchers?: Array<PublicResearcher>;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof ParticipantStudy
     */
    isMandatory?: boolean;
}

export function ParticipantStudyFromJSON(json: any): ParticipantStudy {
    return ParticipantStudyFromJSONTyped(json, false);
}

export function ParticipantStudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantStudy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'shortDescription': json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'tags': json['tags'],
        'durationMinutes': json['duration_minutes'],
        'participationPoints': !exists(json, 'participation_points') ? undefined : json['participation_points'],
        'firstLaunchedAt': !exists(json, 'first_launched_at') ? undefined : (new Date(json['first_launched_at'])),
        'completedAt': !exists(json, 'completed_at') ? undefined : (new Date(json['completed_at'])),
        'closesAt': !exists(json, 'closes_at') ? undefined : (new Date(json['closes_at'])),
        'optedOutAt': !exists(json, 'opted_out_at') ? undefined : (new Date(json['opted_out_at'])),
        'researchers': !exists(json, 'researchers') ? undefined : ((json['researchers'] as Array<any>).map(PublicResearcherFromJSON)),
        'isMandatory': !exists(json, 'is_mandatory') ? undefined : json['is_mandatory'],
    };
}

export function ParticipantStudyToJSON(value?: ParticipantStudy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'short_description': value.shortDescription,
        'long_description': value.longDescription,
        'tags': value.tags,
        'duration_minutes': value.durationMinutes,
        'participation_points': value.participationPoints,
        'first_launched_at': value.firstLaunchedAt === undefined ? undefined : (value.firstLaunchedAt.toISOString()),
        'completed_at': value.completedAt === undefined ? undefined : (value.completedAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt.toISOString()),
        'opted_out_at': value.optedOutAt === undefined ? undefined : (value.optedOutAt.toISOString()),
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(PublicResearcherToJSON)),
        'is_mandatory': value.isMandatory,
    };
}


