import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './stateSchema';
import { rtkApi } from 'shared/api/rtkApi';
import { userReducer } from 'entities/User';
import { productReducer } from 'entities/Product';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    product: productReducer,

    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const store = configureStore({
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rtkApi.middleware),
    preloadedState: initialState,
    reducer: rootReducers,
  });

  return store;
};
