import { useMutation } from '@tanstack/react-query';
import { searchRepositories } from '@/api/search';

import { SearchResultType } from '@/types';

const useGetSearchRepositories = () => {
	const {
		data: repoSearchResult,
		isLoading: isRepoSearchLoading,
		isError: isRepoSearchError,
		isSuccess: isRepoSearchSuccess,
		mutate: searchRepo,
	} = useMutation<
		SearchResultType,
		Error,
		{ searchTarget: string; pageNumber: number }
	>({
		mutationFn: searchRepositories,
		mutationKey: ['repo'],
	});

	return {
		repoSearchResult,
		searchRepo,
		isRepoSearchLoading,
		isRepoSearchError,
		isRepoSearchSuccess,
	};
};

export default useGetSearchRepositories;
