import './Credits.scss';

import creditsImg from '../../assets/imgs/credits-img.png';

const Credits = () => {
	return (
		<section className='credits'>
			<div className='credits__container container'>
				<h2 className='credits__title title-h2'>Кредиты на любые цели</h2>
				<p className='credits__text text-h2'>
					Кредит “Крепость банк” — лучший способ получить деньги в долг без справок и поручителей на любые цели: ремонт, образование, отдых или любые другие покупки. Удобный расчет на калькуляторе и оформление онлайн.
				</p>
				<div className='credits__box'>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-h3'>Кредит наличными</h3>
						<p className='credits-item__description text-h3'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Сумма кредита</h3>
								<p className='credits-item__text text-h3'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Срок кредита</h3>
								<p className='credits-item__text text-h3'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Процентная ставка</h3>
								<p className='credits-item__text text-h3'>От 10 %</p>
							</div>
						</div>
						<button className='credits-item__button button'>Рассчитать кредит </button>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-h3'>Кредит наличными</h3>
						<p className='credits-item__description text-h3'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Сумма кредита</h3>
								<p className='credits-item__text text-h3'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Срок кредита</h3>
								<p className='credits-item__text text-h3'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Процентная ставка</h3>
								<p className='credits-item__text text-h3'>От 10 %</p>
							</div>
						</div>
						<button className='credits-item__button button'>Рассчитать кредит </button>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-h3'>Кредит наличными</h3>
						<p className='credits-item__description text-h3'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Сумма кредита</h3>
								<p className='credits-item__text text-h3'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Срок кредита</h3>
								<p className='credits-item__text text-h3'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-h3'>Процентная ставка</h3>
								<p className='credits-item__text text-h3'>От 10 %</p>
							</div>
						</div>
						<button className='credits-item__button button'>Рассчитать кредит </button>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Credits;