(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesCarousel = require('./modules/Carousel');

var _modulesCarousel2 = _interopRequireDefault(_modulesCarousel);

var carouselCollection = document.querySelectorAll('.carousel');

carouselCollection.forEach(function (item) {
	var carousel = new _modulesCarousel2['default']({
		element: item
	});
	carousel.setup();
});

},{"./modules/Carousel":2}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Carousel = (function () {

	// set up instance variables

	function Carousel(options) {
		_classCallCheck(this, Carousel);

		this.element = options.element;
		this.carousel = options.element.querySelectorAll('ul');
		this.carouselSlides = this.carousel[0].children;
		this.carouselHeight = 0;
	}

	// Private methods
	// --------------------

	_createClass(Carousel, [{
		key: 'resize',
		value: function resize() {
			var _this = this;

			// Get tallest slide

			Array.prototype.map.call(this.carouselSlides, function (slide) {
				_this.carouselHeight = slide.offsetHeight > _this.carouselHeight ? slide.offsetHeight : _this.carouselHeight;
			});

			//Set the height of the carousel to the height of its tallest slide

			this.carousel[0].style.height = this.carouselHeight + 'px';

			//Reset the height of the carousel to zero

			this.carouselHeight = 0;
		}

		// initial set up

	}, {
		key: 'setup',
		value: function setup() {

			// Carousel shows as list of images without JS. With JS enabled (on load) add 'loaded' CSS class to carousel to invoke carousel styles

			this.element.classList.add("loaded");

			// Add active class to the first slide in the carousel

			this.carousel[0].firstElementChild.classList.add("active");

			// Run resize function which calculates the height of the tallest slide in the carousel and sets the height of the carousel to this value

			this.resize();

			// When the browser is resized, run the resize function

			window.addEventListener("resize", this.resize.bind(this));
		}
	}]);

	return Carousel;
})();

module.exports = Carousel;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFtZXNob3dlbGwvU2l0ZXMvZGMtYm9pbGVycGxhdGUvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9qYW1lc2hvd2VsbC9TaXRlcy9kYy1ib2lsZXJwbGF0ZS9zcmMvanMvbW9kdWxlcy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7K0JDQXFCLG9CQUFvQjs7OztBQUV6QyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3BDLEtBQUksUUFBUSxHQUFHLGlDQUFhO0FBQzNCLFNBQU8sRUFBRSxJQUFJO0VBQ2IsQ0FBQyxDQUFDO0FBQ0gsU0FBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7O0lDVEcsUUFBUTs7OztBQUlELFVBSlAsUUFBUSxDQUlBLE9BQU8sRUFBRTt3QkFKakIsUUFBUTs7QUFNWixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDL0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZELE1BQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7RUFFeEI7Ozs7O2NBWEksUUFBUTs7U0FhTixrQkFBRzs7Ozs7QUFJVCxRQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFFLEtBQUssRUFBTTtBQUMzRCxVQUFLLGNBQWMsR0FBRyxBQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBSyxjQUFjLEdBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFLLGNBQWMsQ0FBQztJQUM1RyxDQUFDLENBQUM7Ozs7QUFNSCxPQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7Ozs7QUFNekQsT0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7R0FFeEI7Ozs7OztTQUtLLGlCQUFHOzs7O0FBSVIsT0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O0FBTXJDLE9BQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztBQUszRCxPQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7QUFLZCxTQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7R0FFMUQ7OztRQTVESSxRQUFROzs7QUF1RWQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENhcm91c2VsIGZyb20gJy4vbW9kdWxlcy9DYXJvdXNlbCc7XG5cbmNvbnN0IGNhcm91c2VsQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCcpO1xuXG5jYXJvdXNlbENvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRsZXQgY2Fyb3VzZWwgPSBuZXcgQ2Fyb3VzZWwoe1xuXHRcdGVsZW1lbnQ6IGl0ZW1cblx0fSk7XG5cdGNhcm91c2VsLnNldHVwKCk7XG59KTtcblxuXG4iLCJjbGFzcyBDYXJvdXNlbCB7XG5cdFxuXHQvLyBzZXQgdXAgaW5zdGFuY2UgdmFyaWFibGVzXG5cblx0Y29uc3RydWN0b3IgKG9wdGlvbnMpIHtcblx0XHRcblx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0dGhpcy5jYXJvdXNlbCA9IG9wdGlvbnMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpO1xuXHRcdHRoaXMuY2Fyb3VzZWxTbGlkZXMgPSB0aGlzLmNhcm91c2VsWzBdLmNoaWxkcmVuO1xuXHRcdHRoaXMuY2Fyb3VzZWxIZWlnaHQgPSAwO1xuXG5cdH1cblxuXHRyZXNpemUgKCkge1xuXG5cdFx0Ly8gR2V0IHRhbGxlc3Qgc2xpZGVcblxuXHRcdEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCggdGhpcy5jYXJvdXNlbFNsaWRlcywgKCBzbGlkZSApID0+IHtcblx0XHRcdHRoaXMuY2Fyb3VzZWxIZWlnaHQgPSAoc2xpZGUub2Zmc2V0SGVpZ2h0ID4gdGhpcy5jYXJvdXNlbEhlaWdodCkgPyBzbGlkZS5vZmZzZXRIZWlnaHQgOiB0aGlzLmNhcm91c2VsSGVpZ2h0O1xuXHRcdH0pO1xuXG5cblxuXHRcdC8vU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGNhcm91c2VsIHRvIHRoZSBoZWlnaHQgb2YgaXRzIHRhbGxlc3Qgc2xpZGVcblxuXHRcdHRoaXMuY2Fyb3VzZWxbMF0uc3R5bGUuaGVpZ2h0ID0gdGhpcy5jYXJvdXNlbEhlaWdodCsncHgnO1xuXG5cblx0XHRcblx0XHQvL1Jlc2V0IHRoZSBoZWlnaHQgb2YgdGhlIGNhcm91c2VsIHRvIHplcm9cblxuXHRcdHRoaXMuY2Fyb3VzZWxIZWlnaHQgPSAwO1xuXG5cdH1cblxuXG5cdC8vIGluaXRpYWwgc2V0IHVwXG5cblx0c2V0dXAgKCkge1xuXHRcdFxuXHRcdC8vIENhcm91c2VsIHNob3dzIGFzIGxpc3Qgb2YgaW1hZ2VzIHdpdGhvdXQgSlMuIFdpdGggSlMgZW5hYmxlZCAob24gbG9hZCkgYWRkICdsb2FkZWQnIENTUyBjbGFzcyB0byBjYXJvdXNlbCB0byBpbnZva2UgY2Fyb3VzZWwgc3R5bGVzXG5cdFx0XG5cdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG5cblxuXG5cdFx0Ly8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgZmlyc3Qgc2xpZGUgaW4gdGhlIGNhcm91c2VsXG5cblx0XHR0aGlzLmNhcm91c2VsWzBdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cblxuXHRcdC8vIFJ1biByZXNpemUgZnVuY3Rpb24gd2hpY2ggY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSB0YWxsZXN0IHNsaWRlIGluIHRoZSBjYXJvdXNlbCBhbmQgc2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBjYXJvdXNlbCB0byB0aGlzIHZhbHVlXG5cdFx0XG5cdFx0dGhpcy5yZXNpemUoKTtcblxuXG5cdFx0Ly8gV2hlbiB0aGUgYnJvd3NlciBpcyByZXNpemVkLCBydW4gdGhlIHJlc2l6ZSBmdW5jdGlvblxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG5cdFxuXHR9XG5cblxuXG59XG5cbi8vIFByaXZhdGUgbWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ2Fyb3VzZWw7Il19
