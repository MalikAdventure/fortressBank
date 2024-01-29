import './App.scss';

import 'normalize.css';

import { Routes, Route } from 'react-router-dom';

import Layout from '../../pages/Layout';

import MainPage from '../../pages/MainPage';
import CreditsPage from '../../pages/CreditsPage';
import DepositsPage from '../../pages/DepositsPage';
import ProductsPage from '../../pages/ProductsPage';
import SignInPage from '../../pages/SignInPage';
import NotFound from '../notFound/NotFound';


const App = () => {

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />}></Route>
					<Route path='credits' element={<CreditsPage />}></Route>
					<Route path='deposits' element={<DepositsPage />}></Route>
					<Route path='products' element={<ProductsPage />}></Route>
					<Route path='signIn' element={<SignInPage />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
