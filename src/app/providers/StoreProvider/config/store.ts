import {
  combineReducers,
  configureStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import type { StateSchema } from './stateSchema';
import { rtkApi } from 'shared/api/rtkApi';
import { userReducer } from 'entities/User';
import { productReducer } from 'entities/Product';
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    product: productReducer,

    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const persistConfig = {
    key: 'root',
    storage: sessionStorage,
  };

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(rootReducers),
  );

  const store = configureStore({
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(rtkApi.middleware),
    preloadedState: initialState,
    reducer: persistedReducer as unknown as ReducersMapObject<StateSchema>,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
