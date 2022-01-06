import React from 'react';
import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart.selectors';
import './checkoutpage.styles.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

function CheckoutPage() {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartTotal = useSelector((state) => selectCartTotal(state));
  // const { cartItems, cartTotal } = useSelector(
  //   createStructuredSelector({
  //     cartItems: selectCartItems,
  //     cartTotal: selectCartTotal,
  //   })
  // );

  const renderedCartItems = cartItems.map((cartItem) => {
    return <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
  });

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {renderedCartItems}
      <div className='total'>Total: ${cartTotal}</div>
      <div className='test-warning'>
        *Please use the following TEST credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
}

export default CheckoutPage;
