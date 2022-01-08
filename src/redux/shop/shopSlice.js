import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const initialShopState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

// Create our Thunk to handle async collection fetching
export const fetchCollections = createAsyncThunk(
  'shop/fetchCollectionsStatus',
  async (thunkAPI) => {
    const collectionRef = firestore.collection('collections');
    const snapshot = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

    return collectionsMap;
  }
);

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialShopState,
  reducers: {
    updateCollections: (state, action) => {
      state.collections = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      // Set collections to the state
      state.collections = action.payload;
      state.isFetching = false;
    });
    builder.addCase(fetchCollections.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.errorMessage = 'Error fetching collections';
      state.isFetching = false;
    });
  },
});

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;
