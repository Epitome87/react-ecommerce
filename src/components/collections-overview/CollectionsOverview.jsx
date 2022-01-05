import React from 'react';
import './collections-overview.styles.scss';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop.selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';

function CollectionsOverview() {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );
  console.log('COLLECTIONS', collections);

  return (
    <div className='collections-overview'>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))}
    </div>
  );
}

export default CollectionsOverview;
