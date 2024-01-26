import classes from './UsualLink.module.scss';

import { IUsualLinkProps } from './UsualLinkInterface';

const UsualLink = ({ children, ...props }: IUsualLinkProps) => {
	return (
		<a {...props} className={`${props.className} ${classes.UsualLink}`} >
			{children}
		</a>
	);
};

export default UsualLink;