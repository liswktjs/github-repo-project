import { Avatar, Card, Chip } from '@mui/material';

import styled from '@emotion/styled';

import { IssueItemType } from '@/types';

export interface IssueCardProps {
	issue: IssueItemType;
	repoName: string;
	onIssueLinkClick: () => void;
}

const IssueCard = ({ issue, repoName, onIssueLinkClick }: IssueCardProps) => {
	return (
		<Card sx={{ width: 500, minHeight: 250 }}>
			<IssueTitle>{issue.title}</IssueTitle>
			<RepoName>
				<label>repository:</label>
				{repoName}
			</RepoName>
			<LabelListContainer>
				{issue.labels &&
					issue.labels.map((item) => (
						<Chip
							key={item.id}
							label={item.name}
							sx={{ backgroundColor: `#${item.color}` }}
						/>
					))}
			</LabelListContainer>
			<IssueInfoContainer>
				<UserInfoContainer>
					<Avatar
						alt="유저의 프로필"
						src={issue.user.avatar_url}
						sx={{ width: 30, height: 30 }}
					/>
					<UserName>{issue.user.login}</UserName>
				</UserInfoContainer>
				<StateContainer>
					<div>comment</div>
					<span>{issue.comments}</span>
					<span>state</span>
					<Chip
						label={issue.state}
						sx={{
							backgroundColor: `#${
								issue.state === 'closed' ? 'F9F2ED' : '3AB0FF'
							}`,
						}}
					/>
				</StateContainer>
			</IssueInfoContainer>
		</Card>
	);
};

const IssueTitle = styled.h3`
	width: 90%;
	max-height: 100px;
	margin: 20px;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	word-break: keep-all;
	overflow: hidden;
	white-space: normal;
	text-overflow: ellipsis;
`;

const RepoName = styled.div`
	margin-left: 20px;
	label {
		margin-right: 10px;
	}
`;

const LabelListContainer = styled.div`
	display: flex;
	gap: 10px;
	margin: 20px;
`;

const IssueInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const UserInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-left: 20px;
`;

const UserName = styled.div`
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const StateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-right: 20px;
`;

export default IssueCard;
