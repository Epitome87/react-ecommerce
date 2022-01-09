import styled from 'styled-components';
import StripeButton from '../../components/stripe-button/StripeButton';

export const CheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

// TODO: Get this to actually apply!
export const StripeBtn = styled(StripeButton)`
  margin-left: auto;
  margin-top: 50px;
  transform: scale(1.5);

  button {
    margin-left: auto;
    margin-top: 50px;
    transform: scale(1.5);
  }
`;

/*
.checkout-page {


  .checkout-header {


    .header-block {
      

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {

  }

  button {
    margin-left: auto;
    margin-top: 50px;
    transform: scale(1.5);
  }

  .test-warning {
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
  }
}

*/
