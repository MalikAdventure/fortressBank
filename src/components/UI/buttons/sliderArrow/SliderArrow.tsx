import classes from './SliderArrow.module.scss';

import { ISliderArrowProps } from './SliderArrowInterface';

const SliderArrow = ({ children, ...props }: ISliderArrowProps) => {
	return (
		<button {...props} className={classes.SliderArrow}>
			{children}
		</button>
	);
};

export default SliderArrow;