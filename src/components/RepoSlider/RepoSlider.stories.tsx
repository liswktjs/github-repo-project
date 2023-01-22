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

	const onIssueSearchButtonClick = () => {
		console.log('이슈보기 버튼 클릭');
	};
	const onDeleteRepoButtonClick = () => {
		console.log('저장소 삭제 버튼 클릭');
	};

	return (
		<RepoSlider
			repoList={repoList}
			onIssueSearchButtonClick={onIssueSearchButtonClick}
			currentRepoIndex={currentRepoIndex}
			setCurrentRepoIndex={setCurrentRepoIndex}
			onDeleteRepoButtonClick={onDeleteRepoButtonClick}
		/>
	);
};

export const DefaultRepoSlider = Template.bind({});
