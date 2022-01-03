import React from 'react';
import './collection-item.styles.scss';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button inverted onClick={() => dispatch(addItem(item))}>
        Add to Cart
      </Button>
    </div>
  );
}

export default CollectionItem;
