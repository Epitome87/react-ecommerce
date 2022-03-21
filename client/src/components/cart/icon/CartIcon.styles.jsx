import styled, { css, keyframes } from 'styled-components';

const initialScale = 1.3;

const bumpAnimation = keyframes`
  0% { transform: scale(${initialScale}); }
  10% { transform: scale(${initialScale - 0.15}); }
  30% { transform: scale(${initialScale + 0.15}); }
  50% { transform: scale(${initialScale + 0.2}); }
  100% { transform: scale(${initialScale}); }
`;

// If we use "isAnimating" prop
const animate = css`
  animation: ${bumpAnimation} 300ms ease-out;
  color: #d6efff;
`;

export const CartIcon = styled.div.attrs((props) => ({
  className: props.className,
}))`
  // width: 45px;
  // height: 45px;

  transform: scale(1.3);
  margin-right: 1rem;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  padding: 0 0.1rem 0 0.4rem;

  // If we're animating based on className of "bump"
  // & .bump {
  //   animation: ${bumpAnimation} 300ms ease-out;
  //   color: blue;
  // }

  svg {
    color: hsl(220, 13%, 13%);
  }

  ${(props) => {
    if (props.animate) {
      return animate;
    }
  }}
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.75rem;
  font-weight: bold;

  top: -30%;
  right: -30%;
  display: grid;
  place-content: center;
  background-color: hsl(26, 100%, 55%);
  width: 1rem;
  aspect-ratio: 1.05;
  line-height: 0;
  border-radius: 50%;
`;
