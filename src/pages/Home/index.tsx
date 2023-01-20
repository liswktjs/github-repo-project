import { useEffect, useState } from 'react';

import Loading from '@/components/Loading/Loading';
import RepoCard from '@/components/RepoCard/RepoCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import ResponsiveList from '@/components/ResponsiveList/ResponsiveList';
import { Pagination } from '@mui/material';

import useGetSearchRepositories from '@/hooks/useGetSearchRepositories';

import { PER_PAGE_COUNT } from '@/constants';

import styled from '@emotion/styled';

const Home = () => {
	const [searchTarget, setSearchTarget] = useState('');
	const [pageNumber, setPageNumber] = useState(1);
	const {
		repoSearchResult,
		searchRepo,
		isRepoSearchLoading,
		isRepoSearchError,
		isRepoSearchSuccess,
	} = useGetSearchRepositories();

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		searchRepo({ searchTarget, pageNumber });
	}, [pageNumber]);

	const getTotalPageNumber = (totalCount: number) => {
		if (totalCount >= 1000) {
			return 100;
		}
		const count = Math.floor(totalCount / PER_PAGE_COUNT);
		return totalCount % PER_PAGE_COUNT === 0 ? count : count + 1;
	};

	return (
		<Container>
			<SearchBar
				searchTarget={searchTarget}
				setSearchTarget={setSearchTarget}
				onSearchButtonClick={() => {
					searchRepo({ searchTarget, pageNumber: 1 });
					setPageNumber(1);
					setIsLoading(true);
				}}
			/>
			{isRepoSearchLoading && isLoading && (
				<Loading loadingItemCount={PER_PAGE_COUNT} />
			)}
			<ResponsiveList>
				{isRepoSearchSuccess &&
					repoSearchResult &&
					repoSearchResult.items &&
					repoSearchResult.items.map((repoItem) => (
						<RepoCard
							key={repoItem.id}
							repo={repoItem}
							onRepoAddButtonClick={() => {
								console.log('search');
							}}
						/>
					))}
			</ResponsiveList>
			{isRepoSearchSuccess &&
				repoSearchResult &&
				repoSearchResult.total_count >= 1 && (
					<Pagination
						size="large"
						count={getTotalPageNumber(repoSearchResult.total_count)}
						page={pageNumber}
						onChange={(_, page) => setPageNumber(page)}
						sx={{ marginTop: 15 }}
					/>
				)}
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	margin-top: 30px;

	padding: 30px;
`;

export default Home;
