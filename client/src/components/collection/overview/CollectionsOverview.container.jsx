import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../../redux/shop/shop.selectors';
import WithSpinner from '../../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
