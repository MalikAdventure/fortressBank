import './Up.scss';

//!!! отступает по контенту, сделать прозрачной, вверх

const scrollUp = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Up = () => {
	return (
		<aside className='up'>
			<button className='up__button' onClick={scrollUp}></button>
		</aside>
	);
};

export default Up;