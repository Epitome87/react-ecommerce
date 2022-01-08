import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import * as Styled from './CollectionItem.styles';

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <Styled.CollectionItem>
      <Styled.ItemImage imageUrl={imageUrl} />
      <Styled.CollectionFooter>
        <Styled.FooterName>{name}</Styled.FooterName>
        <Styled.FooterPrice>${price}</Styled.FooterPrice>
      </Styled.CollectionFooter>
      <Styled.ItemButton inverted onClick={() => dispatch(addItem(item))}>
        Add to Cart
      </Styled.ItemButton>
    </Styled.CollectionItem>
  );
}

export default CollectionItem;
