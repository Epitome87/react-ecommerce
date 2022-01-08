import styled from 'styled-components';
import Button from '../button/Button';

export const ItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 20px;
`;

export const ItemButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding: 1rem;
  color: white;

  &:hover {
    ${ItemImage} {
      opacity: 0.8;
    }

    ${ItemButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const FooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const FooterPrice = styled.span`
  width: 10%;
`;
