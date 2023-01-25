import { useState, useEffect } from 'react';

import IssueCard from '@/components/IssueCard/IssueCard';
import Loading from '@/components/Loading/Loading';
import ResponsiveList from '@/components/ResponsiveList/ResponsiveList';
import { PER_PAGE_COUNT } from '@/constants';
import { Pagination } from '@mui/material';

import useGetSearchAllIssues from '@/hooks/useGetSearchAllIssues';

import store from '@/store';
import { IssueItemType } from '@/types';

import styled from '@emotion/styled';

const AllIssues = () => {
	const searchTargetList = store.getRepoInfo() as string[];

	const {
		allIssues,
		totalData,
		isAllIssuesLoading,
		isAllIssuesError,
		isAllIssuesSuccess,
	} = useGetSearchAllIssues({ searchTargetList });

	const [currentData, setCurrentData] =
		useState<{ issueItem: IssueItemType; repoName: string }[]>();
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		if (totalData && totalData.length >= 1) {
			setCurrentData(
				totalData.slice(
					(pageNumber - 1) * PER_PAGE_COUNT,
					(pageNumber - 1) * PER_PAGE_COUNT + PER_PAGE_COUNT,
				),
			);
		}
	}, [pageNumber, totalData]);

	if (isAllIssuesLoading) {
		return (
			<Container>
				<Loading loadingItemCount={PER_PAGE_COUNT} />
			</Container>
		);
	}

	return (
		<Container>
			<Title>등록한 Repository들의 이슈들을 랜덤하게 모아보기</Title>
			<ResponsiveList>
				{isAllIssuesSuccess &&
					allIssues &&
					allIssues.length &&
					currentData &&
					currentData.length >= 1 &&
					currentData.map((item) => (
						<IssueCard
							key={item.issueItem.id}
							issue={item.issueItem}
							repoName={item.repoName}
						/>
					))}
			</ResponsiveList>
			{isAllIssuesSuccess && totalData && totalData.length === 0 && (
				<EmptyMessage>
					선택하신 Repository에는 등록된 Issue가 없습니다
				</EmptyMessage>
			)}
			{isAllIssuesSuccess && totalData && totalData.length >= 1 && (
				<Pagination
					size="large"
					count={
						totalData.length % PER_PAGE_COUNT === 0
							? Math.floor(totalData.length / PER_PAGE_COUNT)
							: Math.floor(totalData.length / PER_PAGE_COUNT) + 1
					}
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
	padding-bottom: 50px;
`;

const Title = styled.h3`
	display: block;
	margin: 40px;
	font-size: 20px;
`;

const EmptyMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 400px;
`;

export default AllIssues;
