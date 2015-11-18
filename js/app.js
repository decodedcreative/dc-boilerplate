var angular = require('angular'),
	uibs = require('angular-ui-bootstrap');

	angular.module('myFancyApp', [uibs]).controller('CollapseDemoCtrl', ["$scope", function ($scope) {
		$scope.isCollapsed = false;
	}]);





