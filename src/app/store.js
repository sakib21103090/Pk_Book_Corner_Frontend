import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/BookList/Components/BooksSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
