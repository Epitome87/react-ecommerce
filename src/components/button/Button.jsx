import React from 'react';
import './button.styles.scss';

function Button({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`button ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
