import classes from './SwitchButton.module.scss';

import { ISwitchButtonProps } from './SwitchButtonInterface';

const SwitchButton = ({ children, ...props }: ISwitchButtonProps) => {
	return (
		<button {...props} className={`${props.className} ${classes.SwitchButton}`} >
			{children}
		</button>
	);
};

export default SwitchButton;