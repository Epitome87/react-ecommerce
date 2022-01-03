import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
