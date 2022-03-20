import styled from 'styled-components';

export const DirectoryMenu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(275px, 1fr);

  @media screen and (min-width: 600px) and (max-width: 999px) {
    grid-template-columns: repeat(2, minmax(275px, 1fr));

    & > * {
      height: 240px;
    }
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, minmax(275px, 1fr));
    grid-template-rows: 1fr 2fr;
  }
`;
