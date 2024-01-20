import { Link } from 'react-router-dom';

import './Header.scss';

import logo from '../../assets/icons/logo.svg';
import exit from '../../assets/icons/exit.png';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<Link to='/' className='header__logo'>
					<img className='header__img' src={logo} alt='крепость' />
					<div className='header__box'>
						<p className='header__name'>
							Крепость <span>банк</span>
						</p>
						<p className='header__designation'>НАДЕЖНЫЙ БАНК</p>
					</div>
				</Link>
				<nav className='header__nav header-nav'>
					<ul className='header-nav__list'>
						<li className='header-nav__item'>
							<Link to='/credits'>Кредиты</Link>
						</li>
						<li className='header-nav__item'>
							<Link to='/deposits'>Вклады</Link>
						</li>
						<li className='header-nav__item'>
							<Link to='/services'>Услуги</Link>
						</li>
					</ul>
				</nav>
				{/* <button className='header__location header-location'>
					<svg className='header-location__img' width="14" height="21" viewBox="0 0 14 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 10.167C6.33696 10.167 5.70107 9.9036 5.23223 9.43476C4.76339 8.96592 4.5 8.33003 4.5 7.66699C4.5 7.00395 4.76339 6.36807 5.23223 5.89923C5.70107 5.43038 6.33696 5.16699 7 5.16699C7.66304 5.16699 8.29893 5.43038 8.76777 5.89923C9.23661 6.36807 9.5 7.00395 9.5 7.66699C9.5 7.9953 9.43534 8.32039 9.3097 8.6237C9.18406 8.92702 8.99991 9.20261 8.76777 9.43476C8.53562 9.66691 8.26002 9.85105 7.95671 9.97669C7.65339 10.1023 7.3283 10.167 7 10.167ZM7 0.666992C5.14348 0.666992 3.36301 1.40449 2.05025 2.71724C0.737498 4.03 0 5.81048 0 7.66699C0 12.917 7 20.667 7 20.667C7 20.667 14 12.917 14 7.66699C14 5.81048 13.2625 4.03 11.9497 2.71724C10.637 1.40449 8.85652 0.666992 7 0.666992Z" />
					</svg>
					<p className='header-location__city'>Новосибирск</p>
				</button> */}
				<Link to='/signIn' className='header__exit header-exit'>
					<img className='header-exit__img' src={exit} alt="вход" />
					<p className='header-exit__name'>
						<span>Войти</span> в кабинет
					</p>
				</Link>
			</div>
		</header>
	);
};

export default Header;