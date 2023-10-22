import './Exchanger.scss';

//!!! сделать через grid

const Exchanger = () => {
	return (
		<section className='exchanger'>
			{/* <div className='exchanger__container container'> */}
			<h2 className='exchanger__title title-h2'>Курс волют</h2>
			<div className='exchanger__table'>
				<div className='exchanger__names'>
					<h3 className='exchanger__name title-h3'>Валюта</h3>
					<h3 className='exchanger__name title-h3'>Покупка</h3>
					<h3 className='exchanger__name title-h3'>Продажа</h3>
				</div>
				<div className='exchanger__box'>
					<div className='exchanger__item'>
						<p className='exchanger__country text-h3'>USA</p>
						<p className='exchanger__buy text-h3'>100</p>
						<p className='exchanger__sale text-h3'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country text-h3'>USA</p>
						<p className='exchanger__buy text-h3'>100</p>
						<p className='exchanger__sale text-h3'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country text-h3'>USA</p>
						<p className='exchanger__buy text-h3'>100</p>
						<p className='exchanger__sale text-h3'>120</p>
					</div>
					<div className='exchanger__item'>
						<p className='exchanger__country text-h3'>USA</p>
						<p className='exchanger__buy text-h3'>100</p>
						<p className='exchanger__sale text-h3'>120</p>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Exchanger;