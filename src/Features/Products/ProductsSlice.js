import axios from 'axios';
import { BASE_URL } from 'utils/const';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { shuffle } from 'utils/common';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
  filtered: [],
  related: [],
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProduct: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});
export default productsSlice.reducer;
export const { filterByPrice, getRelatedProduct } = productsSlice.actions;
