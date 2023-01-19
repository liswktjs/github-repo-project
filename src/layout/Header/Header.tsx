import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { GitHub } from '@mui/icons-material';

import styled from '@emotion/styled';

const Header = () => {
	const navigate = useNavigate();

	const [tab, setTab] = useState<'HOME' | 'REPO' | 'ISSUE'>('HOME');

	const onHomeTabClick = () => {
		setTab('HOME');
		navigate('/');
	};

	const onRepositoryTabClick = () => {
		setTab('REPO');
		navigate('/repository');
	};

	const onIssueTabClick = () => {
		setTab('ISSUE');
		navigate('/issues');
	};

	return (
		<Box
			role={'heading'}
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				paddingTop: '10px',
				backgroundColor: '#F9F2ED',
			}}
		>
			<ProjectName>
				<IconContainer>
					<GitHub fontSize="large" />
				</IconContainer>
				Github Repo Project
			</ProjectName>
			<Tabs
				value={tab}
				TabIndicatorProps={{
					style: {
						backgroundColor: '#3AB0FF',
					},
				}}
			>
				<Tab
					label="HOME"
					value="HOME"
					onClick={onHomeTabClick}
					sx={{ color: 'black' }}
				/>
				<Tab
					label="REPO"
					value="REPO"
					onClick={onRepositoryTabClick}
					sx={{ color: 'black' }}
				/>
				<Tab
					label="ISSUE"
					value="ISSUE"
					onClick={onIssueTabClick}
					sx={{ color: 'black' }}
				/>
			</Tabs>
		</Box>
	);
};

const ProjectName = styled.h2`
	display: flex;
	padding: 10px;
	margin: 0;
`;

const IconContainer = styled.span`
	margin-right: 20px;
	padding: 0;
`;

export default Header;
