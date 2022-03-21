import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 5px;

  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;

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
  gap: 1rem;
  justify-items: center;
`;
