import './calculator.scss';


const Calculator = () => {
	return (
		<section className='calculator'>
			<div className='calculator__container container'>
				<h2 className='calculator__title title-h2'>Калькулятор</h2>
				<div className='calculator__wrapper'>
					<div className='calculator__left-wrapper calculator-left-wrapper'>
						<div className='calculator-left-wrapper__buttons'>
							<button className='calculator-left-wrapper__button'>Платеж по кредиту</button>
							<button className='calculator-left-wrapper__button'>Доход по вкладу</button>
						</div>
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name title-h3'>Сумма кредита</h3>
							<input className='calculator-left-wrapper__input' />
						</div>
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name title-h3'>Срок кредита (месяцев)</h3>
							<input className='calculator-left-wrapper__input' />
						</div>
					</div>
					<div className='calculator__right-wrapper calculator-right-wrapper'>
						<div className='calculator-right-wrapper__box'>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name title-h3'>Ежемесячный платеж</h3>
								<p className='calculator-right-wrapper__value text-h3'>20 000 руб</p>
							</div>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name title-h3'>Ставка</h3>
								<p className='calculator-right-wrapper__value text-h3'>5,6 %</p>
							</div>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name title-h3'>Цель кредита</h3>
								<button className='calculator-right-wrapper__value calculator-right-wrapper__value_button'>Выбрать цель</button>
							</div>
						</div>
						<button className='calculator-right-wrapper__button button button_azure'>Отправить заявку</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calculator;