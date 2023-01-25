import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { searchAllRepositoriesIssues } from '@/api/search';

import { IssueItemType } from '@/types';
import { URL } from '@/constants';

interface useGetSearchAllIssuesProps {
	searchTargetList: string[];
}

const useGetSearchAllIssues = ({
	searchTargetList,
}: useGetSearchAllIssuesProps) => {
	const {
		data: allIssues,
		isLoading: isAllIssuesLoading,
		isError: isAllIssuesError,
		isSuccess: isAllIssuesSuccess,
		error: searchError,
	} = useQuery<IssueItemType[][]>(['all-issues'], () =>
		searchAllRepositoriesIssues(searchTargetList),
	);
	const [totalData, setTotalData] = useState<
		{ issueItem: IssueItemType; repoName: string }[]
	>([]);
	const navigate = useNavigate();

	const isEmptyResult = () => {
		let isEmpty = true;
		if (isAllIssuesSuccess && allIssues) {
			allIssues.forEach((item) => {
				if (item.length >= 1) {
					isEmpty = false;
				}
			});
		}
		return isEmpty;
	};

	useEffect(() => {
		if (isAllIssuesError) {
			window.alert(searchError);
			navigate(URL.HOME);
			return;
		}
	}, [isAllIssuesError]);

	useEffect(() => {
		if (isAllIssuesSuccess && allIssues && allIssues.length >= 1) {
			if (isEmptyResult()) {
				setTotalData([]);
				return;
			}

			setTotalData(
				allIssues
					.map((item, index) => {
						return item.map((issue) => {
							return {
								issueItem: issue,
								repoName: searchTargetList[index],
							};
						});
					})
					.flat()
					.sort(() => Math.random() - 0.5),
			);
		}
	}, [isAllIssuesSuccess]);

	return {
		allIssues,
		totalData,
		isAllIssuesLoading,
		isAllIssuesSuccess,
	};
};

export default useGetSearchAllIssues;
