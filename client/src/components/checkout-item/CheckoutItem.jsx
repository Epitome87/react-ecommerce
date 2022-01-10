import React from 'react';
import { addItem, removeItem, clearItem } from '../../redux//cart/cartSlice';
import { useDispatch } from 'react-redux';
import * as Styled from './CheckoutItem.styles';

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <Styled.CheckoutItem>
      <Styled.ImageContainer>
        <img src={imageUrl} alt='product' />
      </Styled.ImageContainer>
      <Styled.ItemName>{name}</Styled.ItemName>
      <Styled.ItemQuantity>
        <Styled.Arrow onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </Styled.Arrow>
        <Styled.Value>{quantity}</Styled.Value>
        <Styled.Arrow onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </Styled.Arrow>
      </Styled.ItemQuantity>
      <Styled.ItemPrice>${price}</Styled.ItemPrice>
      <Styled.RemoveButton onClick={() => dispatch(clearItem(cartItem))}>
        &#10005;
      </Styled.RemoveButton>
    </Styled.CheckoutItem>
  );
}

export default CheckoutItem;
