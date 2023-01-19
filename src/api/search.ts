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
	return response.json();
};

export interface searchRepositoriesIssuesProps {
	owner: string;
	repo: string;
	pageNumber: number;
}

// export const searchRepositoriesIssues = async ({
// 	owner,
// 	repo,
// 	pageNumber,
// }: searchRepositoriesIssuesProps) => {
// 	const response = await fetch(
// 		`${BASE_URL}/repos/${owner}/${repo}/issues?state=all&per_page=10&page=${pageNumber}`,
// 	);
// };
