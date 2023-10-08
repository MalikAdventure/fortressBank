import './Map.scss';

const Map = () => {
	return (
		<section className='map'>
			{/* <div className='map__container container'> */}
			<h2 className='map__title'>Банкоматы</h2>
			<div className='map__map'>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146571.0814297911!2d82.78460103386938!3d54.970062674827936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5e190cc4d97%3A0x9b3a0673e1d3e985!2z0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1696773035926!5m2!1sru!2sru" width="600" height="450" loading="lazy"></iframe>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Map;