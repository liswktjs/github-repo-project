import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/layout/Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
