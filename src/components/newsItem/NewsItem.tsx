import './NewsItem.scss';

import { INewsItemProps } from './NewsItemInterface';

import UsualLink from '../UI/links/usualLink/UsualLink';

import news from '../../assets/imgs/news.svg';

const NewsItem = ({ ...props }) => {
	return (
		<li className='news-item__item'>
			<img className='news-item__img' src={news} alt="новость" />
			<div className='news-item__text'>
				<h3 className='news-item__name title-decoration'>{props.post.id} {props.post.title}</h3>
				<div className='news-item__description text-decoration'>{props.post.body}</div>
				<UsualLink href='#' className='news-item__button button-line'>Подробнее</UsualLink>
			</div>
		</li>
	);
};

export default NewsItem;