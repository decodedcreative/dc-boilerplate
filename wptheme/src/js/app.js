var
	ssm = require('simplestatemanager')(window),
	$ = require('jquery'),
	attachFastClick = require('fastclick');

	attachFastClick(document.body);

	$(window).load(function(){
		console.log("test");
	});