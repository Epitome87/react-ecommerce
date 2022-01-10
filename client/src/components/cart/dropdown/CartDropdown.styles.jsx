import styled from 'styled-components';
import Button from '../../button/Button';

export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  color: black;
  line-height: 1.1rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ButtonContainer = styled(Button)`
  margin-top: auto;
  font-size: 1rem;
  align-items: center;
`;

export const EmptyMessage = styled.span`
  font-size: 1.1rem;
  margin: 50px auto;
`;
