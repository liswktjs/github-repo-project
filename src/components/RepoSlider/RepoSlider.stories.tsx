import { Meta } from '@storybook/react';
import { useState } from 'react';
import RepoSlider from './RepoSlider';

export default {
	title: 'RepoSlider',
	component: RepoSlider,
} as Meta;

const Template = () => {
	const [currentRepoIndex, setCurrentRepoIndex] = useState(0);

	const repoList = [
		'Gyuchool/gong-seek-git-flow-mission',
		'liswktjs/gong-seek-blog',
		'gong-seek/gong-seek-blog',
		'woowacourse-teams/2022-gong-seek',
	];

	return (
		<RepoSlider
			repoList={repoList}
			handleSearchIssues={() => {
				console.log('이슈 검색');
			}}
			currentRepoIndex={currentRepoIndex}
			setCurrentRepoIndex={setCurrentRepoIndex}
		/>
	);
};

export const DefaultRepoSlider = Template.bind({});
