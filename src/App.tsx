import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Issue from '@/pages/Issue';
import AllIssues from '@/pages/AllIssues/AllIssues';

import Header from '@/layout/Header/Header';
import { URL } from '@/constants';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path={URL.HOME} element={<Home />} />
				<Route path={URL.ISSUE} element={<Issue />} />
				<Route path={URL.ALL_ISSUES} element={<AllIssues />} />
			</Routes>
		</>
	);
};

export default App;
