class Carousel {
	// set up instance variables
	constructor (options) {

		this.element = options.element;
		this.carousel = options.element.querySelectorAll('ul');
		this.carouselNav = options.element.querySelectorAll('button');
		this.carouselSlides = this.carousel[0].children;
		this.carouselHeight = 0;
		self = this;
	}

	resize () {

		Array.prototype.map.call( self.carouselSlides, ( slide ) => {
			self.carouselHeight = (slide.offsetHeight > self.carouselHeight) ? slide.offsetHeight : self.carouselHeight;
		});


		self.carousel[0].style.removeProperty('height');

		//Set the height of the carousel to the height of its tallest slide
		self.carousel[0].style.height = self.carouselHeight+'px';

		self.carouselHeight = 0;

	}


	getActiveSlide () {

		let activeSlide;

		//Get currently active slide
		for (let slide of self.carousel[0].children){

			if ( slide.classList.contains('active') === true ) {
				activeSlide = slide;
			}
		}

		return activeSlide;

	}

	changeSlide () {

		let activeSlide = self.getActiveSlide(),
			direction = null,
			lastSlide = null,
			firstSlide = null;

		for ( let slide of self.carouselSlides){
			slide.classList.remove('active');
		}

		if ( this.classList.contains('prev') ) {
			direction = "previous";
		} else if ( this.classList.contains('next') ){
			direction = "next";
		}


		if( direction === 'previous' ) {

			if( activeSlide.previousElementSibling !== null){

				activeSlide.previousElementSibling.classList.add('active');

			} else {

				lastSlide = self.carousel[0].children[self.carousel[0].children.length - 1];
				lastSlide.classList.add('active');

			}

		} else if (direction === 'next' ) {

			if( activeSlide.nextElementSibling !== null){

				activeSlide.nextElementSibling.classList.add('active');

			} else {

				firstSlide = self.carousel[0].children[0];
				firstSlide.classList.add('active');

			}

		}



	}

	// initial set up
	setup () {

		// Run the resize function to give the carousel the height of its tallest slide
		self.resize();

		this.element.classList.add("loaded");

		// Add an active class to the first slide
		self.carouselSlides[0].classList.add('active');

		// On resize adjust the height of the carousel
		window.onresize = this.resize.bind(this);

		for (let button of self.carouselNav){
			button.addEventListener('click', self.changeSlide);
		}


	}
}


// Private methods
// --------------------



module.exports = Carousel;