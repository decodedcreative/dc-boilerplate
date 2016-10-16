import Carousel from './modules/Carousel';

const carouselCollection = document.querySelectorAll('.carousel');

carouselCollection.forEach((item) => {
	let carousel = new Carousel({
		element: item
	});
	carousel.setup();
});


