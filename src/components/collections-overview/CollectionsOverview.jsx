import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop.selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';
import * as Styled from './CollectionsOverviewContainer';

function CollectionsOverview() {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );
  console.log('COLLECTIONS', collections);

  return (
    <Styled.CollectionsOverview>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))}
    </Styled.CollectionsOverview>
  );
}

export default CollectionsOverview;
