import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Up from '../components/up/Up';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Up />
		</>
	);
};

export default Layout;