import axios from 'axios';
import { BASE_URL } from 'utils/const';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [],
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});
export default categoriesSlice.reducer;
