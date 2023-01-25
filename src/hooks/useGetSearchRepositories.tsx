import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { searchRepositories } from '@/api/search';

import { RepoSearchResultType } from '@/types';

const useGetSearchRepositories = () => {
	const {
		data: repoSearchResult,
		isLoading: isRepoSearchLoading,
		isError: isRepoSearchError,
		isSuccess: isRepoSearchSuccess,
		mutate: searchRepo,
		error: searchError,
	} = useMutation<
		RepoSearchResultType,
		Error,
		{ searchTarget: string; pageNumber: number }
	>({
		mutationFn: searchRepositories,
		mutationKey: ['repo'],
	});

	useEffect(() => {
		if (isRepoSearchError) {
			window.alert(searchError);
			return;
		}
	}, [isRepoSearchError]);

	return {
		repoSearchResult,
		searchRepo,
		isRepoSearchLoading,
		isRepoSearchSuccess,
	};
};

export default useGetSearchRepositories;
