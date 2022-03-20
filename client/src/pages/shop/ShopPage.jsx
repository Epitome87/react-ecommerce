import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collection/overview/CollectionsOverview.container';
import CollectionPageContainer from '../collection/CollectionPage.container';
import { useDispatch } from 'react-redux';
import { fetchCollections } from '../../redux/shop/shopSlice';
import ItemPage from '../item/ItemPage';

function ShopPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [fetchCollections]); // Treat like componponentDidMount

  return (
    <div className='shop-page'>
      <Routes>
        <Route path={`/`} element={<CollectionsOverviewContainer />} />
        <Route path={`:collectionId/`} element={<CollectionPageContainer />} />
        <Route path=':collectionId/:productId' element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
