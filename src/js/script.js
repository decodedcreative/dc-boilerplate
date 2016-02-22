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
	};

    return {
        common: common,
        myFirstMethod: myFirstMethod,

        init: function(){

			ssm.addState({
				id: 'XS',
				query: '(max-width: 553px)',
				onEnter: function(){
					console.log("Entering XS");
				}
			});

			ssm.addState({
				id: 'SM',
				query: '(min-width: 554px)',
				onEnter: function(){
					console.log("Entering SM");
				}
			});

			ssm.addState({
				id: 'MD',
				query: '(min-width: 768px)',
				onEnter: function(){
					console.log("Entering MD");
				}
			});

			ssm.addState({
				id: 'LG',
				query: '(min-width: 992px)',
				onEnter: function(){
					console.log("Entering LG");
				}
			});

			ssm.addState({
				id: 'XL',
				query: '(min-width: 1200px)',
				onEnter: function(){
					console.log("Entering XL");
				}
			});

        }
    };
})();


$(window).load(clientname.website.init);