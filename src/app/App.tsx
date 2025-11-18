import { ToastifyProvider } from './providers/Toastify';
import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './providers/router';
import { ErrorBoundary } from './providers/ErrorBoundary';

const App = () => {
  return (
    <StoreProvider>
      <ErrorBoundary>
        <AppRouter />
        <ToastifyProvider />
      </ErrorBoundary>
    </StoreProvider>
  );
};

export default App;
