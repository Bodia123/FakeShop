import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './Categories/categoriesSlice';
import productsSlice from './Products/ProductsSlice';
import { apiSlice } from './API/ApiSlice';
import UserSlice from './User/UserSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: UserSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
});
