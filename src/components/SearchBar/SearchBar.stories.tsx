import { Meta } from '@storybook/react';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default {
	title: 'SearchBar',
	component: SearchBar,
} as Meta;

const Template = () => {
	const [searchTarget, setSearchTarget] = useState('');
	const onSearchButtonClick = () => {
		console.log('검색버튼 클릭');
	};
	return (
		<SearchBar
			searchTarget={searchTarget}
			setSearchTarget={setSearchTarget}
			onSearchButtonClick={onSearchButtonClick}
		/>
	);
};

export const DefaultSearchBar = Template.bind({});
