import { Avatar, Badge, Card, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import styled from '@emotion/styled';

import { SearchItemType } from '@/types';

export interface RepoCardProps {
	repo: SearchItemType;
	onRepoAddButtonClick: () => void;
}

const RepoCard = ({ repo, onRepoAddButtonClick }: RepoCardProps) => {
	return (
		<Card sx={{ width: 500, height: 250 }}>
			<RepoInfoContainer>
				<RepoTitle>{repo.full_name}</RepoTitle>
				<RepoDescription>{repo.description}</RepoDescription>
			</RepoInfoContainer>

			<UnderLineInfoContainer>
				<UserInfoContainer>
					<Avatar
						alt="유저의 프로필"
						src={repo.owner.avatar_url}
						sx={{ width: 30, height: 30 }}
					/>
					<UserName>{repo.owner.login}</UserName>
				</UserInfoContainer>

				<ArticleInfoContainer>
					<Badge
						badgeContent={
							repo.open_issues_count === 0 ? '0' : repo.open_issues_count
						}
						color="primary"
					>
						<IssueContent>open issue</IssueContent>
					</Badge>

					<IconButton
						aria-label="repository 저장하기"
						onClick={onRepoAddButtonClick}
					>
						<AddCircleOutlineIcon sx={{ width: 25, height: 25 }} />
					</IconButton>
				</ArticleInfoContainer>
			</UnderLineInfoContainer>
		</Card>
	);
};

const RepoInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 20px 30px 20px;
`;

const RepoTitle = styled.h3`
	width: 95%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const RepoDescription = styled.div`
	height: 100px;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	word-break: keep-all;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const UnderLineInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const IssueContent = styled.div`
	width: fit-content;
	height: fit-content;
`;

const UserInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-left: 20px;
`;

const UserName = styled.div`
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const ArticleInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;

	margin-right: 20px;
`;

export default RepoCard;
