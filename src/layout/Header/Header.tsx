import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Paper, Tab, Tabs } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import styled from '@emotion/styled';
import { COLOR } from '@/styles/color';
import store from '@/store';
import { URL } from '@/constants';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [tab, setTab] = useState<'HOME' | 'ISSUE' | 'ALL_ISSUES'>('HOME');

	useEffect(() => {
		if (location.pathname === URL.HOME) {
			setTab('HOME');
		}
		if (location.pathname === URL.ISSUE) {
			setTab('ISSUE');
		}
		if (location.pathname === URL.ALL_ISSUES) {
			setTab('ALL_ISSUES');
		}
	}, [location]);

	const onHomeTabClick = () => {
		setTab('HOME');
		navigate(URL.HOME);
	};

	const onIssueTabClick = () => {
		setTab('ISSUE');
		navigate(URL.ISSUE);
	};

	const onAllIssueTabClick = () => {
		if (store.getRepoInfo().length === 0) {
			window.alert('repository들을 저장해주세요!');
			return;
		}
		setTab('ALL_ISSUES');
		navigate(URL.ALL_ISSUES);
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
				<Tab
					label="ALL_ISSUES"
					value="ALL_ISSUES"
					onClick={onAllIssueTabClick}
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
