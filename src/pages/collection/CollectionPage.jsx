import React from 'react';
import './collection-page.styles.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop.selectors';

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );

  const renderedCollectionItems = collection.items.map((collectionItem) => {
    return <CollectionItem key={collectionItem.id} item={collectionItem} />;
  });

  return (
    <div className='collection-page'>
      <h2>{collection.title}</h2>
      <div className='items'>{renderedCollectionItems}</div>
    </div>
  );
}

export default CollectionPage;
