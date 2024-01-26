import './CurrencyExchange.scss';

import Exchange from "../exchange/Exchange";
import Map from "../map/Map";


const CurrencyExchange = () => {
	return (
		<section className='currency-exchange'>
			<div className='currency-exchange__container container'>
				<Exchange />
				<Map />
			</div>
		</section>
	);
};

export default CurrencyExchange;