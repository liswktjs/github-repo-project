import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/layout/Header/Header';
import Issue from './pages/Issue';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/issues'} element={<Issue />} />
			</Routes>
		</>
	);
};

export default App;
