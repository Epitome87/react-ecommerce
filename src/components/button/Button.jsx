import React from 'react';
import * as Styled from './ButtonContainer';

function Button({ children, ...otherProps }) {
  return (
    <Styled.ButtonContainer {...otherProps}>{children}</Styled.ButtonContainer>
  );
}

export default Button;
