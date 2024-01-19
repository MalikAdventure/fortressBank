import classes from './GreyButton.module.scss';

const GreyButton = ({ ...props }) => {
	return (
		<button {...props} className={classes.GreyButton}>
			подробнее
		</button>
	);
};

export default GreyButton;