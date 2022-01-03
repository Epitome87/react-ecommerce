import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.styles.scss';

const DISPLAY_COUNT = 4;

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < DISPLAY_COUNT)
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                // name={item.name}
                // price={item.price}
                // imageUrl={item.imageUrl}
                item={item}
              >
                {item.name}
              </CollectionItem>
            );
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
