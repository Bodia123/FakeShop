import axios from 'axios';
import { BASE_URL } from 'utils/const';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { errorNotification, successNotification } from 'utils/notification';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      successNotification('Успішно створили!');

      return res.data;
    } catch (error) {
      console.log(error);
      errorNotification('Щось пішло не так!');

      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      successNotification('Успішно увійшли!');
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${res.data.access_token}` },
      });
      return login.data;
    } catch (error) {
      errorNotification('Невірна пошта або пароль');
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      successNotification('Успішно оновили!');

      return res.data;
    } catch (error) {
      console.log(error);
      errorNotification('Щось пішло не так!');

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  currentUser: null,
  cart: [],
  formType: 'signup',
  showForm: false,
};
const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {

      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);
      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
    removeItemFromCart: (state, { payload }) => {
      errorNotification('Видалено!');

      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});
export const { addItemToCart, toggleForm, toggleFormType, removeItemFromCart } =
  userSlice.actions;
export default userSlice.reducer;
