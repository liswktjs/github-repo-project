import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const queryClient = new QueryClient();

export const decorators = [
	(Story) => (
		<BrowserRouter>
			<QueryClientProvider client={queryClient} />
			<CssBaseline />
			<Story />
		</BrowserRouter>
	),
];
