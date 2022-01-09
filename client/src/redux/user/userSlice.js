import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
