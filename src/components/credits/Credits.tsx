import './Credits.scss';

import UsualButton from '../UI/buttons/usualButton/UsualButton';

import creditsImg from '../../assets/imgs/credits-img.png';

//!!! пересмотреть возможные кредиты (с повышенной ставкой и не с повышенной ставкой)

const Credits = () => {
	return (
		<section className='credits'>
			<div className='credits__container container'>
				<h2 className='credits__title title-section'>Кредиты на любые цели</h2>
				<p className='credits__text title-header'>
					Кредит “Крепость банк” — лучший способ получить деньги в долг без справок и поручителей на любые цели: ремонт, образование, отдых или любые другие покупки. Удобный расчет на калькуляторе и оформление онлайн.
				</p>
				{/* <div className='credits__box'>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-decoration'>Кредит наличными</h3>
						<p className='credits-item__description text-decoration'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Сумма кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Срок кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Процентная ставка</h3>
								<p className='credits-item__text text-decoration'>От 10 %</p>
							</div>
						</div>
						<UsualButton className='credits-item__button button'>Рассчитать кредит </UsualButton>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-decoration'>Кредит наличными</h3>
						<p className='credits-item__description text-decoration'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Сумма кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Срок кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Процентная ставка</h3>
								<p className='credits-item__text text-decoration'>От 10 %</p>
							</div>
						</div>
						<UsualButton className='credits-item__button button'>Рассчитать кредит </UsualButton>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
					<div className='credits__item credits-item'>
						<h3 className='credits-item__title title-decoration'>Кредит наличными</h3>
						<p className='credits-item__description text-decoration'>Получите кредит наличными на любые цели без справок о доходах и поручителей. Нужен только паспорт.</p>
						<div className='credits-item__box'>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Сумма кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 000 000 рублей</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Срок кредита</h3>
								<p className='credits-item__text text-decoration'>До 5 лет</p>
							</div>
							<div className='credits-item__item'>
								<h3 className='credits-item__title title-decoration'>Процентная ставка</h3>
								<p className='credits-item__text text-decoration'>От 10 %</p>
							</div>
						</div>
						<UsualButton className='credits-item__button button'>Рассчитать кредит </UsualButton>
						<img className='credits-item__img' src={creditsImg} alt="к кредиту" />
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Credits;