import { Routes, Route } from 'react-router-dom';

import 'normalize.css';

import './App.scss';

import Layout from '../../pages/Layout';

import MainPage from '../../pages/MainPage';
import CreditsPage from '../../pages/CreditsPage';
import DepositsPage from '../../pages/DepositsPage';
import ServicesPage from '../../pages/ServicesPage';
import NotFound from '../notFound/notFound';


const App = () => {

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />}></Route>
					<Route path='credits' element={<CreditsPage />}></Route>
					<Route path='deposits' element={<DepositsPage />}></Route>
					<Route path='services' element={<ServicesPage />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
