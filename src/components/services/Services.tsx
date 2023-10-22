import './Services.scss';

import serviceImg from '../../assets/imgs/service-img.png';

const Services = () => {
	return (
		<section className='services'>
			<div className='services__container container'>
				<h2 className='services__title title-h2'>Услуги банка</h2>
				<div className='services__box'>
					<div className='services__item services-item'>
						<img className='services-item__img' src={serviceImg} alt="услуга" />
						<div className='services-item__box'>
							<h3 className='services-item__title title-h3'>Дебетовая карта</h3>
							<p className='services-item__text text-h3'>Оформите дебетовую карту нашего банка</p>
							<button className='services-item__button button-line'>Подробнее</button>
						</div>
					</div>
					<div className='services__item services-item'>
						<img className='services-item__img' src={serviceImg} alt="услуга" />
						<div className='services-item__box'>
							<h3 className='services-item__title title-h3'>Дебетовая карта</h3>
							<p className='services-item__text text-h3'>Оформите дебетовую карту нашего банка</p>
							<button className='services-item__button button-line'>Подробнее</button>
						</div>
					</div>
					<div className='services__item services-item'>
						<img className='services-item__img' src={serviceImg} alt="услуга" />
						<div className='services-item__box'>
							<h3 className='services-item__title title-h3'>Дебетовая карта</h3>
							<p className='services-item__text text-h3'>Оформите дебетовую карту нашего банка</p>
							<button className='services-item__button button-line'>Подробнее</button>
						</div>
					</div>
					<div className='services__item services-item'>
						<img className='services-item__img' src={serviceImg} alt="услуга" />
						<div className='services-item__box'>
							<h3 className='services-item__title title-h3'>Дебетовая карта</h3>
							<p className='services-item__text text-h3'>Оформите дебетовую карту нашего банка</p>
							<button className='services-item__button button-line'>Подробнее</button>
						</div>
					</div>
					<div className='services__item services-item'>
						<img className='services-item__img' src={serviceImg} alt="услуга" />
						<div className='services-item__box'>
							<h3 className='services-item__title title-h3'>Дебетовая карта</h3>
							<p className='services-item__text text-h3'>Оформите дебетовую карту нашего банка</p>
							<button className='services-item__button button-line'>Подробнее</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;