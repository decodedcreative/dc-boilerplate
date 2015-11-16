var
clientname = {},
$ = require("jquery"),
placeholder = require("jquery-placeholder"),
ssm = require('simplestatemanager')(window),
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

  initPlugins = function(){

	//-- Initialise JQuery Placeholder -------------------------------------
	//----------------------------------------------------------------------
	$('input, textarea').placeholder();
	//----------------------------------------------------------------------

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
