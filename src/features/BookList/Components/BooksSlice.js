import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './BooksListApi';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    
    return response.data;
  }
);

export const BooksListApi = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment} = BooksListApi.actions;

export const selectCount = (state) => state.counter.value;



export default BooksListApi.reducer;
