class Carousel {
	
	// set up instance variables

	constructor (options) {
		
		this.element = options.element;
		this.carousel = options.element.querySelectorAll('ul');
		this.carouselSlides = this.carousel[0].children;
		this.carouselHeight = 0;

	}

	resize () {

		// Get tallest slide

		Array.prototype.map.call( this.carouselSlides, ( slide ) => {
			this.carouselHeight = (slide.offsetHeight > this.carouselHeight) ? slide.offsetHeight : this.carouselHeight;
		});



		//Set the height of the carousel to the height of its tallest slide

		this.carousel[0].style.height = this.carouselHeight+'px';


		
		//Reset the height of the carousel to zero

		this.carouselHeight = 0;

	}


	// initial set up

	setup () {
		
		// Carousel shows as list of images without JS. With JS enabled (on load) add 'loaded' CSS class to carousel to invoke carousel styles
		
		this.element.classList.add("loaded");



		// Add active class to the first slide in the carousel

		this.carousel[0].firstElementChild.classList.add("active");


		// Run resize function which calculates the height of the tallest slide in the carousel and sets the height of the carousel to this value
		
		this.resize();


		// When the browser is resized, run the resize function

		window.addEventListener("resize", this.resize.bind(this));
	
	}



}

// Private methods
// --------------------



module.exports = Carousel;