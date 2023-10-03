import classes from './MyButton.module.scss';

//! добавить пропс как в видео про react и импортировать туда слово

const MyButton = () => {
	return (
		<button className={classes.myButton}>
			подробнее
		</button>
	);
};

export default MyButton;