import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUserOrders } from './UserAPI';

const initialState = {
  userOrders:[],
  status: 'idle',
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchLoggedInUserOrders',
  async (orders) => {
    const response = await fetchLoggedInUserOrders(orders);
    
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
   
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // store all the address with user information 
        state.userOrders = action.payload;
      });
  },
});

export const selectUsersOrder = (state) => state.user.userOrders;
export const { increment} = UserSlice.actions;


export default UserSlice.reducer;
