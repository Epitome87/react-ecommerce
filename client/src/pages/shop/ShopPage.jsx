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

    // Cleanup when dismount
    return function cleanup() {
      // unSubscribeFromSnapshot();
    };
  }, [fetchCollections]); // Treat like componponentDidMount

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
