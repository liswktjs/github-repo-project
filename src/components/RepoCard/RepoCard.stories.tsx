import { Meta, Story } from '@storybook/react';
import RepoCard, { RepoCardProps } from './RepoCard';

export default {
	title: 'RepoCard',
	component: RepoCard,
} as Meta;

const Template: Story<RepoCardProps> = (args) => <RepoCard {...args} />;

export const DefaultRepoCard = Template.bind({});
DefaultRepoCard.args = {
	repo: {
		id: 508116421,
		full_name: 'woowacourse-teams/2022-gong-seek',
		owner: {
			login: 'woowacourse-teams',
			avatar_url: 'https://avatars.githubusercontent.com/u/66992148?v=4',
			html_url: 'https://github.com/woowacourse-teams',
		},
		html_url: 'https://github.com/woowacourse-teams/2022-gong-seek',
		description: '공식(공유해줘 너의 지식) : 우테코 크루들을 위한 질문 게시판',
		has_issues: true,
		open_issues_count: 35,
		updated_at: '2022-12-01T02:23:09Z',
	},
	onRepoAddButtonClick: () => {
		console.log('repo저장하는 버튼 클릭');
	},
	isSaved: true,
};
