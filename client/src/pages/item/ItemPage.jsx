import React from 'react';
import * as Styled from './ItemPage.styles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selectors';

// The Item page renders an individual product, including images, name, description, price, and a button for adding it to the user's cart
function ItemPage() {
  const { collectionId, productId } = useParams();

  const product = useSelector(selectProduct(collectionId, productId));

  return (
    <div>
      <div>
        {product.name} $ {product.price}
      </div>
      <div>Add to Cart</div>
    </div>
  );
}

export default ItemPage;
