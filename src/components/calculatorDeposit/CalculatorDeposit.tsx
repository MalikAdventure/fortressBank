import './CalculatorDeposit.scss';

import { useState } from 'react';

import UsualInput from '../UI/inputs/usualInput/UsualInput';
import SwitchButton from '../UI/buttons/switchButton/SwitchButton';
import AttractButton from '../UI/buttons/attractButton/AttractButton';

const CalculatorDeposit = () => {

	const months = [3, 6, 9, 12, 15, 18, 21, 24];

	const [month, setMonth] = useState(3);

	const chooseMonth = (e: number) => {
		setMonth(e);
	};

	return (
		<>
			<div className='calculator__left-wrapper calculator-left-wrapper'>
				<div className='calculator-left-wrapper__box'>
					<h3 className='calculator-left-wrapper__name title-decoration'>Сумма вклада</h3>
					<UsualInput className='calculator-left-wrapper__input' placeholder='Введите сумму вклада' />
				</div>
				<div className='calculator-left-wrapper__box'>
					<h3 className='calculator-left-wrapper__name title-decoration'>Срок вклада (месяцев)</h3>
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
					</div>
				</div>
			</div>
			<div className='calculator__right-wrapper calculator-right-wrapper'>
				<div className='calculator-right-wrapper__box'>
					<div className='calculator-right-wrapper__item'>
						<h3 className='calculator-right-wrapper__name text-decoration'>Доход по вкладу</h3>
						<p className='calculator-right-wrapper__value text-decoration'>10 000 руб</p>
					</div>
					<div className='calculator-right-wrapper__item'>
						<h3 className='calculator-right-wrapper__name text-decoration'>Ставка</h3>
						<p className='calculator-right-wrapper__value text-decoration'>15,0 %</p>
					</div>
				</div>
				<AttractButton className='calculator-right-wrapper__button button button_azure'>Открыть вклад</AttractButton>
			</div>
		</>
	);
};

export default CalculatorDeposit;