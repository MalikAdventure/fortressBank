import Slider from "../components/slider/Slider";
import Calculator from "../components/calculator/Calculator";
import CurrencyExchange from "../components/currencyExchange/CurrencyExchange";
import NewsList from "../components/newsList/NewsList";

const MainPage = () => {

	return (
		<>
			<Slider />
			<Calculator />
			<CurrencyExchange />
			<NewsList />
		</>
	);
};

export default MainPage;