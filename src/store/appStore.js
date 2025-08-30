// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import movieReducer from './movieSlice'

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies:movieReducer
  },
});

export default appStore;
