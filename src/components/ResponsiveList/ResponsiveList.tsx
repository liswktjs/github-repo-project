import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

const ResponsiveList = ({ children }: PropsWithChildren) => {
	return <Container>{children}</Container>;
};

const Container = styled.li`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	@media (min-width: 1100px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		margin: 20px auto 0 auto;
	}
	@media (min-width: 1500px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		margin: 20px auto 0 auto;
	}
`;

export default ResponsiveList;
