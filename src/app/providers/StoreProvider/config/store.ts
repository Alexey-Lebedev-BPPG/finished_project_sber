import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './stateSchema';
import { rtkApi } from 'shared/api/rtkApi';
import { userReducer } from 'entities/User';
import { cartReducer } from 'entities/Cart';
import { productReducer } from 'entities/Product';

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		user: userReducer,
		cart: cartReducer,
		product: productReducer,

		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const store = configureStore({
		devTools: import.meta.env.NODE_ENV !== 'production',
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(rtkApi.middleware),
		preloadedState: initialState,
		reducer: rootReducers,
	});

	return store;
};

// ort { configureStore } from '@reduxjs/toolkit';
// import AppApi from '../api/ApiServise';
// import { rootReducer } from './reducers/rootReducer';
// import { authApi } from './api/authApi';
// import { productsApi } from './api/productsApi';

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: AppApi,
//       },
//     }).concat([authApi.middleware, productsApi.middleware]),
// });
