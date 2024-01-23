import './calculator.scss';

import UsualButton from '../UI/buttons/usualButton/UsualButton';
import AttractButton from '../UI/buttons/attractButton/AttractButton';

const Calculator = () => {
	return (
		<section className='calculator'>
			<div className='calculator__container container'>
				<h2 className='calculator__title'>Калькулятор</h2>
				<div className='calculator__wrapper'>
					<div className='calculator__left-wrapper calculator-left-wrapper'>
						<div className='calculator-left-wrapper__buttons'>
							<UsualButton className='calculator-left-wrapper__button'>Платеж по кредиту</UsualButton>
							<UsualButton className='calculator-left-wrapper__button'>Доход по вкладу</UsualButton>
						</div>
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name'>Сумма кредита</h3>
							<input className='calculator-left-wrapper__input' />
						</div>
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name'>Срок кредита (месяцев)</h3>
							<input className='calculator-left-wrapper__input' />
						</div>
					</div>
					<div className='calculator__right-wrapper calculator-right-wrapper'>
						<div className='calculator-right-wrapper__box'>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name'>Ежемесячный платеж</h3>
								<p className='calculator-right-wrapper__value'>20 000 руб</p>
							</div>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name'>Ставка</h3>
								<p className='calculator-right-wrapper__value'>5,6 %</p>
							</div>
							{/* <div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name'>Цель кредита</h3>
								<button className='calculator-right-wrapper__value calculator-right-wrapper__value_button'>Выбрать цель</button>
							</div> */}
						</div>
						<AttractButton className='calculator-right-wrapper__button button button_azure'>Отправить заявку</AttractButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calculator;