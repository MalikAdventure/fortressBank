import { ReactNode, MouseEvent } from 'react';

export interface IUsualButtonProps {
	children: ReactNode;
	className: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}