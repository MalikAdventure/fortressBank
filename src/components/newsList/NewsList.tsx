import './NewsList.scss';

import { INewsListPost } from '../../components/newsList/NewsListInterface';

import { useState, useEffect } from 'react';

import FortressServices from '../../services/FortressServices';

import { useFetching } from '../../hooks/useFetching';

import NewsItem from '../newsItem/NewsItem';

import UsualButton from '../UI/buttons/usualButton/UsualButton';
import Spinner from '../UI/others/spinner/Spinner';

import telegram from '../../assets/imgs/telegram.svg';

//!!! поправить расположение по центру, добавить item props и добавить disabled для кнопки во время загрузки

const NewsList = () => {

	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await FortressServices.getAllNews(page);
		setPosts([...posts, ...response.data]);
		// setPosts([...posts, ...response.data]: INewsListPost[]);
		setPage(page + 1);
		setTotalCount(response.headers['x-total-count']);
	});

	const onRequest = () => {
		fetchPosts();
	};

	useEffect(() => {
		onRequest();
	}, []);

	const loadMorePosts = () => {
		onRequest();
	};

	const openTelegram = () => {
		window.open('https://web.telegram.org/k/', '_blank');
	};

	const content = !(!isPostsLoading && !postError && posts.length === 0)
		? posts.map((post) => (
			<NewsItem post={post} key={post.id} />
		))
		: <h3 className='title-decoration' style={{ margin: '0px auto', marginBottom: '30px' }}>Нет статей</h3>;

	const error = postError
		? <h3 className='title-decoration' style={{ textAlign: 'center', marginBottom: '30px' }}>Ошибка: {postError}</h3>
		: null;

	const spinner = isPostsLoading
		? <Spinner style={{ marginBottom: '30px' }} />
		: null;

	const button = totalCount > posts.length || error || spinner
		? <UsualButton onClick={loadMorePosts} style={{ margin: '0px auto', display: 'block' }}>Показать ещё</UsualButton>
		: null;

	return (
		<section className='news'>
			<div className='news__container container'>
				<h2 className='news__title title-section'>Новости</h2>
				<ul className='news__box'>
					{content}
				</ul>
				<div className='news__status'>
					{error}
					{spinner}
					{button}
				</div>
				<div className='news__telegram news-telegram'>
					<img className='news-telegram__img' src={telegram} alt="телеграмм" />
					<div className='news-telegram__text'>
						<h2 className='news-telegram__title title-section'>Мы есть в Telegram </h2>
						<h3 className='news-telegram__name title-decoration'>Все важные новости в Telegram-канале @fortressbank</h3>
						<p className='news-telegram__description text-decoration'>Чтобы не запутаться в огромном потоке информации, подпишитесь на наш Telegram-канал "Крепость Банк". Самые оперативные новости - здесь</p>
						<UsualButton onClick={openTelegram} className='news-telegram__button button'>Перейти в канал</UsualButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsList;