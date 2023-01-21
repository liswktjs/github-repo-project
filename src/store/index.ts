export const isStoreExist = () => {
	const store = localStorage.getItem('repo');
	return store === null ? false : true;
};

const isOverStoreLimit = () => {
	const store = localStorage.getItem('repo');
	if (store) {
		const repoList = JSON.parse(store);
		return repoList.length >= 4;
	}
	return false;
};

export const isDuplicateStoreExist = (fullName: string) => {
	const store = localStorage.getItem('repo');
	if (store) {
		const repoList = JSON.parse(store as string) as string[];
		const result = repoList.find((item) => item === fullName);
		return typeof result === 'undefined' ? false : true;
	}
	return false;
};

const store = {
	toggleRepo({ fullName }: { fullName: string }) {
		if (isDuplicateStoreExist(fullName)) {
			const repoList = JSON.parse(
				localStorage.getItem('repo') as string,
			) as string[];
			const filterRepoList = repoList.filter((item) => item !== fullName);
			localStorage.setItem('repo', JSON.stringify(filterRepoList));
			return;
		}

		if (isOverStoreLimit()) {
			window.alert('repository는 최대 4개까지 저장이 가능합니다');
			return;
		}

		if (isStoreExist()) {
			const repoList = JSON.parse(
				localStorage.getItem('repo') as string,
			) as string[];
			localStorage.setItem('repo', JSON.stringify([...repoList, fullName]));
			return;
		}

		const newRepoList = [fullName];
		localStorage.setItem('repo', JSON.stringify(newRepoList));
	},
	getRepoInfo() {
		if (isStoreExist()) {
			const store = localStorage.getItem('repo') as string;
			return JSON.parse(store);
		}
		return [];
	},
};

export default store;
