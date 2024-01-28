import './NewsItem.scss';

import UsualLink from '../UI/links/usualLink/UsualLink';

import news from '../../assets/imgs/news.svg';

const NewsItem = () => {
	return (
		<li className='news-item__item'>
			<img className='news-item__img' src={news} alt="новость" />
			<div className='news-item__text'>
				<h3 className='news-item__name title-decoration'>Выгодный кредит</h3>
				<div className='news-item__description text-decoration'>От 4% годовых — оформление и решение онлайн за 3 минуты</div>
				<UsualLink href='#' className='news-item__button button-line'>Подробнее</UsualLink>
			</div>
		</li>
	);
};

export default NewsItem;