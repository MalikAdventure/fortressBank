import './Exchanger.scss';

//!!! сделать через grid

const Exchanger = () => {
	return (
		<section className='exchanger'>
			{/* <div className='exchanger__container container'> */}
			<h2 className='exchanger__title'>Курс волют</h2>
			<div className='exchanger__table'>
				<div className='exchanger__names'>
					<h3 className='exchanger__name'>Валюта</h3>
					<h3 className='exchanger__name'>Покупка</h3>
					<h3 className='exchanger__name'>Продажа</h3>
				</div>
				<div className='exchanger__box'>
					<div className='exchanger__item'>
						<p className='exchanger__country'>USA</p>
						<p className='exchanger__buy'>100</p>
						<p className='exchanger__sale'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country'>USA</p>
						<p className='exchanger__buy'>100</p>
						<p className='exchanger__sale'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country'>USA</p>
						<p className='exchanger__buy'>100</p>
						<p className='exchanger__sale'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country'>USA</p>
						<p className='exchanger__buy'>100</p>
						<p className='exchanger__sale'>120</p>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Exchanger;