import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import { NavLink } from 'react-router-dom';
import * as Styled from './CollectionPreviewContainer';

const DISPLAY_COUNT = 4;

function CollectionPreview({ title, items }) {
  return (
    <Styled.CollectionPreview>
      <Styled.CollectionHeader>
        <Styled.Title>{title.toUpperCase()}</Styled.Title>
        <NavLink to={`/shop/${title.toLowerCase()}`}>
          View All {title} &rarr;
        </NavLink>
      </Styled.CollectionHeader>

      <Styled.Preview>
        {items
          .filter((item, idx) => idx < DISPLAY_COUNT)
          .map((item) => {
            return (
              <CollectionItem key={item.id} item={item}>
                {item.name}
              </CollectionItem>
            );
          })}
      </Styled.Preview>
    </Styled.CollectionPreview>
  );
}

export default CollectionPreview;
