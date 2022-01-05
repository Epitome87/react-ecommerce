import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from './shop.data';

const initialShopState = {
  collections: SHOP_DATA,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialShopState,
  reducers: {
    stuff: (state, action) => {},
  },
});

export const { stuff } = shopSlice.actions;

export default shopSlice.reducer;
