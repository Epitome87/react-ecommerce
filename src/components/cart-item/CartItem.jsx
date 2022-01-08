import React from 'react';
import * as Styled from './CartItem.styles';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <Styled.CartItem>
      <Styled.ItemImage src={imageUrl} alt='item' />
      <Styled.ItemDetails>
        <Styled.ItemName>{name}</Styled.ItemName>
        <Styled.ItemPrice>
          {quantity} x ${price}
        </Styled.ItemPrice>
      </Styled.ItemDetails>
    </Styled.CartItem>
  );
}

export default CartItem;
