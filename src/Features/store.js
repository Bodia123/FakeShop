import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './Categories/categoriesSlice';
import productsSlice from './Products/ProductsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
});
