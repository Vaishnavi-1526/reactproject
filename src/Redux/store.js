import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Redux/imagesSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;