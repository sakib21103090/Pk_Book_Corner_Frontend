import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateUser } from './AuthAPI';

const initialState = {
  loginInUser: null,
  status: 'idle',
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await CreateUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loginInUser = action.payload;
      });
  },
});

export const selectLoginInUser = (state) => state.auth.loginInUser;

export default AuthSlice.reducer;
