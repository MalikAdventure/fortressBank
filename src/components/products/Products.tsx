import './Products.scss';

import UsualLink from '../UI/links/usualLink/UsualLink';

import productImg from '../../assets/imgs/product-img.png';

//!!! использовать компонент карточки из новостей или нет

const Products = () => {
	return (
		<section className='products'>
			<div className='products__container container'>
				<h2 className='products__title title-section'>Услуги банка</h2>
				<div className='products__box'>
					<div className='products__item products-item'>
						<img className='products-item__img' src={productImg} alt="услуга" />
						<div className='products-item__box'>
							<h3 className='products-item__title title-decoration'>Дебетовая карта</h3>
							<p className='products-item__text text-decoration'>Оформите дебетовую карту нашего банка</p>
							<UsualLink className='products-item__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='products__item products-item'>
						<img className='products-item__img' src={productImg} alt="услуга" />
						<div className='products-item__box'>
							<h3 className='products-item__title title-decoration'>Дебетовая карта</h3>
							<p className='products-item__text text-decoration'>Оформите дебетовую карту нашего банка</p>
							<UsualLink className='products-item__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='products__item products-item'>
						<img className='products-item__img' src={productImg} alt="услуга" />
						<div className='products-item__box'>
							<h3 className='products-item__title title-decoration'>Дебетовая карта</h3>
							<p className='products-item__text text-decoration'>Оформите дебетовую карту нашего банка</p>
							<UsualLink className='products-item__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='products__item products-item'>
						<img className='products-item__img' src={productImg} alt="услуга" />
						<div className='products-item__box'>
							<h3 className='products-item__title title-decoration'>Дебетовая карта</h3>
							<p className='products-item__text text-decoration'>Оформите дебетовую карту нашего банка</p>
							<UsualLink className='products-item__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
					<div className='products__item products-item'>
						<img className='products-item__img' src={productImg} alt="услуга" />
						<div className='products-item__box'>
							<h3 className='products-item__title title-decoration'>Дебетовая карта</h3>
							<p className='products-item__text text-decoration'>Оформите дебетовую карту нашего банка</p>
							<UsualLink className='products-item__button button-line'>Подробнее</UsualLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;