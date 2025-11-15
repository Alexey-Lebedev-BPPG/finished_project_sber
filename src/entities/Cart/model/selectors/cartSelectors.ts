import type { StateSchema } from 'app/providers/StoreProvider';

export const getCartProductsSelector = (state: StateSchema) =>
	state.cart.products;
