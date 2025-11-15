import type { StateSchema } from 'app/providers/StoreProvider';

export const getSortSelector = (state: StateSchema) =>
  state.product.products.sort;
export const getSearchTextSelector = (state: StateSchema) =>
  state.product.products.searchText;
export const getPageSelector = (state: StateSchema) =>
  state.product.products.page;
export const getPerPageSelector = (state: StateSchema) =>
  state.product.products.perPage;
export const getProductsSelector = (state: StateSchema) =>
  state.product.products;
