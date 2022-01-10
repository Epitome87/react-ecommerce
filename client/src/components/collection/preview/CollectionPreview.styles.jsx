import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0.5rem;
  color: white;
  border-radius: 5px;

  a {
    color: white;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
    align-items: space-between;
  }
`;

export const CollectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
  }
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
