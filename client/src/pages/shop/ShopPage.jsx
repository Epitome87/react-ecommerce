import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collection/overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection/CollectionPage.container';
import { useDispatch } from 'react-redux';
import { fetchCollections } from '../../redux/shop/shopSlice';

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());

    // const collectionRef = firestore.collection('collections');

    // Using Firebase's Observer Pattern
    // unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   console.log('Collections Map', collectionsMap);
    //   dispatch(updateCollections(collectionsMap));
    //   setIsLoading(false);
    // });

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
      // unSubscribeFromSnapshot();
    };
    // This syntax also works, I think?
    // return unSubscribeFromSnapshot;
  }, [fetchCollections]); // Treat like componponentDidMount

  // const test = async (collectionRef) => {
  //   const snapshot = await collectionRef.get();

  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   console.log('Collections Map', collectionsMap);
  //   dispatch(updateCollections(collectionsMap));
  //   setIsLoading(false);
  // };

  return (
    <div className='shop-page'>
      <Routes>
        <Route path={`/`} element={<CollectionsOverviewContainer />} />
        <Route path={`:collectionId`} element={<CollectionPageContainer />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
