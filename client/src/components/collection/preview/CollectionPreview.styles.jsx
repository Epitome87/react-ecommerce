import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0;
  color: white;
  border-radius: 5px;

  a {
    color: white;
  }
`;

export const CollectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 400px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Preview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
`;
