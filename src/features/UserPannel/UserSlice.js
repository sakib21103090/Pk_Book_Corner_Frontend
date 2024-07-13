import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount, fetchLoggedInUser } from './UserAPI';

const initialState = {
  userInformation: null,
  status: 'idle',
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async (amount) => {
    const response = await fetchLoggedInUser(amount);
    
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // store all the address with user information 
        state.userInformation = action.payload;
      });
  },
});

export const { increment} = UserSlice.actions;

export const selectCount = (state) => state.counter.value;



export default UserSlice.reducer;
