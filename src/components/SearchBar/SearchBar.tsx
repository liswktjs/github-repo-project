import { Dispatch, FormEvent, SetStateAction } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

import { COLOR } from '@/styles/color';

export interface SearchBarProps {
	searchTarget: string;
	setSearchTarget: Dispatch<SetStateAction<string>>;
	onSearchButtonClick: () => void;
}

const SearchBar = ({
	searchTarget,
	setSearchTarget,
	onSearchButtonClick,
}: SearchBarProps) => {
	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearchButtonClick();
	};

	return (
		<FormContainer onSubmit={onFormSubmit}>
			<OutlinedInput
				placeholder="repository 이름을 입력해주세요"
				value={searchTarget}
				onChange={(e) => {
					setSearchTarget(e.target.value);
				}}
				sx={{ width: 500 }}
			/>
			<IconButton
				aria-label="검색버튼"
				type="submit"
				onClick={() => {
					onSearchButtonClick();
				}}
			>
				<SearchIcon sx={{ fontSize: 35 }} />
			</IconButton>
		</FormContainer>
	);
};

const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;

	min-width: 600px;
	margin-bottom: 20px;

	padding-bottom: 20px;
	border-bottom: 1px solid ${COLOR.GARY};
`;

export default SearchBar;
