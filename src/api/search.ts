import { BASE_URL } from '@/api/apiURL';
import { PER_PAGE_COUNT } from '@/constants';
interface SearchRepositoriesProps {
	searchTarget: string;
	pageNumber: number;
}

export const searchRepositories = async ({
	searchTarget,
	pageNumber,
}: SearchRepositoriesProps) => {
	const response = await fetch(
		`${BASE_URL}/search/repositories?q=${searchTarget}&per_page=${PER_PAGE_COUNT}&page=${pageNumber}&sort=stars`,
	);
	if (response.status === 403) {
		throw new Error('Github api의 제한 요청수를 초과하였습니다');
	}
	return response.json();
};

export interface searchRepositoriesIssuesProps {
	searchTarget: string;
	pageNumber: number;
}

export const searchRepositoriesIssues = async ({
	searchTarget,
	pageNumber,
}: searchRepositoriesIssuesProps) => {
	const response = await fetch(
		`${BASE_URL}/repos/${searchTarget}/issues?state=all&per_page=10&page=${pageNumber}`,
	);
	if (response.status === 403) {
		throw new Error('Github api의 제한 요청수를 초과하였습니다');
	}
	return response.json();
};

export const searchAllRepositoriesIssues = async (
	searchTargetList: string[],
) => {
	const fetchList = searchTargetList.map((item) =>
		fetch(`${BASE_URL}/repos/${item}/issues?state=all`),
	);
	return Promise.all(fetchList).then((response) => {
		if (response && response[0].status === 403) {
			throw new Error('Github api의 제한 요청수를 초과하였습니다');
		}
		return Promise.all(response.map((item) => item.json()));
	});
};
