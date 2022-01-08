import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shopSlice';

import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  let unSubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    // Using Firebase's Observer Pattern
    unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log('Collections Map', collectionsMap);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    });

    // Refactoring to use the Promise Pattern: No live updates though, only new data upon remount!
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   console.log('Collections Map', collectionsMap);
    //   dispatch(updateCollections(collectionsMap));
    //   setIsLoading(false);
    //   console.log(unSubscribeFromSnapshot);
    // });

    // Refactoring to use async/await (have to create outside function, useEffect can't use async/await)
    // Could also define the test function in here
    // test(collectionRef);

    // Cleanup when dismount
    return function cleanup() {
      unSubscribeFromSnapshot();
    };
    // This syntax also works, I think?
    // return unSubscribeFromSnapshot;
  }, []);

  const test = async (collectionRef) => {
    const snapshot = await collectionRef.get();

    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    console.log('Collections Map', collectionsMap);
    dispatch(updateCollections(collectionsMap));
    setIsLoading(false);
  };

  return (
    <div className='shop-page'>
      <Routes>
        <Route
          path={`/`}
          element={<CollectionsOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path={`:collectionId`}
          element={<CollectionPageWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default ShopPage;
