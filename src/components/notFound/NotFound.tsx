import './NotFound.scss';

import { useNavigate } from 'react-router-dom';

import AttractButton from '../UI/buttons/attractButton/AttractButton';

import logoAzure from '../../assets/icons/logo-azure.svg';

const NotFound = () => {

	const navigate = useNavigate();

	return (
		<section className='not-found'>
			<div className='not-found__container container'>
				<h2 className='not-found__title title-section'>Что-то произошло не так ...</h2>
				<div className='not-found__box'>
					<img className='not-found__img' src={logoAzure} alt="логотип" />
					<h3 className='not-found__title-404 title-decoration'>404</h3>
					<p className='not-found__title-description title-decoration'>Страница не найдена</p>
					<AttractButton onClick={() => navigate(-1)} className='not-found__button button-link button-link_azure'>Вернуться назад</AttractButton>
				</div>
			</div>
		</section>
	);
};

export default NotFound;