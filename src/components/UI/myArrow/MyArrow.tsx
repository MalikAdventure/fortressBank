import classes from './MyArrow.module.scss';

//! добавить пропс как в видео про react и импортировать туда стрелку arrow

const MyArrow = () => {
	return (
		<button className={classes.myArrow}>
			{/* <img src={arrow} alt="прокрутить" /> */}
			далее
		</button>
	);
};

export default MyArrow;