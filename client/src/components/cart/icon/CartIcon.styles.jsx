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
  // bottom: 12px;

  top: -30%;
  right: -30%;
  padding: 2px;
  background-color: #5b85aa;
  border-radius: 50%;
`;
