import styled from 'styled-components';
import Button from '../../components/button/Button';

export const ItemPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  // Should get this from a Container class, but it isn't working!
  max-width: 1200px;
  padding: 5rem 1rem;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    // align-items: center;
    justify-content: center;
    gap: 5rem;
  }
`;

export const ImageContainer = styled.div`
  // flex-basis: 100%;
`;

export const ImageMain = styled.img`
  // width: 100%;
  // max-height: 300px;
`;

export const ImageGallery = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: inline-block;
  }
`;

export const GalleryImage = styled.img``;

export const Details = styled.div`
  // flex-basis: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Name = styled.div`
  color: orange;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const Price = styled.div`
  color: hsl(220, 13%, 13%);
  font-size: 1.75rem;
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 1.2rem;
`;

export const CartButton = styled(Button)``;
