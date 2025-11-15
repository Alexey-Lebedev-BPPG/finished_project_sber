import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ISort, ProductSchema } from '../types/productSchema';

const initialState: ProductSchema = {
  searchText: '',
  sort: 'newest',
  page: 1,
  perPage: 6,
};

export const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    setSort(state, { payload }: PayloadAction<ISort>) {
      state.sort = payload;
    },
    setSearchText(state, { payload }: PayloadAction<string>) {
      state.searchText = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
  },
});

export const { setPage, setSearchText, setSort } = productSlice.actions;
export const { reducer: productReducer } = productSlice;
