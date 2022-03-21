import styled, { css } from 'styled-components';

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (props.inverted) {
    return invertedButtonStyles;
  }

  return buttonStyles;
};

const buttonStyles = css`
  // background-color: black;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border: none;
  box-shadow: 0 10px 10px hsl(26, 100%, 85%);
  //hsl(25, 100%, 94%);

  &:hover {
    // background-color: white;
    background-color: hsl(26, 100%, 70%);
    // color: black;
    // border: 1px solid black;
  }

  &:focus {
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  // line-height: 50px;
  padding: 0 2rem 0 35px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ${getButtonStyles}
`;
