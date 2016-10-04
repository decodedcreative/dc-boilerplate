class Carousel {
	// set up instance variables
	constructor(options){
		
		this.element = options.element;
		//this.canvas = options.canvas;
		//this.ctx = options.context;
		//this.universe = options.universe;
		//this.universeElem = document.getElementById('universe');
		//this.speed = options.speed;
	}
	// initial set up
	setup() {
		// Note: using bind to pass the class' context to the callbacks
		console.log(this.element);
		// not sure if this can be improved.
		//this.universeElem.addEventListener('click', loopCells.bind(this));
		// when user click, start the game
		//document.getElementById('start').addEventListener('click', this.play.bind(this));
	}

}

// Private methods
// --------------------



module.exports = Carousel;