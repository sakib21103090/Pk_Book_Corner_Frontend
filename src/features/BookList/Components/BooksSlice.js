import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters,fetchAuthorName, fetchCategory} from './BooksListApi';

const initialState = {
  products: [],
  AuthorName:[],
  category:[],
  status: 'idle',
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
async ({filter,sort}) => {
    const response = await fetchProductsByFilters(filter,sort);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAuthorNameAsync = createAsyncThunk(
  'product/fetchAuthorName',
async () => {
    const response = await fetchAuthorName();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCategoryAsync = createAsyncThunk(
  'product/fetchCategory',
async () => {
    const response = await fetchCategory();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const BooksSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      // for fetch authorName
      .addCase(fetchAuthorNameAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthorNameAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.AuthorName = action.payload;
      })
      // for fetch category
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.category = action.payload;
      })
  },
});

export const { increment } = BooksSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectAllAuthorName = (state) => state.product.AuthorName;
export const selectAllCategory = (state) => state.product.category;

export default BooksSlice.reducer;