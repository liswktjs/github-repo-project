import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Card, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import styled from '@emotion/styled';
import store from '@/store';

export interface RepoSliderProps {
	repoList: string[] | [];
	currentRepoIndex: number;
	setCurrentRepoIndex: Dispatch<SetStateAction<number>>;
	handleSearchIssues: (searchTarget: string) => void;
}

const RepoSlider = ({
	repoList,
	currentRepoIndex,
	setCurrentRepoIndex,
	handleSearchIssues,
}: RepoSliderProps) => {
	const [isLeftAvailable, setIsLeftAvailable] = useState(false);
	const [isRightAvailable, setIsRightAvailable] = useState(false);

	useEffect(() => {
		if (repoList.length === 0) {
			setIsLeftAvailable(false);
			setIsRightAvailable(false);
			return;
		}

		if (currentRepoIndex === 0) {
			setIsLeftAvailable(false);
		}

		if (currentRepoIndex === repoList.length - 1) {
			setIsRightAvailable(false);
		}

		if (currentRepoIndex >= 1) {
			setIsLeftAvailable(true);
		}

		if (currentRepoIndex < repoList.length - 1) {
			setIsRightAvailable(true);
		}
	}, [repoList, currentRepoIndex]);

	const onLeftButtonClick = () => {
		setCurrentRepoIndex(currentRepoIndex - 1);
		handleSearchIssues(repoList[currentRepoIndex - 1]);
	};

	const onRightButtonClick = () => {
		setCurrentRepoIndex(currentRepoIndex + 1);
		handleSearchIssues(repoList[currentRepoIndex + 1]);
	};

	return (
		<Container>
			<IconButton
				onClick={onLeftButtonClick}
				disabled={!isLeftAvailable}
				sx={{ height: 50 }}
			>
				<ArrowBack sx={{ fontSize: 30 }} />
			</IconButton>
			<Card sx={{ marginRight: '20px', marginLeft: '20px' }}>
				{repoList.length >= 1 ? (
					<RepoContent>
						<Title>#{currentRepoIndex + 1}번 Repository</Title>
						<p>{repoList[currentRepoIndex]}</p>
						<ButtonContainer>
							<IconButton>
								<DeleteOutlineIcon
									onClick={() => {
										if (window.confirm('정말 삭제하시겠습니까?')) {
											store.toggleRepo({
												fullName: repoList[currentRepoIndex],
											});
											window.location.reload();
										}
									}}
								/>
							</IconButton>
						</ButtonContainer>
					</RepoContent>
				) : (
					<EmptyContent>
						<h3>Repository를 저장해주세요</h3>
					</EmptyContent>
				)}
			</Card>

			<IconButton
				onClick={onRightButtonClick}
				disabled={!isRightAvailable}
				sx={{ height: 50 }}
			>
				<ArrowForward sx={{ fontSize: 30 }} />
			</IconButton>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

const RepoContent = styled.div`
	width: 400px;
	height: 200px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 15px;
`;

const Title = styled.h3``;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	span {
		display: block;
		font-size: 15px;
		margin-right: 10px;
	}
`;

const EmptyContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 200px;

	h3 {
	}
`;

export default RepoSlider;
