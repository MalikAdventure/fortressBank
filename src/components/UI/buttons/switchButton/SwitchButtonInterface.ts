import { ReactNode, MouseEvent } from 'react';

export interface ISwitchButtonProps {
	children: ReactNode | string;
	className?: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}