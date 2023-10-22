import Calculator from "../components/calculator/Calculator";
import Exchanger from "../components/exchanger/Exchanger";
import Map from "../components/map/Map";
import News from "../components/news/News";
import Slider from "../components/slider/Slider";

const MainPage = () => {

	return (
		<>
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

export default MainPage;