import React from 'react';
import * as Styled from './WithSpinner.styles';

// Using arrow functions (ugly, IMHO, but probably expected syntax)
// const WithSpinner =
//   (WrappedComponent) =>
//   ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <Styled.SpinnerOverlay>
//         <Styled.SpinnerContainer />
//       </Styled.SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };

function WithSpinner(WrappedComponent) {
  function Spinner({ isLoading, ...otherProps }) {
    return isLoading ? (
      <Styled.SpinnerOverlay>
        <Styled.SpinnerContainer />
      </Styled.SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  }

  return Spinner;
}

export default WithSpinner;
