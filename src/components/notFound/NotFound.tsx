import { Link } from 'react-router-dom';

import './NotFound.scss';

import logoAzure from '../../assets/icons/logo-azure.svg';

const NotFound = () => {
	return (
		<section className='not-found'>
			<div className='not-found__container container'>
				<h2 className='not-found__title title-h2'>Что-то произошло не так ...</h2>
				<div className='not-found__box'>
					<img className='not-found__img' src={logoAzure} alt="логотип" />
					<h3 className='not-found__title-404 title-h3'>404</h3>
					<p className='not-found__title-description title-h3'>Страница не найдена</p>
					<Link to='/' className='not-found__button button-link button-link_azure'>Главная страница</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFound;