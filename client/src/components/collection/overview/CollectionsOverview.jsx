import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';
import CollectionPreview from '../preview/CollectionPreview';
import * as Styled from './CollectionsOverview.styles';

function CollectionsOverview() {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );

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
