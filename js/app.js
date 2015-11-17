var
clientname = {},
$ = require('jquery'),
placeholder = require('jquery-placeholder'),
ssm = require('simplestatemanager')(window),
wowjs = require('wow'),
attachFastClick = require('fastclick');
attachFastClick(document.body);

clientname.website = (function(){
  var
  onEnterMobile = function(){
  	console.log("mobile");
  },

  onEnterDesktop = function(){
  	console.log("desktop");
  },

  setupPlaceholderPolyfill = function(){
	
	//-- Initialise JQuery Placeholder -------------------------------------
	//----------------------------------------------------------------------
	$('input, textarea').placeholder();
	//----------------------------------------------------------------------

  },

  setupOnScrollAnimations = function(){

	wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset: 0,	// default
		mobile: true,	// default
		live: true	// default
    });

    wow.init();

  },

  initPlugins = function(){
  	setupPlaceholderPolyfill();
  	setupOnScrollAnimations();
  };

  return{
    init: function(){

    	//-- Set up breakpoints for mobile and desktop in the javascript--------
		//----------------------------------------------------------------------

		ssm.addState({
			id: 'mobile',
			query: '(max-width: 667px)',
			onEnter: onEnterMobile
		});

		ssm.addState({
			id: 'desktop',
			query: '(min-width: 668px)',
			onEnter: onEnterDesktop
		});

		//----------------------------------------------------------------------

		initPlugins();

    }
  };
}());

$(window).load(clientname.website.init);
