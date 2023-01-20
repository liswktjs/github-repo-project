import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './SearchBar';

export default {
	title: 'SearchBar',
	component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
	searchTarget: 'search',
	setSearchTarget: () => {
		console.log('입력');
	},
	onSearchButtonClick: () => {
		console.log('검색');
	},
};
