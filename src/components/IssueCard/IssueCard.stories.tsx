import { Meta, Story } from '@storybook/react';
import IssueCard, { IssueCardProps } from './IssueCard';

export default {
	title: 'IssueCard',
	component: IssueCard,
} as Meta;

const Template: Story<IssueCardProps> = (args) => <IssueCard {...args} />;

export const DefaultIssueCard = Template.bind({});
DefaultIssueCard.args = {
	issue: {
		id: 1425409692,
		html_url: 'https://github.com/woowacourse-teams/2022-gong-seek/pull/882',
		number: 882,
		title:
			'Home이 로드 될 때에 바로 사용되지 않는 컴포넌트에 대해서 동적 import를 진행한다 ',
		user: {
			login: 'liswktjs',
			avatar_url: 'https://avatars.githubusercontent.com/u/60773373?v=4',
			html_url: 'https://github.com/liswktjs',
		},
		labels: [
			{
				id: 4274932964,
				name: '🐛 bug',
				color: 'd73a4a',
			},
			{
				id: 4279769716,
				name: '🌈 frontend',
				color: 'fFFD24',
			},
		],
		state: 'closed',
		comments: 0,
		pull_request: {},
	},
	repoName: '2022-gong-seek',
};
