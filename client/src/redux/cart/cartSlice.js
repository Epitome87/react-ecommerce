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

    removeItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      // Removed item exists with a quantity of 1: Remove it from cart list
      if (existingCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        // Removed item exists with quantity greater than 1: Reduce quantity by 1
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    },

    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { toggleCartVisibility, addItem, removeItem, clearItem } =
  cartSlice.actions;

export default cartSlice.reducer;
