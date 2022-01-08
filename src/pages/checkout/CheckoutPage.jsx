import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import * as Styled from './CheckoutPage.styles';

function CheckoutPage() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));

  const renderedCartItems = cartItems.map((cartItem) => {
    return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
  });

  return (
    <Styled.CheckoutPage>
      <Styled.CheckoutHeader>
        <Styled.HeaderBlock>
          <span>Product</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Description</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Quantity</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Price</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Remove</span>
        </Styled.HeaderBlock>
      </Styled.CheckoutHeader>
      {renderedCartItems}
      <Styled.Total>Total: ${cartTotal}</Styled.Total>
      <Styled.TestWarning>
        *Please use the following TEST credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </Styled.TestWarning>
      <Styled.StripeBtn price={cartTotal} />
    </Styled.CheckoutPage>
  );
}

export default CheckoutPage;
