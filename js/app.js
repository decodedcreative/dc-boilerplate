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
		this.carouselNav = options.element.querySelectorAll('button');
		this.carouselSlides = this.carousel[0].children;
		this.carouselHeight = 0;
		self = this;
	}

	// Private methods
	// --------------------

	_createClass(Carousel, [{
		key: 'resize',
		value: function resize() {

			Array.prototype.map.call(self.carouselSlides, function (slide) {
				self.carouselHeight = slide.offsetHeight > self.carouselHeight ? slide.offsetHeight : self.carouselHeight;
			});

			self.carousel[0].style.removeProperty('height');

			//Set the height of the carousel to the height of its tallest slide
			self.carousel[0].style.height = self.carouselHeight + 'px';

			self.carouselHeight = 0;
		}
	}, {
		key: 'getActiveSlide',
		value: function getActiveSlide() {

			var activeSlide = undefined;

			//Get currently active slide
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = self.carousel[0].children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var slide = _step.value;

					if (slide.classList.contains('active') === true) {
						activeSlide = slide;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return activeSlide;
		}
	}, {
		key: 'changeSlide',
		value: function changeSlide() {

			var activeSlide = self.getActiveSlide(),
			    direction = null,
			    lastSlide = null,
			    firstSlide = null;

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = self.carouselSlides[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var slide = _step2.value;

					slide.classList.remove('active');
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
						_iterator2['return']();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			if (this.classList.contains('prev')) {
				direction = "previous";
			} else if (this.classList.contains('next')) {
				direction = "next";
			}

			if (direction === 'previous') {

				if (activeSlide.previousElementSibling !== null) {

					activeSlide.previousElementSibling.classList.add('active');
				} else {

					lastSlide = self.carousel[0].children[self.carousel[0].children.length - 1];
					lastSlide.classList.add('active');
				}
			} else if (direction === 'next') {

				if (activeSlide.nextElementSibling !== null) {

					activeSlide.nextElementSibling.classList.add('active');
				} else {

					firstSlide = self.carousel[0].children[0];
					firstSlide.classList.add('active');
				}
			}
		}

		// initial set up
	}, {
		key: 'setup',
		value: function setup() {

			// Run the resize function to give the carousel the height of its tallest slide
			self.resize();

			this.element.classList.add("loaded");

			// Add an active class to the first slide
			self.carouselSlides[0].classList.add('active');

			// On resize adjust the height of the carousel
			window.onresize = this.resize.bind(this);

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = self.carouselNav[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var button = _step3.value;

					button.addEventListener('click', self.changeSlide);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}]);

	return Carousel;
})();

module.exports = Carousel;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFtZXNob3dlbGwvU2l0ZXMvZGMtYm9pbGVycGxhdGUvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy9qYW1lc2hvd2VsbC9TaXRlcy9kYy1ib2lsZXJwbGF0ZS9zcmMvanMvbW9kdWxlcy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7K0JDQXFCLG9CQUFvQjs7OztBQUV6QyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3BDLEtBQUksUUFBUSxHQUFHLGlDQUFhO0FBQzNCLFNBQU8sRUFBRSxJQUFJO0VBQ2IsQ0FBQyxDQUFDO0FBQ0gsU0FBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7O0lDVEcsUUFBUTs7O0FBRUQsVUFGUCxRQUFRLENBRUEsT0FBTyxFQUFFO3dCQUZqQixRQUFROztBQUlaLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUMvQixNQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlELE1BQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDaEQsTUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDeEIsTUFBSSxHQUFHLElBQUksQ0FBQztFQUNaOzs7OztjQVZJLFFBQVE7O1NBWU4sa0JBQUc7O0FBRVQs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Q0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7QUFHckMsT0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7QUFHL0MsU0FBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztBQUV6QywwQkFBbUIsSUFBSSxDQUFDLFdBQVcsbUlBQUM7U0FBM0IsTUFBTTs7QUFDZCxXQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNuRDs7Ozs7Ozs7Ozs7Ozs7O0dBR0Q7OztRQWxISSxRQUFROzs7QUEySGQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENhcm91c2VsIGZyb20gJy4vbW9kdWxlcy9DYXJvdXNlbCc7XG5cbmNvbnN0IGNhcm91c2VsQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCcpO1xuXG5jYXJvdXNlbENvbGxlY3Rpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRsZXQgY2Fyb3VzZWwgPSBuZXcgQ2Fyb3VzZWwoe1xuXHRcdGVsZW1lbnQ6IGl0ZW1cblx0fSk7XG5cdGNhcm91c2VsLnNldHVwKCk7XG59KTtcblxuXG4iLCJjbGFzcyBDYXJvdXNlbCB7XG5cdC8vIHNldCB1cCBpbnN0YW5jZSB2YXJpYWJsZXNcblx0Y29uc3RydWN0b3IgKG9wdGlvbnMpIHtcblx0XHRcblx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0dGhpcy5jYXJvdXNlbCA9IG9wdGlvbnMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpO1xuXHRcdHRoaXMuY2Fyb3VzZWxOYXYgPSBvcHRpb25zLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cdFx0dGhpcy5jYXJvdXNlbFNsaWRlcyA9IHRoaXMuY2Fyb3VzZWxbMF0uY2hpbGRyZW47XG5cdFx0dGhpcy5jYXJvdXNlbEhlaWdodCA9IDA7XG5cdFx0c2VsZiA9IHRoaXM7XG5cdH1cblxuXHRyZXNpemUgKCkge1xuXG5cdFx0QXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKCBzZWxmLmNhcm91c2VsU2xpZGVzLCAoIHNsaWRlICkgPT4ge1xuXHRcdFx0c2VsZi5jYXJvdXNlbEhlaWdodCA9IChzbGlkZS5vZmZzZXRIZWlnaHQgPiBzZWxmLmNhcm91c2VsSGVpZ2h0KSA/IHNsaWRlLm9mZnNldEhlaWdodCA6IHNlbGYuY2Fyb3VzZWxIZWlnaHQ7XG5cdFx0fSk7XG5cblxuXHRcdHNlbGYuY2Fyb3VzZWxbMF0uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuXG5cdFx0Ly9TZXQgdGhlIGhlaWdodCBvZiB0aGUgY2Fyb3VzZWwgdG8gdGhlIGhlaWdodCBvZiBpdHMgdGFsbGVzdCBzbGlkZVxuXHRcdHNlbGYuY2Fyb3VzZWxbMF0uc3R5bGUuaGVpZ2h0ID0gc2VsZi5jYXJvdXNlbEhlaWdodCsncHgnO1xuXG5cdFx0c2VsZi5jYXJvdXNlbEhlaWdodCA9IDA7XG5cblx0fVxuXHRcblx0XG5cdGdldEFjdGl2ZVNsaWRlICgpIHtcblx0XHRcblx0XHRsZXQgYWN0aXZlU2xpZGU7XG5cdFx0XG5cdFx0Ly9HZXQgY3VycmVudGx5IGFjdGl2ZSBzbGlkZSBcblx0XHRmb3IgKGxldCBzbGlkZSBvZiBzZWxmLmNhcm91c2VsWzBdLmNoaWxkcmVuKXtcblx0XHRcdFxuXHRcdFx0aWYgKCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID09PSB0cnVlICkge1xuXHRcdFx0XHRhY3RpdmVTbGlkZSA9IHNsaWRlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gYWN0aXZlU2xpZGU7XG5cdFx0XG5cdH1cblx0XG5cdGNoYW5nZVNsaWRlICgpIHtcblx0XHRcblx0XHRsZXQgYWN0aXZlU2xpZGUgPSBzZWxmLmdldEFjdGl2ZVNsaWRlKCksXG5cdFx0XHRkaXJlY3Rpb24gPSBudWxsLFxuXHRcdFx0bGFzdFNsaWRlID0gbnVsbCxcblx0XHRcdGZpcnN0U2xpZGUgPSBudWxsO1xuXHRcdFxuXHRcdGZvciAoIGxldCBzbGlkZSBvZiBzZWxmLmNhcm91c2VsU2xpZGVzKXtcblx0XHRcdHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXYnKSApIHtcblx0XHRcdGRpcmVjdGlvbiA9IFwicHJldmlvdXNcIjtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnbmV4dCcpICl7XG5cdFx0XHRkaXJlY3Rpb24gPSBcIm5leHRcIjtcblx0XHR9XG5cblx0XHRcblx0XHRpZiggZGlyZWN0aW9uID09PSAncHJldmlvdXMnICkge1xuXG5cdFx0XHRpZiggYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gbnVsbCl7XG5cdFx0XHRcdFxuXHRcdFx0XHRhY3RpdmVTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRsYXN0U2xpZGUgPSBzZWxmLmNhcm91c2VsWzBdLmNoaWxkcmVuW3NlbGYuY2Fyb3VzZWxbMF0uY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGxhc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnICkge1xuXHRcdFx0XG5cdFx0XHRpZiggYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBudWxsKXtcblx0XHRcdFx0XG5cdFx0XHRcdGFjdGl2ZVNsaWRlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcblx0XHRcdFx0Zmlyc3RTbGlkZSA9IHNlbGYuY2Fyb3VzZWxbMF0uY2hpbGRyZW5bMF07XG5cdFx0XHRcdGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdFxuXG5cdFx0XG5cdH1cblxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRzZXR1cCAoKSB7XG5cdFx0XG5cdFx0Ly8gUnVuIHRoZSByZXNpemUgZnVuY3Rpb24gdG8gZ2l2ZSB0aGUgY2Fyb3VzZWwgdGhlIGhlaWdodCBvZiBpdHMgdGFsbGVzdCBzbGlkZVxuXHRcdHNlbGYucmVzaXplKCk7XG5cblx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcblx0XHRcblx0XHQvLyBBZGQgYW4gYWN0aXZlIGNsYXNzIHRvIHRoZSBmaXJzdCBzbGlkZVxuXHRcdHNlbGYuY2Fyb3VzZWxTbGlkZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XG5cdFx0Ly8gT24gcmVzaXplIGFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBjYXJvdXNlbFxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgYnV0dG9uIG9mIHNlbGYuY2Fyb3VzZWxOYXYpe1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5jaGFuZ2VTbGlkZSk7XG5cdFx0fVxuXHRcdFxuXG5cdH1cbn1cblxuXG4vLyBQcml2YXRlIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsOyJdfQ==
