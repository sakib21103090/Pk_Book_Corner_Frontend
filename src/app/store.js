import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/BookList/Components/BooksSlice';
import cartReducer from '../features/Cart/CartSlice';
import authReducer from '../features/Auth/Components/AuthSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart:cartReducer,
    auth:authReducer,
  },
});
