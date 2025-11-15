import type { StateSchema } from 'app/providers/StoreProvider';

export const getCartProductsSelector = (state: StateSchema) =>
  state.product.cart;
