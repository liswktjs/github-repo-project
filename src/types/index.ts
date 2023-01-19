export interface OwnerType {
	login: string;
	avatar_url: string;
	html_url: string;
}

export interface SearchItemType {
	id: number;
	full_name: string;
	owner: OwnerType;
	html_url: string;
	description: string;
	has_issues: boolean;
	open_issues_count: number;
	updated_at: string;
}

export interface SearchResultType {
	total_count: number;
	items: SearchItemType[];
}

export interface LabelItemType {
	id: number;
	name: string;
	color: string;
}

export interface IssueItemType {
	id: number;
	html_url: string;
	number: number;
	title: string;
	user: OwnerType;
	labels: LabelItemType[];
	state: string;
	comments: number;
}
