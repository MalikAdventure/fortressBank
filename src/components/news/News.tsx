import './News.scss';

import news from '../../assets/imgs/news.svg';
import telegram from '../../assets/imgs/telegram.svg';

const News = () => {
	return (
		<section className='news'>
			<div className='news__container container'>
				<h2 className='news__title'>Новости</h2>
				<div className='news__box'>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name'>Выгодный кредит</h3>
							<div className='news__description'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<button className='news__button'>Подробнее</button>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name'>Выгодный кредит</h3>
							<div className='news__description'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<button className='news__button'>Подробнее</button>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name'>Выгодный кредит</h3>
							<div className='news__description'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<button className='news__button'>Подробнее</button>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name'>Выгодный кредит</h3>
							<div className='news__description'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<button className='news__button'>Подробнее</button>
						</div>
					</div>
					<div className='news__item'>
						<img className='news__img' src={news} alt="новость" />
						<div className='news__text'>
							<h3 className='news__name'>Выгодный кредит</h3>
							<div className='news__description'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
							<button className='news__button'>Подробнее</button>
						</div>
					</div>
				</div>
				<div className='news__telegram telegram-news'>
					<img className='telegram-news__img' src={telegram} alt="телеграмм" />
					<div className='telegram-news__text'>
						<h2 className='telegram-news__title'>Мы есть в Telegram </h2>
						<h3 className='telegram-news__name'>Все важные новости в Telegram-канале @fortressbank</h3>
						<p className='telegram-news__description'>Чтобы не запутаться в огромном потоке информации, подпишитесь на наш Telegram-канал "Крепость Банк". Самые оперативные новости - здесь</p>
						<button className='telegram-news__button'>Перейти в канал</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;