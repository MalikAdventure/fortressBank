import './Footer.scss';

import NavigateHeader from '../navigateHeader/NavigateHeader';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<div className='footer__header'>
					<NavigateHeader name='footer' />
				</div>
				<div className='footer__note footer-note'>
					<hr className='footer-note__hr' />
					<p className='footer-note__text text-decoration'>
						ПАО «Крепость Банк» использует файлы «cookie», с целью персонализации сервисов и повышения удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки браузера.
					</p>
					<hr className='footer-note__hr' />
					<div className='footer-note__box'>
						<div className='footer-note__address'>
							<p className='footer-note__text title-decoration'>Адрес:</p>
							<p className='footer-note__text text-decoration'>
								© 2023-2024, ПАО «Крепость Банк».
								<br />
								115114, г. Новосибирск, ул. Каменская, д. 52/1, стр. 4.
								<br />
								Генеральная лицензия Банка России № 2209 от 04.09.2023.
							</p>
						</div>
						<div className='footer-note__network'>
							<p className='footer-note__text title-decoration'>Социальные сети:</p>
							<div className='footer-note__imgs'>
								<a className='footer-note__img footer-note__img_telegram' href="#"></a>
								<a className='footer-note__img footer-note__img_vk' href="#"></a>
								<a className='footer-note__img footer-note__img_twitter' href="#"></a>
							</div>
						</div>
						<div className='footer-note__contacts'>
							<p className='footer-note__text title-decoration'>Контактные данные:</p>
							<p className='footer-note__text text-decoration'>
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