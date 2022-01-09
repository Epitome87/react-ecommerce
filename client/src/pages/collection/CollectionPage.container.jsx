import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
