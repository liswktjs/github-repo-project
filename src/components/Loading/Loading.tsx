import { Skeleton } from '@mui/material';

import ResponsiveList from '@/components/ResponsiveList/ResponsiveList';

export interface LoadingProps {
	loadingItemCount: number;
}

const Loading = ({ loadingItemCount }: LoadingProps) => {
	const skeletonArray = Array(loadingItemCount).fill(1);

	return (
		<ResponsiveList>
			{skeletonArray.map((_, index) => (
				<Skeleton
					variant="rounded"
					key={index}
					width={500}
					height={250}
					animation="wave"
				/>
			))}
		</ResponsiveList>
	);
};

export default Loading;
