import { createSlice } from '@reduxjs/toolkit';

const initialShopState = {
  collections: null,
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
