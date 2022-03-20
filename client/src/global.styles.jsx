import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat';
  padding: 1.5rem 4.5rem;
  background-color: #252627;
  color: white;
  

  @media screen and (max-width: 800px) {
      padding: 0.75rem 1.25rem;
  }
}

a {
  text-decoration: none;
  color: white;
}
`;
