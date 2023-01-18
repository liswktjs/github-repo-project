import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CssBaseline from '@mui/material/CssBaseline';

import App from '@/App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

export const queryClient = new QueryClient();

root.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient} />
		<CssBaseline />
		<App />
	</BrowserRouter>,
);
