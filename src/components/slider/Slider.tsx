import { useState } from 'react';

import './Slider.scss';

import SliderArrow from '../UI/buttons/sliderArrow/SliderArrow';
import GreyButton from '../UI/buttons/greyButton/GreyButton';

import arrow from '../../assets/icons/arrow.svg';

import event1 from '../../assets/imgs/events-1.png';
import event2 from '../../assets/imgs/events-2.png';
import event3 from '../../assets/imgs/events-3.png';

const Slider = () => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		event1,
		event2,
		event3,
	];

	const prevSlide = () => {
		const newIndex = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const newIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(newIndex);
	};

	return (
		<section className='slider'>
			<div className='slider__container container'>
				<div className='slider__window'>
					<img className='slider__img' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
				</div>
				<div className='slider__arrows'>
					<SliderArrow onClick={prevSlide}>
						<img className='slider__arrow-img slider__arrow-img_prev' src={arrow} alt="назад" />
					</SliderArrow>
					<SliderArrow onClick={nextSlide}>
						<img className='slider__arrow-img slider__arrow-img_next' src={arrow} alt="вперед" />
					</SliderArrow>
				</div>
				<GreyButton className='slider__button'>Подробнее</GreyButton>
				<div className="slider__box">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`slider__item ${index === currentIndex ? 'slider__item_active' : ''}`}
						>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default Slider;