import styled from 'styled-components';

export const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0.5rem;
  color: white;
  background-color: #293241;
  border-radius: 20px;

  a {
    color: white;
  }
`;

export const CollectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
