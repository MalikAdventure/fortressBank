import './Calculator.scss';

import { useState } from 'react';

import CalculatorCredit from '../calculatorCredit/CalculatorCredit';
import CalculatorDeposit from '../calculatorDeposit/CalculatorDeposit';

import UsualButton from '../UI/buttons/usualButton/UsualButton';

const Calculator = () => {

	const [calculator, setCalculator] = useState('credit');

	const chooseCalculator = (e: string) => {
		setCalculator(e);
	};

	const content = calculator === 'credit' ? <CalculatorCredit /> : calculator === 'deposit' ? <CalculatorDeposit /> : null;

	return (
		<section className='calculator'>
			<div className='calculator__container container'>
				<h2 className='calculator__title title-section'>Калькулятор</h2>
				<div className='calculator__buttons'>
					<UsualButton
						onClick={() => chooseCalculator('credit')}
						className={calculator === 'credit' ? 'calculator__button calculator__button_active' : 'calculator__button'}
					>
						Платеж по кредиту
					</UsualButton>
					<UsualButton
						onClick={() => chooseCalculator('deposit')}
						className={calculator === 'deposit' ? 'calculator__button calculator__button_active' : 'calculator__button'}
					>
						Доход по вкладу
					</UsualButton>
				</div>
				<div className='calculator__wrapper'>
					{content}
				</div>
			</div>
		</section>
	);
};

export default Calculator;