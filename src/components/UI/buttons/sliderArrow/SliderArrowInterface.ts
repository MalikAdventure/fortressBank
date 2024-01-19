import { ReactNode, MouseEvent } from 'react';

export interface ISliderArrowProps {
	children: ReactNode;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}