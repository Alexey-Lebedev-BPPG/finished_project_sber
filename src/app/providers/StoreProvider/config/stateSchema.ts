import type { rtkApi } from 'shared/api/rtkApi';
import type { createReduxStore } from './store';
import type { UserSchema } from 'entities/User';
import type { CartSchema } from 'entities/Cart';
import type { ProductSchema } from 'entities/Product';

export interface StateSchema {
	user: UserSchema;
	cart: CartSchema;
	product: ProductSchema;

	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
