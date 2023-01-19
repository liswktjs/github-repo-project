import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './SearchBar';

export default {
	title: 'SearchBar',
	component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
	onSearchButtonClick: (searchTarget: string) => {
		console.log(searchTarget);
	},
};
