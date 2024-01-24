import './calculator.scss';

import { useState } from 'react';

import SwitchButton from '../UI/buttons/switchButton/SwitchButton';
import UsualButton from '../UI/buttons/usualButton/UsualButton';
import AttractButton from '../UI/buttons/attractButton/AttractButton';
import UsualInput from '../UI/inputs/usualInput/UsualInput';

const Calculator = () => {

	//!!! реализовать переход между кредитами и вкладами как месяца в отдельный компонент

	const months = [3, 6, 9, 12, 15, 18, 21, 24];

	const [month, setMonth] = useState(3);

	const chooseMonth = (e: number) => {
		setMonth(e);
	};

	return (
		<section className='calculator'>
			<div className='calculator__container container'>
				<h2 className='calculator__title title-section'>Калькулятор</h2>
				<div className='calculator__wrapper'>
					<div className='calculator__left-wrapper calculator-left-wrapper'>
						<div className='calculator-left-wrapper__buttons'>
							<UsualButton className='calculator-left-wrapper__button'>Платеж по кредиту</UsualButton>
							<UsualButton className='calculator-left-wrapper__button'>Доход по вкладу</UsualButton>
						</div>
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name title-decoration'>Сумма кредита</h3>
							<UsualInput className='calculator-left-wrapper__input' placeholder='Введите сумму кредита' />
						</div>
						{/* <div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name'>Срок кредита (месяцев)</h3>
							<UsualInput className='calculator-left-wrapper__input' />
						</div> */}
						<div className='calculator-left-wrapper__box'>
							<h3 className='calculator-left-wrapper__name title-decoration'>Срок кредита (месяцев)</h3>
							<div className='calculator-left-wrapper__buttons'>
								{months.map((monthValue) => (
									<SwitchButton
										key={monthValue}
										onClick={() => chooseMonth(monthValue)}
										className={month === monthValue ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}
									>
										{monthValue}
									</SwitchButton>
								))}
								{/* <SwitchButton onClick={() => chooseMonth(3)} className={month === 3 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>3</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(6)} className={month === 6 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>6</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(9)} className={month === 9 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>9</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(12)} className={month === 12 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>12</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(15)} className={month === 15 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>15</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(18)} className={month === 18 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>18</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(21)} className={month === 21 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>21</SwitchButton>
								<SwitchButton onClick={() => chooseMonth(24)} className={month === 24 ? 'calculator-left-wrapper__button calculator-left-wrapper__button_active' : 'calculator-left-wrapper__button'}>24</SwitchButton> */}
							</div>
						</div>
					</div>
					<div className='calculator__right-wrapper calculator-right-wrapper'>
						<div className='calculator-right-wrapper__box'>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name text-decoration'>Ежемесячный платеж</h3>
								<p className='calculator-right-wrapper__value text-decoration'>20 000 руб</p>
							</div>
							<div className='calculator-right-wrapper__item'>
								<h3 className='calculator-right-wrapper__name text-decoration'>Ставка</h3>
								<p className='calculator-right-wrapper__value text-decoration'>5,6 %</p>
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