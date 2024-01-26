import Slider from "../components/slider/Slider";
import Calculator from "../components/calculator/Calculator";
import CurrencyExchange from "../components/currencyExchange/CurrencyExchange";
import News from "../components/news/News";

const MainPage = () => {

	return (
		<>
			<Slider />
			<Calculator />
			<CurrencyExchange />
			<News />
		</>
	);
};

export default MainPage;