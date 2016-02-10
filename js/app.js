var
clientname = window.clientname = window.clientname || {},
$ = require('jquery'),
ssm = require('simplestatemanager')(window),
attachFastClick = require('fastclick');
attachFastClick(document.body);


clientname.website = (function () {
	var
	common = {
		variableOne: 'var1'
	},

	myFirstMethod = function(){
		console.log(common.variableOne);
	},

	onEnterDesktop = function(){
		console.log("Entered Desktop State");
	},

	onEnterMobile =  function(){
		console.log("Entered Mobile State");
	};

    return {
        common: common,
        myFirstMethod: myFirstMethod,

        init: function(){

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
        }
    };
})();


$(window).load(clientname.website.init);