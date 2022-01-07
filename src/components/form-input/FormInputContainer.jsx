import styled, { css } from 'styled-components';

// TODO: Didn't covert this to styled-components quite properly

const MAIN_COLOR = 'black';
const SUB_COLOR = 'gray';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${MAIN_COLOR};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabel = styled.label`
  color: ${SUB_COLOR};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${(props) => {
    if (props.shrink) {
      return shrinkLabel;
    }
  }}
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: ${SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SUB_COLOR};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    top: -14px;
    font-size: 12px;
    color: red;
  }

  input[type='password'] {
    letter-spacing: 0.3em;
    color: pink;
  }
`;

// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
// }

// .group {

//   .form-input {

//     &:focus {
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }
