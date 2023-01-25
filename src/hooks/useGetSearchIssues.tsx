import { useMutation } from '@tanstack/react-query';

import { searchRepositoriesIssues } from '@/api/search';

import { IssueSearchResultType } from '@/types';
import { useEffect } from 'react';

const useGetSearchIssues = () => {
	const {
		data: issueSearchResult,
		isLoading: isIssueSearchLoading,
		isError: isIssuesSearchError,
		isSuccess: isIssuesSearchSuccess,
		mutate: searchIssues,
		error: searchError,
	} = useMutation<
		IssueSearchResultType,
		Error,
		{ searchTarget: string; pageNumber: number }
	>({ mutationFn: searchRepositoriesIssues, mutationKey: ['issues'] });

	useEffect(() => {
		if (isIssuesSearchError) {
			window.alert(searchError);
			return;
		}
	}, [isIssuesSearchError]);

	return {
		issueSearchResult,
		isIssueSearchLoading,
		isIssuesSearchSuccess,
		searchIssues,
	};
};

export default useGetSearchIssues;
