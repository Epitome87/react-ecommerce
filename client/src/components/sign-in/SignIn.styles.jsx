import styled from 'styled-components';

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    width: 50%;
    align-items: center;
  }
`;
