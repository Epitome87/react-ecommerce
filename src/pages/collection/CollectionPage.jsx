import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop.selectors';
import * as Styled from './CollectionPageContainer';

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );

  const renderedCollectionItems = collection.items.map((collectionItem) => {
    return <CollectionItem key={collectionItem.id} item={collectionItem} />;
  });

  return (
    <Styled.CollectionPage>
      <Styled.Title>{collection.title}</Styled.Title>
      <Styled.Items>{renderedCollectionItems}</Styled.Items>
    </Styled.CollectionPage>
  );
}

export default CollectionPage;
