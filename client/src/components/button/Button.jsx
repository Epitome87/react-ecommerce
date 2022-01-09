import React from 'react';
import * as Styled from './Button.styles';

function Button({ children, ...otherProps }) {
  return (
    <Styled.ButtonContainer {...otherProps}>{children}</Styled.ButtonContainer>
  );
}

export default Button;
