import { Meta } from '@storybook/react';
import Header from './Header';

export default {
	title: 'Header',
	component: Header,
} as Meta;

const Template = () => <Header />;

export const DefaultRepoCard = Template.bind({});
