import { React, styled, css, keyframes, cx } from '../common'
import { usePendingState } from '../lib/hooks';

const Inner = styled.div`
  margin: auto;
  padding: 20px;
`;

const Animation = styled.svg`
  display: block;
  height: 100%;
  margin: 20px auto 0 auto;
  overflow: visible;
  position: relative;
  padding-top: 20px;
  max-width: 200px;
`;

const Bar = css`
    animation-delay: 0.5s;
`;

const moveGreen = keyframes`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  to {
    transform: matrix(0.965926, -0.258819, 0.258819, 0.965926, 0, -18);
  }
`;
const Green = styled.path`
  ${Bar}
  fill: #77AF42;
  transform-origin: center left;
  .staxly-animation:not(.paused) & {
    animation: ${moveGreen} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s infinite alternate;
  }
`;

const moveOrange = keyframes`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  to {
    transform: matrix(0.994522, 0.104528, -0.104528, 0.994522, 0, -14);
  }
`;
const Orange = styled.path`
  ${Bar}
  fill: #F47641;
  transform-origin: center right;
  .staxly-animation:not(.paused) & {
    animation: ${moveOrange} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s infinite alternate;
  }
`;

const moveGray = keyframes`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  } to {
    transform: matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, -8);
  }
`;
const Gray = styled.path`
  ${Bar}
  fill: #5E6062;
  transform-origin: center right;
  .staxly-animation:not(.paused) & {
    animation: ${moveGray} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s infinite alternate;
  }
`;

const moveYellow = keyframes`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  } to {
    transform: matrix(1, 0, 0, 1, 0, -8);
  }
`;

const Yellow = styled.path`
  ${Bar}
  fill: #F4D019;
  transform-origin: center right;
  .staxly-animation:not(.paused) & {
    animation: ${moveYellow} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.6s infinite alternate;
  }
`;

const moveBlue = keyframes`
  from {
    transform: matrix(1, 0, 0, 1, 0, 0);
  } to {
    transform: matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, -4);
  }
`;

const Blue = styled.path`
  ${Bar}
  fill: #00246A;
  transform-origin: center;
  .staxly-animation:not(.paused) & {
    animation: ${moveBlue} 0.6s cubic-bezier(0.81, 0.41, 0.13, 0.74) 0.5s infinite alternate;
  }
`;

export
function StaxlyAnimation({ isLoading }: { isLoading?: boolean }) {
    if (!isLoading) { return null; }

    return (
        <div className="staxly-animation">
            <div className="overlay" />
            <Inner className="inner">
                <Animation
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 -25 57.6 66"
                    enableBackground="new 0 -25 57.6 66">
                    <Blue
                        className="blue"
                        d={'M38.4,22c0,0.4-0.3,0.7-0.7,0.7H13.5c-0.4,0-0.7-0.3-0.7-0.7v-1.4c0-0.4,0.3-0.7,0.7-0.7h24.2 \
    c0.4,0,0.7,0.3,0.7,0.7V22z'} />
                    <Yellow
                        className="yellow"
                        d={'M41.8,17.8c0,0.4-0.3,0.7-0.7,0.7l-25.4,0.8c-0.4,0-0.7-0.3-0.7-0.7l-0.1-2.1 \
    c0-0.4,0.3-0.7,0.7-0.7L41,15c0.4,0,0.7,0.3,0.7,0.7L41.8,17.8z'} />
                    <Gray
                        className="gray"
                        d={'M34.8,14c0,0.4-0.3,0.7-0.7,0.7H11.6c-0.4,0-0.7-0.3-0.7-0.7v-3.5c0-0.4,0.3-0.7,0.7-0.7h22.5 \
    c0.4,0,0.7,0.3,0.7,0.7V14z'} />
                    <Orange
                        className="orange"
                        d={'M39,8.1c0,0.3-0.4,0.5-1,0.5H8.6c-0.5,0-1-0.2-1-0.5V6.9c0-0.3,0.4-0.5,1-0.5H38 \
    c0.5,0,1,0.2,1,0.5V8.1z'} />
                    <Green
                        className="green"
                        d={'M43.9,5c0,0.7-0.6,1.2-1.2,1.1L15,4.8c-0.7,0-1.2-0.6-1.1-1.2L14,1.1c0-0.7,0.6-1.2,1.2-1.1 \
    l27.7,1.3c0.7,0,1.2,0.6,1.1,1.2L43.9,5z'} />
                    <path
                        id="ox-type"
                        className="st2"
                        fill="#5E6062"
                        d={'M3.1,30.2c-1.8,0-3.1,1.3-3.1,3.1c0,1.8,1.3,3.1,3.1,3.1c1.8,0,3.1-1.3,3.1-3.1 \
    C6.2,31.5,4.9,30.2,3.1,30.2z M3.1,35.7c-1.4,0-2.3-1.1-2.3-2.4c0-1.3,0.9-2.4,2.3-2.4c1.4,0,2.3,1.1,2.3,2.4 \
    C5.4,34.6,4.5,35.7,3.1,35.7z M10.9,30.2c-0.9,0-1.9,0.4-2.4,1.2h0v-1H7.7v8.8h0.8v-3.9h0C9,36,10,36.4,10.9,36.4 \
    c1.8,0,3.1-1.3,3.1-3.1C14,31.5,12.7,30.2,10.9,30.2z M10.9,35.7c-1.4,0-2.5-1.1-2.5-2.4c0-1.3,1.1-2.4,2.5-2.4 \
    c1.4,0,2.3,1.1,2.3,2.4C13.2,34.6,12.3,35.7,10.9,35.7z M18.3,30.2c-1.7,0-2.9,1.3-2.9,3.1c0,1.8,1.2,3.1,3,3.1c1,0,2-0.4,2.6-1.3 \
    l-0.6-0.5c-0.4,0.6-1.2,1-2,1c-1.8,0-2.2-1.6-2.2-2.2h5v-0.5C21.1,31.6,20.1,30.2,18.3,30.2z M16.1,32.8c0-0.3,0.5-1.9,2.1-1.9 \
    c1.1,0,2,0.9,2,1.9H16.1z M27.9,32.7v3.5h-0.8v-3.5c0-1-0.3-1.9-1.5-1.9c-1.1,0-2,0.8-2,2.4v2.9h-0.8V32c0-0.4-0.1-1.4-0.1-1.7h0.8 \
    c0,0.4,0,0.9,0.1,1h0c0.3-0.7,1.1-1.2,2-1.2C27.4,30.2,27.9,31.4,27.9,32.7z M34.2,34.4c0,1.5-1.4,2-2.6,2c-0.9,0-1.8-0.2-2.4-0.9 \
    l1-1c0.4,0.4,0.8,0.8,1.5,0.8c0.4,0,1-0.2,1-0.7c0-1.3-3.3-0.3-3.3-2.6c0-1.4,1.2-2,2.5-2c0.8,0,1.7,0.3,2.2,0.9l-1,0.9 \
    c-0.3-0.4-0.7-0.6-1.2-0.6c-0.4,0-0.9,0.2-0.9,0.7C30.9,32.9,34.2,32,34.2,34.4z M37.5,30.1h1.7v1.3h-1.7v2.7c0,0.6,0.2,1,0.9,1 \
    c0.3,0,0.6-0.1,0.8-0.2v1.3c-0.3,0.2-0.9,0.2-1.2,0.2c-1.6,0-2-0.7-2-2.2v-2.8h-1.3v-1.3H36v-1.8h1.5V30.1z M43,30 \
    c-1,0-1.9,0.3-2.6,1l0.8,0.8c0.4-0.4,1-0.6,1.6-0.6c0.8,0,1.4,0.4,1.4,1.1v0.2h-0.4c-1.5,0-3.9,0.1-3.9,2.1c0,1.2,1.1,1.8,2.2,1.8 \
    c0.8,0,1.5-0.3,2-1h0v0.8h1.4v-3.5C45.6,31.8,45.6,30,43,30z M44.1,33.8c0,0.9-0.5,1.4-1.5,1.4c-0.5,0-1.1-0.2-1.1-0.8 \
    c0-0.9,1.5-0.9,2.3-0.9h0.3V33.8z M50.8,32.9l2.5,3.3h-1.9L49.8,34l-1.6,2.2h-1.8l2.5-3.3l-2.1-2.8h1.9l1.2,1.8l1.3-1.8h1.7 \
    L50.8,32.9z M57.6,30.1v1.7h-0.3v-1.5h0l-0.6,1.5h-0.2l-0.6-1.5h0v1.5h-0.3v-1.7h0.4l0.5,1.3l0.5-1.3H57.6z M53.9,30.1h1.4v0.3h-0.5 \
    v1.5h-0.3v-1.5h-0.5V30.1z'} />
                </Animation>
            </Inner>
        </div>
    );
}


const Message = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #5e6062;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;


interface LoadingAnimationProps {
    className?: string
    message?: string
}


export function LoadingAnimation({ className, message = 'Loading…' }: LoadingAnimationProps) {
    const shouldDisplay = usePendingState(true)
    if (!shouldDisplay) return null

    return (
        <div className={cx('loading-animation', className)}>
            <StaxlyAnimation isLoading={true} />
            <Message>{message}</Message>
        </div>
    );
}
