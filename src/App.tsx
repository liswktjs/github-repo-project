import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Issue from '@/pages/Issue';
import AllIssues from '@/pages/AllIssues/AllIssues';

import Header from '@/layout/Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/issues'} element={<Issue />} />
				<Route path={'/all-issues'} element={<AllIssues />} />
			</Routes>
		</>
	);
};

export default App;
