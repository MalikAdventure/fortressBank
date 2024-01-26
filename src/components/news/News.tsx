import './News.scss';

import UsualLink from '../UI/links/usualLink/UsualLink';
import UsualButton from '../UI/buttons/usualButton/UsualButton';

import news from '../../assets/imgs/news.svg';
import telegram from '../../assets/imgs/telegram.svg';

const News = () => {

	//!!! отелить карточки в отдельный компонент, поправить расположение по центру и добавить загрузку с хуками

	return (
		<section className='news'>
			<div className='news__container container'>
				<h2 className='news__title title-section'>Новости</h2>
				<div className='news__box'>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name title-decoration'>Выгодный кредит</h3>
							<div className='news__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<UsualLink href='#' className='news__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name title-decoration'>Выгодный кредит</h3>
							<div className='news__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<UsualLink href='#' className='news__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name title-decoration'>Выгодный кредит</h3>
							<div className='news__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<UsualLink href='#' className='news__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name title-decoration'>Выгодный кредит</h3>
							<div className='news__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<UsualLink href='#' className='news__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name title-decoration'>Выгодный кредит</h3>
							<div className='news__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<UsualLink href='#' className='news__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
				</div>
				<div className='news__telegram news-telegram'>
					<img className='news-telegram__img' src={telegram} alt="телеграмм" />
					<div className='news-telegram__text'>
						<h2 className='news-telegram__title title-section'>Мы есть в Telegram </h2>
						<h3 className='news-telegram__name title-decoration'>Все важные новости в Telegram-канале @fortressbank</h3>
						<p className='news-telegram__description text-decoration'>Чтобы не запутаться в огромном потоке информации, подпишитесь на наш Telegram-канал "Крепость Банк". Самые оперативные новости - здесь</p>
						<UsualButton className='news-telegram__button button'>Перейти в канал</UsualButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;