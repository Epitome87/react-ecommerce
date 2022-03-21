import styled from 'styled-components';
import Button from '../../button/Button';

export const ItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const ItemButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    width: 50%;
    padding: 0 10px;
  }
`;

export const CollectionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ItemImage} {
      opacity: 0.8;
    }

    ${ItemButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem;

  &:hover {
    ${ItemImage} {
      opacity: unset;
    }

    ${ItemButton} {
      opacity: unset;
    }
  }
`;

export const CollectionFooter = styled.div`
  font-size: 1.125rem;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const FooterName = styled.span``;

export const FooterPrice = styled.span``;
