import React from 'react';
import axiosForStripe from '../../apis/axiosForStripe';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  // Stripe wants he price in USD cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KF459DIrMg779WitlbI02kjVHFoKjhZFFTeJoNbdIFPWPikO5ElNnLURG5dF7ooHfLVjxybQhCMOp6BvmAccHDt00LkkSsUzW';

  const onToken = async (token) => {
    console.log('Attempting payment');
    try {
      const stripeResponse = await axiosForStripe.post('', {
        amount: priceForStripe,
        token,
      });

      alert('Payment successful!');
    } catch (err) {
      console.log('Payment error: ', JSON.parse(err));
      alert(
        'There was an issue processing your payment. Please use the provided test credit card'
      );
    }
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
