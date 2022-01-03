import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  value: null,
  isHidden: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCartVisibility: (state) => {
      state.isHidden = !state.isHidden;
    },
    addItem: (state, action) => {},
  },
});

export const { toggleCartVisibility } = cartSlice.actions;

export default cartSlice.reducer;
