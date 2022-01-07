import React from 'react';
import * as Styled from './FormInputContainer';

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <Styled.Group>
      {label ? (
        <Styled.FormInputLabel
          shrink={otherProps.value.length}
          htmlFor={otherProps.name}
        >
          {label}
        </Styled.FormInputLabel>
      ) : null}
      <Styled.FormInput
        id={otherProps.name}
        onChange={handleChange}
        {...otherProps}
      />
    </Styled.Group>
  );
}

export default FormInput;
