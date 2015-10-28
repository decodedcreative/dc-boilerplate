var $ = require('jquery'),
	ssm = require('simplestatemanager'),
	vivas = require('vivus'),
	clientname = {};

clientname.website = (function(){
	var
	onEnterXs =	function(){
		console.log("Entering the world of xs");
	},

	onEnterSm = function(){
		console.log("Entering the world of sm");
	},

	onEnterMd = function(){
		console.log("Entering the world of md");
	},

	onEnterLg = function(){
		console.log("Entering the world of lg");
	};

	return{
		init: function(){
			// ssm.addState({
			//     id: 'xs',
			//     query: '(max-width: 767px)',
			//     onEnter: onEnterXs
			// });
			// ssm.addState({
			//     id: 'sm',
			//     query: '(min-width: 768px) and (max-width:991px)',
			//     onEnter: onEnterSm
			// });
			// ssm.addState({
			//     id: 'md',
			//     query: '(min-width: 992px) and (max-width:1199px)',
			//     onEnter: onEnterMd
			// });
			// ssm.addState({
			//     id: 'md',
			//     query: '(min-width: 1200px)',
			//     onEnter: onEnterLg
			// });
		}
	};
})();
$(window).load(clientname.website.init);
