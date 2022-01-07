import styled from 'styled-components';

export const CheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemName = styled.span`
  width: 23%;
`;

export const ItemQuantity = styled.span`
  width: 23%;
  display: flex;
`;

export const ItemPrice = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
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
