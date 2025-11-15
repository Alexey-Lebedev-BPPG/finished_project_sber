import { ToastContainer } from 'react-toastify';

export const ToastifyProvider = () => (
	<ToastContainer
		position='top-right'
		autoClose={5000}
		hideProgressBar={false}
		pauseOnHover
		theme='colored'
	/>
);
