import 'normalize.css';

import './App.scss';

import Header from '../header/Header';
import Slider from '../slider/Slider';
import Calculator from '../calculator/Calculator';
import Exchanger from '../exchanger/Exchanger';
import Map from '../map/Map';
import News from '../news/News';

const App = () => {

	return (
		<>
			<Header />
			<Slider />
			<Calculator />
			<div className='currency-exchanger'>
				<div className='currency-exchanger__container container'>
					<Exchanger />
					<Map />
				</div>
			</div>
			<News />
		</>
	);
};

export default App;
