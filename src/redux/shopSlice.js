import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from './shop.data';

const initialShopState = {
  collections: SHOP_DATA,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialShopState,
  reducers: {
    updateCollections: (state, action) => {
      state.collections = action.payload;
    },
  },
});

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;
