import { Link } from 'react-router-dom';

import './Footer.scss';

import logoFooter from '../../assets/icons/logo-footer.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<div className='footer__header'>
					<Link to='/' className='footer__logo'>
						<img className='footer__img' src={logoFooter} alt='крепость' />
						<div className='footer__box'>
							<p className='footer__name'>
								Крепость <span>банк</span>
							</p>
							<p className='footer__designation'>НАДЕЖНЫЙ БАНК</p>
						</div>
					</Link>
					<nav className='footer__nav footer-nav'>
						<ul className='footer-nav__list'>
							<li className='footer-nav__item'>
								<Link to='/credits'>Кредиты</Link>
							</li>
							<li className='footer-nav__item'>
								<Link to='/deposits'>Вклады</Link>
							</li>
							<li className='footer-nav__item'>
								<Link to='/services'>Услуги</Link>
							</li>
						</ul>
					</nav>
					<button className='footer__location footer-location'>
						<svg className='footer-location__img' width="14" height="21" viewBox="0 0 14 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 10.167C6.33696 10.167 5.70107 9.9036 5.23223 9.43476C4.76339 8.96592 4.5 8.33003 4.5 7.66699C4.5 7.00395 4.76339 6.36807 5.23223 5.89923C5.70107 5.43038 6.33696 5.16699 7 5.16699C7.66304 5.16699 8.29893 5.43038 8.76777 5.89923C9.23661 6.36807 9.5 7.00395 9.5 7.66699C9.5 7.9953 9.43534 8.32039 9.3097 8.6237C9.18406 8.92702 8.99991 9.20261 8.76777 9.43476C8.53562 9.66691 8.26002 9.85105 7.95671 9.97669C7.65339 10.1023 7.3283 10.167 7 10.167ZM7 0.666992C5.14348 0.666992 3.36301 1.40449 2.05025 2.71724C0.737498 4.03 0 5.81048 0 7.66699C0 12.917 7 20.667 7 20.667C7 20.667 14 12.917 14 7.66699C14 5.81048 13.2625 4.03 11.9497 2.71724C10.637 1.40449 8.85652 0.666992 7 0.666992Z" />
						</svg>
						<p className='footer-location__city'>Новосибирск</p>
					</button>
					<Link to='/signIn' className='footer__exit footer-exit'>
						<svg width="55" height="55" viewBox="0 0 55 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.2582 3.63641C21.5806 3.4028 21.9311 3.21555 22.3003 3.0796C21.6794 2.57308 20.9313 2.02345 20.4954 1.91449C17.3396 1.13016 17.2783 6.0349 14.9239 3.75256C16.8276 7.41196 18.9379 2.29408 21.2582 3.63761V3.63641Z" />
							<path d="M23.5615 4.7668C23.7233 4.76669 23.8844 4.78924 24.0406 4.83386C24.9998 5.10807 25.6162 6.16901 25.6945 7.46824L22.768 8.18671L25.2529 9.84636C24.6933 11.1001 23.7011 11.9179 22.7169 11.9179C22.5551 11.9181 22.3941 11.8955 22.2379 11.8509C20.912 11.4725 20.2411 9.5937 20.7394 7.65983C21.1788 5.95227 22.3775 4.7668 23.5615 4.7668ZM27.3882 17.4741C26.6575 15.7689 24.7537 15.0125 23.1381 15.7857L25.7876 21.9585C27.4048 21.1876 28.1227 19.1793 27.3905 17.4741H27.3882ZM19.4964 21.6652L17.0308 20.8677L10.113 24.5797L10.9258 26.2645L19.4964 21.6652ZM22.8884 13.8327H22.7147C22.3927 13.8329 22.0722 13.7884 21.7611 13.6997C21.1501 13.5227 20.5924 13.1834 20.1412 12.7142L17.9287 19.1541L23.3424 20.906L22.1301 18.0812L20.5408 17.7651L21.6408 16.9269L20.7315 14.8301C20.7315 14.8301 22.7203 13.8925 22.8884 13.8327ZM22.9042 23.3811L23.1665 22.8518L21.9984 22.4746L16.3327 25.5149L24.1257 28.6846L18.6382 33.4851L23.2505 36.6644L22.5126 33.7989L27.6675 27.9314L22.9042 23.3811ZM24.4629 13.562C25.0189 13.5624 25.5708 13.6602 26.0964 13.8518L30.8403 11.3108C29.5071 11.0327 28.1513 10.8919 26.7923 10.8905C26.1475 12.2077 25.1633 13.1657 24.0485 13.586C24.1859 13.5752 24.3244 13.5668 24.4629 13.5668V13.562ZM45.1232 28.4547H44.6521C44.0425 28.4547 43.3626 28.4295 42.6349 28.3792L44.0721 30.5346L46.91 29.6569C46.91 29.6569 46.7818 29.1121 46.599 28.3122C46.11 28.4024 45.615 28.4517 45.1187 28.4595L45.1232 28.4547ZM29.3476 22.9021C30.9187 20.1612 34.6557 14.9116 40.2453 14.9116C42.1513 14.9116 44.2741 15.5223 46.6024 17.0502L45.3537 19.4247L45.3775 22.0507C45.3287 22.4399 45.7635 24.5654 46.1812 26.4693C45.4263 26.607 43.5703 26.589 41.2795 26.3496L40.6347 25.3796C38.8003 24.2361 37.3711 23.4925 37.3711 23.4925C37.3711 23.4925 37.4744 24.4229 37.5095 25.7951C34.8918 25.2946 32.1912 24.5175 30.149 23.3847C29.8745 23.2379 29.607 23.0768 29.3476 22.9021ZM42.9812 20.7012C42.9812 21.2614 43.6231 21.5418 43.9986 21.1457C44.3739 20.7497 44.108 20.0725 43.577 20.0725C43.4189 20.0725 43.2674 20.1388 43.1556 20.2567C43.0438 20.3746 42.9812 20.5345 42.9812 20.7012ZM27.924 15.0229C28.3671 15.4652 28.7299 15.9891 28.9945 16.5688L54.333 1.79235V0.666748L27.924 15.0229ZM36.5708 33.478C37.211 31.7153 37.4426 29.5767 37.5016 27.7302C35.6143 27.3938 33.7546 26.9034 31.9392 26.2633C30.7455 25.8458 29.5989 25.2913 28.52 24.6097L30.0843 36.1842L15.4404 38.2366L14.2609 27.8128C13.7774 28.0248 13.3017 28.2487 12.8374 28.4882C6.16139 31.9225 9.49316 40.0052 9.49316 40.0052L6.6552 45.8979L10.0732 52.406V54.6584H13.9215L12.1347 51.9246L10.491 45.6296L16.0386 40.0735C19.2047 40.2244 27.6675 38.6976 31.3092 38.0378L40.7312 38.5827L43.3285 42.09L41.4157 43.5928L44.7702 45.2572L45.8339 43.0479L43.6509 37.1469L36.5708 33.478ZM30.7563 17.777L29.4724 18.462C29.4932 18.7563 29.4906 19.0519 29.4645 19.3457C29.8573 18.8284 30.2852 18.2979 30.7563 17.777ZM34.3537 45.5482L33.7861 40.107L31.4147 39.9705C30.7109 40.0974 29.9265 40.2363 29.0944 40.3812L31.5305 46.0978L33.5375 52.6311L33.466 54.6667H37.0612L35.9657 52.5317L34.3537 45.5482ZM18.418 47.8772L22.5943 41.4326C20.173 41.7858 16.7697 42.0397 16.7515 42.0397L17.0841 42.9509L14.9159 47.9646L20.2513 53.2418V54.6488H23.5036L22.2152 53.1017L18.418 47.8772Z" />
							<path d="M1.3255 29.979C2.17575 31.1896 5.2714 32.9666 6.96056 33.8779C7.09875 32.8609 7.39403 31.8747 7.83465 30.9585L7.83011 30.9561C4.26148 28.2701 5.28453 25.444 6.12209 23.1303C7.00886 20.6806 7.68772 18.8053 2.48906 18.2788C5.78822 19.8389 4.50278 21.1591 2.85993 22.8465C1.15238 24.6003 -0.941275 26.7506 1.3255 29.979Z" />
						</svg>
						<p className='footer-exit__name'>
							<span>Войти</span> в кабинет
						</p>
					</Link>
				</div>
				<div className='footer__note footer-note'>
					<hr className='footer-note__hr' />
					<p className='footer-note__text'>
						ПАО «Крепость Банк» использует файлы «cookie», с целью персонализации сервисов и повышения удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки браузера.
					</p>
					<hr className='footer-note__hr' />
					<div className='footer-note__box'>
						<p className='footer-note__text'>
							© 2023-2024, ПАО «Крепость Банк».
							<br />
							115114, г. Новосибирск, ул. Каменская, д. 52/1, стр. 4.
							<br />
							Генеральная лицензия Банка России № 2209 от 04.09.2023.
						</p>
						<div className='footer-note__network'>
							<p className='footer-note__title'>Социальные сети:</p>
							<div className='footer-note__imgs'>
								<a className='footer-note__img footer-note__img_telegram' href="#"></a>
								<a className='footer-note__img footer-note__img_vk' href="#"></a>
								<a className='footer-note__img footer-note__img_twitter' href="#"></a>
							</div>
						</div>
						<div className='footer-note__contacts'>
							<p className='footer-note__title'>Контактные данные:</p>
							<p className='footer-note__text'>
								Телефон: 8 (800) 100-10-10
								<br />
								Почта: fortressbank@yandex.ru
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;