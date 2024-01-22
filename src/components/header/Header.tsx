import './Header.scss';

import NavigateHeader from '../navigateHeader/NavigateHeader';

const Header = () => {

	return (
		<header className='header'>
			<div className='header__container container'>
				<NavigateHeader />
			</div>
		</header>
	);
};

export default Header;