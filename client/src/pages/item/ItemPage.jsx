import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selectors';
import * as Styled from './ItemPage.styles';

// The Item page renders an individual product, including images, name, description, price, and a button for adding it to the user's cart
function ItemPage() {
  const { collectionId, productId } = useParams();

  const product = useSelector(selectProduct(collectionId, productId));

  return (
    <Styled.ItemPage className='item-page'>
      {/* Left Side */}
      <Styled.ImageContainer>
        <Styled.ImageMain src={`${product.imageUrl}`} alt={`${product.name}`} />
        {/* <Styled.ImageGallery>
          <Styled.GalleryImage
            src={`${product.imageUrl}`}
            alt={`${product.name}`}
          />
          <Styled.GalleryImage
            src={`${product.imageUrl}`}
            alt={`${product.name}`}
          />
          <Styled.GalleryImage
            src={`${product.imageUrl}`}
            alt={`${product.name}`}
          />
        </Styled.ImageGallery> */}
      </Styled.ImageContainer>
      <Styled.Details>
        <Styled.Name>{product.name}</Styled.Name>
        <Styled.Description>
          Fake product description. This is where the product description would
          go. But what I'm writing right now is fake, as I do not have a product
          description yet.
        </Styled.Description>
        <Styled.Price>$ {product.price}</Styled.Price>
        <Styled.CartButton>Add to Cart</Styled.CartButton>
      </Styled.Details>
    </Styled.ItemPage>
  );
}

export default ItemPage;
