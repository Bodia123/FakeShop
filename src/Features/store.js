import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './Categories/categoriesSlice';
import productsSlice from './Products/ProductsSlice';
import { apiSlice } from './API/ApiSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
});
