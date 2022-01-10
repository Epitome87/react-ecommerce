import styled, { css, keyframes } from 'styled-components';

const bumpAnimation = keyframes`
  0% { transform: scale(1); }
  10% { transform: scale(0.85); }
  30% { transform: scale(1.15); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// If we use "isAnimating" prop
const animate = css`
  animation: ${bumpAnimation} 300ms ease-out;
  color: #d6efff;
`;

export const CartIcon = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  // If we're animating based on className of "bump"
  // & .bump {
  //   animation: ${bumpAnimation} 300ms ease-out;
  //   color: blue;
  // }

  ${(props) => {
    if (props.animate) {
      return animate;
    }
  }}
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
