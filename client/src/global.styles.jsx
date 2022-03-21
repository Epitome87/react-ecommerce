import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Kumbh Sans', sans-serif; //'Montserrat';
  line-height: 1.5;
  // padding: 0.75rem 1.25rem;
  // background-color: #252627;
  background-color: white;
  color: black;
  color: hsl(219, 9%, 45%);
  

  @media screen and (min-width: 800px) {
        // padding: 1.5rem 4.5rem;
  }
}

a {
  text-decoration: none;
  // color: white;
  color: black;
}

.container {
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
}
`;
