import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addItem } from '../../../redux/cart/cartSlice';
import * as Styled from './CollectionItem.styles';

function CollectionItem({ item, category }) {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onItemClicked = (event) => {
    console.log(item);
    console.log(`${location.pathname}/${id}`);
    // Since multiple components render CollectionItem, this can be accessed from multiple routes -- some of which don't pass in a category prop.
    // To sloppily resolve this, assume that an undefined category means we are already on a route where the category is part of the URL
    if (category)
      navigate(`${location.pathname}/${category.toLowerCase()}/${id}`);
    else navigate(`${location.pathname}/${id}`);
  };

  return (
    <Styled.CollectionItem onClick={onItemClicked}>
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
