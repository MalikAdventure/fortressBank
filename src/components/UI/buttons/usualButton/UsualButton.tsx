import classes from './UsualButton.module.scss';

import { IUsualButtonProps } from './UsualButtonInterface';

const UsualButton = ({ children, ...props }: IUsualButtonProps) => {
	return (
		<button {...props} className={`${props.className} ${classes.UsualButton}`}>
			{children}
		</button>
	);
};

export default UsualButton;