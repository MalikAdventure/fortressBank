import './calculator.scss';


const Calculator = () => {
	return (
		<section className='calculator'>
			<div className='calculator__container container'>
				<h2 className='calculator__title'>Калькулятор</h2>
				<div className='calculator__wrapper'>
					<div className='calculator__left-wrapper left-wrapper-calculator'>
						<div className='left-wrapper-calculator__buttons'>
							<button className='left-wrapper-calculator__button'>Платеж по кредиту</button>
							<button className='left-wrapper-calculator__button'>Доход по вкладу</button>
						</div>
						<div className='left-wrapper-calculator__box'>
							<h3 className='left-wrapper-calculator__name'>Сумма кредита</h3>
							<input className='left-wrapper-calculator__input' />
						</div>
						<div className='left-wrapper-calculator__box'>
							<h3 className='left-wrapper-calculator__name'>Срок кредита (месяцев)</h3>
							<input className='left-wrapper-calculator__input' />
						</div>
					</div>
					<div className='calculator__right-wrapper right-wrapper-calculator'>
						<div className='right-wrapper-calculator__box'>
							<div className='right-wrapper-calculator__item'>
								<h3 className='right-wrapper-calculator__name'>Ежемесячный платеж</h3>
								<p className='right-wrapper-calculator__value'>20 000 руб</p>
							</div>
							<div className='right-wrapper-calculator__item'>
								<h3 className='right-wrapper-calculator__name'>Ставка</h3>
								<p className='right-wrapper-calculator__value'>5,6 %</p>
							</div>
							<div className='right-wrapper-calculator__item'>
								<h3 className='right-wrapper-calculator__name'>Цель кредита</h3>
								<button className='right-wrapper-calculator__value right-wrapper-calculator__value_button'>Выбрать цель</button>
							</div>
						</div>
						<button className='right-wrapper-calculator__button'>Отправить заявку</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calculator;