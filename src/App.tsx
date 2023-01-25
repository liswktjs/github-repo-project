import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';

import Header from '@/layout/Header/Header';
import { URL } from '@/constants';

const Issue = React.lazy(() => import('@/pages/Issue'));
const AllIssues = React.lazy(() => import('@/pages/AllIssues/AllIssues'));

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div>로딩중</div>}>
				<Routes>
					<Route path={URL.HOME} element={<Home />} />
					<Route path={URL.ISSUE} element={<Issue />} />
					<Route path={URL.ALL_ISSUES} element={<AllIssues />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;
