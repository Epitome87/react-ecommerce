import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  // Stripe wants he price in USD cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KF459DIrMg779WitlbI02kjVHFoKjhZFFTeJoNbdIFPWPikO5ElNnLURG5dF7ooHfLVjxybQhCMOp6BvmAccHDt00LkkSsUzW';

  const onToken = (token) => {
    console.log('Stripe Payment Token: ', token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      name='React eCommerce'
      label='Pay Now'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
}

export default StripeButton;
