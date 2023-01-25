import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Paper, Tab, Tabs } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import styled from '@emotion/styled';
import { COLOR } from '@/styles/color';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [tab, setTab] = useState<'HOME' | 'ISSUE'>('HOME');

	useEffect(() => {
		if (location.pathname === '/') {
			setTab('HOME');
		}
		if (location.pathname === '/issues') {
			setTab('ISSUE');
		}
	}, [location]);

	const onHomeTabClick = () => {
		setTab('HOME');
		navigate('/');
	};

	const onIssueTabClick = () => {
		setTab('ISSUE');
		navigate('/issues');
	};

	return (
		<Paper
			role={'heading'}
			elevation={3}
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				paddingTop: '10px',
				backgroundColor: `${COLOR.ORANGE}`,
			}}
		>
			<ProjectName onClick={onHomeTabClick}>
				<IconContainer>
					<GitHub fontSize="large" />
				</IconContainer>
				Github Repo Project
			</ProjectName>
			<Tabs value={tab} textColor="secondary" indicatorColor="secondary">
				<Tab
					label="HOME"
					value="HOME"
					onClick={onHomeTabClick}
					sx={{ color: `${COLOR.BLACK}`, fontSize: '16px' }}
				/>
				<Tab
					label="ISSUE"
					value="ISSUE"
					onClick={onIssueTabClick}
					sx={{ color: `${COLOR.BLACK}`, fontSize: '16px' }}
				/>
			</Tabs>
		</Paper>
	);
};

const ProjectName = styled.h2`
	display: flex;
	padding: 10px;
	margin: 0;

	&:hover,
	&:active {
		cursor: pointer;
	}
`;

const IconContainer = styled.span`
	margin-right: 20px;
	padding: 0;
`;

export default Header;
