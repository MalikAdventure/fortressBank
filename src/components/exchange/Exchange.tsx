import './Exchange.scss';

const Exchange = () => {
	return (
		<div className='exchange'>
			<h2 className='exchange__title title-section'>Курс волют</h2>
			<div className='exchange__box'>
				<div className='exchange__item'>
					<h3 className='exchange__name title-decoration'>Валюта</h3>
					<p className='exchange__value text-decoration'>USA</p>
					<p className='exchange__value text-decoration'>USA</p>
					<p className='exchange__value text-decoration'>USA</p>
					<p className='exchange__value text-decoration'>USA</p>
					<p className='exchange__value text-decoration'>USA</p>
				</div>
				<div className='exchange__item'>
					<h3 className='exchange__name title-decoration'>Покупка</h3>
					<p className='exchange__value text-decoration'>100</p>
					<p className='exchange__value text-decoration'>100</p>
					<p className='exchange__value text-decoration'>100</p>
					<p className='exchange__value text-decoration'>100</p>
					<p className='exchange__value text-decoration'>100</p>
				</div>
				<div className='exchange__item'>
					<h3 className='exchange__name title-decoration'>Продажа</h3>
					<p className='exchange__value text-decoration'>120</p>
					<p className='exchange__value text-decoration'>120</p>
					<p className='exchange__value text-decoration'>120</p>
					<p className='exchange__value text-decoration'>120</p>
					<p className='exchange__value text-decoration'>120</p>
				</div>
			</div>
		</div>
	);
};

export default Exchange;