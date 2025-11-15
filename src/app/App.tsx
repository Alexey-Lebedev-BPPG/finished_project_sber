import { ToastifyProvider } from './providers/Toastify';
import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<StoreProvider>
			<AppRouter />
			<ToastifyProvider />
		</StoreProvider>
	);
};

export default App;
