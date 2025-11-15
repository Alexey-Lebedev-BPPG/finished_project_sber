import type { FC, ReactNode } from 'react';
import { createReduxStore } from '../config/store';
import type { StateSchema } from '../config/stateSchema';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<IStoreProviderProps> = props => {
  const { children, initialState } = props;

  const { store, persistor } = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
