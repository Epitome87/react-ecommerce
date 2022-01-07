import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shopSlice';

function ShopPage() {
  const dispatch = useDispatch();

  let unSubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log('Collections Map', collectionsMap);
      dispatch(updateCollections(collectionsMap));
    });

    // Cleanup when dismount
    return unSubscribeFromSnapshot;
  }, []);

  return (
    <div className='shop-page'>
      <Routes>
        <Route path={`/`} element={<CollectionsOverview />} />
        <Route path={`:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
