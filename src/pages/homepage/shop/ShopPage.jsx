import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../../components/collection-preview/CollectionPreview';

function ShopPage() {
  const [collections, setcCollections] = useState(SHOP_DATA);
  console.log(collections);

  return (
    <div>
      SHOP PAGE
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

export default ShopPage;
