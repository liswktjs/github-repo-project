import { Meta, Story } from '@storybook/react';
import Loading, { LoadingProps } from './Loading';

export default {
	title: 'Loading',
	component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
	loadingItemCount: 10,
};
