import { FormEvent, useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export interface SearchBarProps {
	onSearchButtonClick: (searchTarget: string) => void;
}

const SearchBar = ({ onSearchButtonClick }: SearchBarProps) => {
	const [searchInput, setSearchInput] = useState('');

	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearchButtonClick(searchInput);
	};

	return (
		<form onSubmit={onFormSubmit}>
			<OutlinedInput
				placeholder="repository 이름을 입력해주세요"
				value={searchInput}
				onChange={(e) => {
					setSearchInput(e.target.value);
				}}
				sx={{ width: 500, marginRight: 5 }}
			/>
			<IconButton
				aria-label="검색버튼"
				type="submit"
				onClick={() => {
					onSearchButtonClick(searchInput);
				}}
			>
				<SearchIcon sx={{ fontSize: 35 }} />
			</IconButton>
		</form>
	);
};

export default SearchBar;
