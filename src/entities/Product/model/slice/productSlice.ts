import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ISort, ProductSchema } from '../types/productSchema';

const initialState: ProductSchema = {
  products: {
    searchText: '',
    sort: 'newest',
    page: 1,
    perPage: 6,
  },
  cart: [],
};

export const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    setSort(state, { payload }: PayloadAction<ISort>) {
      state.products.sort = payload;
    },
    setSearchText(state, { payload }: PayloadAction<string>) {
      state.products.searchText = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.products.page = payload;
    },
    addCartProduct(state, { payload }: PayloadAction<CartProduct>) {
      state.cart = [...state.cart, payload];
    },
    deleteCartProduct(state, { payload }: PayloadAction<CartProduct['id']>) {
      state.cart = state.cart.filter(p => p.id !== payload);
    },
    setCartProductCount(
      state,
      { payload }: PayloadAction<Pick<CartProduct, 'id' | 'count'>>,
    ) {
      state.cart = state.cart.map(p => ({
        ...p,
        count: p.id === payload.id ? payload.count : p.count,
      }));
    },
  },
});

export const {
  setPage,
  setSearchText,
  setSort,
  addCartProduct,
  deleteCartProduct,
  setCartProductCount,
} = productSlice.actions;
export const { reducer: productReducer } = productSlice;
