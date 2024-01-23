import classes from './AttractButton.module.scss';

import { IAttractButtonProps } from './AttractButtonInterface';

const AttractButton = ({ children, ...props }: IAttractButtonProps) => {
	return (
		<button {...props} className={`${props.className} ${classes.AttractButton}`}>
			{children}
		</button>
	);
};

export default AttractButton;