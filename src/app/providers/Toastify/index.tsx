import type { FC } from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastifyProvider: FC = () => (
  <ToastContainer
    position='top-right'
    autoClose={5000}
    hideProgressBar={false}
    pauseOnHover
    theme='colored'
  />
);
