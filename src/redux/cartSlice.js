import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartItems: [],
  isHidden: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCartVisibility: (state) => {
      console.log('TOGGLING');
      state.isHidden = !state.isHidden;
    },
    addItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {},
  },
});

export const { toggleCartVisibility, addItem } = cartSlice.actions;

export default cartSlice.reducer;
