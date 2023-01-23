import { useMutation } from '@tanstack/react-query';

import { searchRepositoriesIssues } from '@/api/search';

import { IssueSearchResultType } from '@/types';

const useGetSearchIssues = () => {
	const {
		data: issueSearchResult,
		isLoading: isIssueSearchLoading,
		isError: isIssuesSearchError,
		isSuccess: isIssuesSearchSuccess,
		mutate: searchIssues,
	} = useMutation<
		IssueSearchResultType,
		Error,
		{ searchTarget: string; pageNumber: number }
	>({ mutationFn: searchRepositoriesIssues, mutationKey: ['issues'] });

	return {
		issueSearchResult,
		isIssueSearchLoading,
		isIssuesSearchError,
		isIssuesSearchSuccess,
		searchIssues,
	};
};

export default useGetSearchIssues;
