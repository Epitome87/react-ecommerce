import styled from 'styled-components';

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ItemName = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ItemQuantity = styled.span`
  width: 23%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ItemPrice = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const RemoveButton = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

/*
.checkout-item {


  .name,
  .quantity,
  .price {
    width: 23%;

  }

  .quantity {

    .arrow {
      cursor: pointer;
    }

    .value {
    }
  }

  .remove-button {
 
  }
}

*/
