(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesCarousel = require('./modules/Carousel');

var _modulesCarousel2 = _interopRequireDefault(_modulesCarousel);

var text = "Hello World";
var carouselCollection = document.querySelectorAll('.carousel');

carouselCollection.forEach(function (item) {
	var carousel = new _modulesCarousel2['default']({
		element: item
	});
	carousel.setup();
});

},{"./modules/Carousel":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = (function () {
	// set up instance variables

	function Carousel(options) {
		_classCallCheck(this, Carousel);

		this.element = options.element;
		//this.canvas = options.canvas;
		//this.ctx = options.context;
		//this.universe = options.universe;
		//this.universeElem = document.getElementById('universe');
		//this.speed = options.speed;
	}

	// Private methods
	// --------------------

	// initial set up

	_createClass(Carousel, [{
		key: "setup",
		value: function setup() {
			// Note: using bind to pass the class' context to the callbacks
			console.log(this.element);
			// not sure if this can be improved.
			//this.universeElem.addEventListener('click', loopCells.bind(this));
			// when user click, start the game
			//document.getElementById('start').addEventListener('click', this.play.bind(this));
		}
	}]);

	return Carousel;
})();

module.exports = Carousel;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFtZXNob3dlbGwvU2l0ZXMvZGMtYm9pbGVycGxhdGUvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9qYW1lc2hvd2VsbC9TaXRlcy9kYy1ib2lsZXJwbGF0ZS9zcmMvanMvbW9kdWxlcy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7K0JDQXFCLG9CQUFvQjs7OztBQUV6QyxJQUFNLElBQUksR0FBRyxhQUFhLENBQUM7QUFDM0IsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRWxFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUNwQyxLQUFJLFFBQVEsR0FBRyxpQ0FBYTtBQUMzQixTQUFPLEVBQUUsSUFBSTtFQUNiLENBQUMsQ0FBQztBQUNILFNBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUNqQixDQUFDLENBQUM7Ozs7Ozs7OztJQ1ZHLFFBQVE7OztBQUVGLFVBRk4sUUFBUSxDQUVELE9BQU8sRUFBQzt3QkFGZixRQUFROztBQUlaLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0VBTS9COzs7Ozs7O2NBVkksUUFBUTs7U0FZUixpQkFBRzs7QUFFUCxVQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7R0FLMUI7OztRQW5CSSxRQUFROzs7QUE0QmQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENhcm91c2VsIGZyb20gJy4vbW9kdWxlcy9DYXJvdXNlbCc7XG5cbmNvbnN0IHRleHQgPSBcIkhlbGxvIFdvcmxkXCI7XG5jb25zdCBjYXJvdXNlbENvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwnKTtcblxuY2Fyb3VzZWxDb2xsZWN0aW9uLmZvckVhY2goKGl0ZW0pID0+IHtcblx0bGV0IGNhcm91c2VsID0gbmV3IENhcm91c2VsKHtcblx0XHRlbGVtZW50OiBpdGVtXG5cdH0pO1xuXHRjYXJvdXNlbC5zZXR1cCgpO1xufSk7XG5cblxuXG5cbiIsImNsYXNzIENhcm91c2VsIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHRcblx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0Ly90aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdC8vdGhpcy5jdHggPSBvcHRpb25zLmNvbnRleHQ7XG5cdFx0Ly90aGlzLnVuaXZlcnNlID0gb3B0aW9ucy51bml2ZXJzZTtcblx0XHQvL3RoaXMudW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdFx0Ly90aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0fVxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRzZXR1cCgpIHtcblx0XHQvLyBOb3RlOiB1c2luZyBiaW5kIHRvIHBhc3MgdGhlIGNsYXNzJyBjb250ZXh0IHRvIHRoZSBjYWxsYmFja3Ncblx0XHRjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpO1xuXHRcdC8vIG5vdCBzdXJlIGlmIHRoaXMgY2FuIGJlIGltcHJvdmVkLlxuXHRcdC8vdGhpcy51bml2ZXJzZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb29wQ2VsbHMuYmluZCh0aGlzKSk7XG5cdFx0Ly8gd2hlbiB1c2VyIGNsaWNrLCBzdGFydCB0aGUgZ2FtZVxuXHRcdC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYXkuYmluZCh0aGlzKSk7XG5cdH1cblxufVxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsOyJdfQ==
