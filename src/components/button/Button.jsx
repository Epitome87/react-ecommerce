import React from 'react';
import './button.styles.scss';

function Button({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
