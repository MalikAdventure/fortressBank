import classes from './UsualInput.module.scss';

import { IUsualInputProps } from './UsualInputInterface';

const UsualInput = ({ ...props }: IUsualInputProps) => {
	return (
		<input {...props} className={`${props.className} ${classes.UsualInput}`} />
	);
};

export default UsualInput;