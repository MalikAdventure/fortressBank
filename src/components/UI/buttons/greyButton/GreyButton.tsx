import classes from './GreyButton.module.scss';

const GreyButton = ({ ...props }) => {
	return (
		<button {...props} className={classes.GreyButton + ' ' + props.className}>
			Подробнее
		</button>
	);
};

export default GreyButton;