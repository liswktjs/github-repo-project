import { useEffect, useState } from 'react';

import IssueCard from '@/components/IssueCard/IssueCard';
import Loading from '@/components/Loading/Loading';
import RepoSlider from '@/components/RepoSlider/RepoSlider';
import ResponsiveList from '@/components/ResponsiveList/ResponsiveList';
import { Pagination } from '@mui/material';

import useGetSearchIssues from '@/hooks/useGetSearchIssues';

import store from '@/store';

import { PER_PAGE_COUNT } from '@/constants';

import styled from '@emotion/styled';

const Issue = () => {
	const repoList = store.getRepoInfo() as string[] | [];

	const [isLoading, setIsLoading] = useState(false);
	const [currentRepoIndex, setCurrentRepoIndex] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalCount, setTotalCount] = useState(1);
	const [pageIndexLog, setPageIndexLog] = useState([1]);

	const {
		issueSearchResult,
		isIssueSearchLoading,
		isIssuesSearchError,
		isIssuesSearchSuccess,
		searchIssues,
	} = useGetSearchIssues();

	// issue 페이지를 최초 렌더링시, local storage에 저장된 값이 있다면 검색을 진행합니다
	useEffect(() => {
		if (repoList.length >= 1) {
			searchIssues({ pageNumber: 1, searchTarget: repoList[0] });
		}
	}, []);

	//issue가 바뀔 때에 Pagination관련 상태들을 모두 초기화 한다
	useEffect(() => {
		setPageNumber(1);
		setTotalCount(1);
		setPageIndexLog([1]);
	}, [currentRepoIndex]);

	// 페이지네이션 상 pageNumber를 누르면 새로운 페이지 요청이 시작됩니다
	// 추후의 pagination 번호 생성의 기준을 만들기 위해 log를 기록합니다
	useEffect(() => {
		searchIssues({ searchTarget: repoList[currentRepoIndex], pageNumber });

		setPageIndexLog([...pageIndexLog, pageNumber]);
	}, [pageNumber]);

	// 요청이 성공적으로 끝났을 때에 응답값의 개수가 10개일 경우, 다음 페이지가 존재한다고 가정하고 totalCount의 숫자를 +1합니다
	// 제일 끝단의 pageNumber가 눌러졌을 때에만 해당 작업을 진행합니다
	useEffect(() => {
		if (isIssuesSearchSuccess && issueSearchResult) {
			if (issueSearchResult.length === 10) {
				const maxIndex = Math.max(...pageIndexLog);
				if (maxIndex == pageNumber) {
					console.log(pageIndexLog, totalCount);
					setTotalCount(totalCount + 1);
					return;
				}
			}
		}
	}, [isIssuesSearchSuccess, issueSearchResult]);

	const handleIssueSearchEvent =
		(pageNumber: number) => (searchTarget: string) => {
			searchIssues({
				searchTarget,
				pageNumber: pageNumber,
			});
			setIsLoading(true);
		};

	return (
		<Container>
			<Title>Repository의 Issue들 모아보기</Title>
			<RepoSlider
				repoList={repoList}
				handleSearchIssues={handleIssueSearchEvent(pageNumber)}
				currentRepoIndex={currentRepoIndex}
				setCurrentRepoIndex={setCurrentRepoIndex}
			/>
			{isIssueSearchLoading && isLoading && (
				<Loading loadingItemCount={PER_PAGE_COUNT} />
			)}

			{isIssuesSearchSuccess &&
				issueSearchResult &&
				issueSearchResult.length >= 1 && (
					<ResponsiveList>
						{issueSearchResult.map((item) => (
							<IssueCard
								key={item.id}
								issue={item}
								repoName={repoList[currentRepoIndex]}
							/>
						))}
					</ResponsiveList>
				)}
			{isIssuesSearchSuccess &&
				issueSearchResult &&
				issueSearchResult.length === 0 &&
				repoList &&
				repoList.length >= 1 && (
					<EmptyMessage>
						해당 Repository에는 등록된 이슈가 없습니다
					</EmptyMessage>
				)}

			{isIssuesSearchSuccess &&
				issueSearchResult &&
				issueSearchResult.length >= 1 && (
					<Pagination
						size="large"
						count={totalCount}
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
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2``;

const EmptyMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 400px;
`;

export default Issue;
