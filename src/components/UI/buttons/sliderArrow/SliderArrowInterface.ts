import { ReactNode, MouseEvent } from 'react';

export interface ISliderArrowProps {
	children: ReactNode;
	className: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}