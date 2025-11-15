import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartSchema } from '../types/cartSchema';

const initialState: CartSchema = {
	products: [],
};

export const cartSlice = createSlice({
	initialState,
	name: 'cart',
	reducers: {
		addCartProduct(state, { payload }: PayloadAction<CartProduct>) {
			state.products = [...state.products, payload];
		},
		deleteCartProduct(state, { payload }: PayloadAction<CartProduct['id']>) {
			state.products = state.products.filter((p) => p.id !== payload);
		},
		setCartProductCount(
			state,
			{ payload }: PayloadAction<Pick<CartProduct, 'id' | 'count'>>
		) {
			state.products = state.products.map((p) => ({
				...p,
				count: p.id === payload.id ? payload.count : p.count,
			}));
		},
	},
});

export const { addCartProduct, deleteCartProduct, setCartProductCount } =
	cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;
