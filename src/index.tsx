import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import App from 'app/App';
import 'react-toastify/dist/ReactToastify.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
