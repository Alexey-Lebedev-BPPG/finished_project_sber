import type { StateSchema } from 'app/providers/StoreProvider';

export const getSortSelector = (state: StateSchema) => state.product.sort;
export const getSearchTextSelector = (state: StateSchema) =>
	state.product.searchText;
export const getPageSelector = (state: StateSchema) => state.product.page;
export const getPerPageSelector = (state: StateSchema) => state.product.perPage;
export const getProductsSelector = (state: StateSchema) => state.product;
