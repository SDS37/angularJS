'use strict';

/**
 * @ngdoc function
 * @name floggitWhiteboardApp.wbControllers: MainCtrl
 * @name floggitWhiteboardApp.wbControllers: GetWhiteboardsCtrl
 * @name floggitWhiteboardApp.wbControllers: CreateWhiteboardCtrl
 * @name floggitWhiteboardApp.wbControllers: GetWhiteboardCtrl
 * @description
 * # MainCtrl
 * # GetWhiteboardsCtrl
 * # CreateWhiteboardCtrl
 * # GetWhiteboardCtrl
 * Controllers of the floggitWhiteboardApp.wbControllers
 */
angular.module('floggitWhiteboardApp.wbControllers', [])
//Posts default data
.controller('MainCtrl', function ($scope, $location, DefaultData, WhiteboardFactory) {

	var defaultData = DefaultData.getAllData();

	for (var i = 0; i < defaultData.length; i = i + 1) {

		var defaultWhiteboard = new WhiteboardFactory();

		defaultWhiteboard.wbDate = new Date().getTime();
		defaultWhiteboard.wbName = defaultData[i].wbName;
		defaultWhiteboard.wbAbout = defaultData[i].wbAbout;

		defaultWhiteboard.$add();

		defaultWhiteboard = [];
	}

	$location.path('/select-whiteboard');

})
//Gets all whiteboards from the server
.controller('GetWhiteboardsCtrl', function ($scope, WhiteboardFactory) {

	$scope.whiteboards = WhiteboardFactory.query();

})
//Creates a whiteboard in the server
.controller('CreateWhiteboardCtrl', function ($scope, $location, WhiteboardFactory) {

	$scope.whiteboard = new WhiteboardFactory();

	$scope.createWhiteboard = function () {
		$scope.whiteboard.$add(function () {
			$location.path('/select-whiteboard');
		});
	};

})
//Gets a single whiteboard from the server and all the post-its related to it
.controller('GetWhiteboardCtrl', function ($scope, $routeParams, WhiteboardFactory, PostItFactory) {

	var wbSelected = $scope.whiteboardSelected = WhiteboardFactory.get({
		id: $routeParams.id
	});

	//Gets the post-its from the server
	$scope.postIts = PostItFactory.query();

	//Filters the post-its by the whiteboards' names
	$scope.byCurrentWhiteboard = function (postIt) {
		if (postIt.wbName === wbSelected.wbName) {
			return true;
		}
	};

	//Removes the selected post-it
	$scope.removePostIt = function (postItToDelete) {

		postItToDelete.$remove(function () {
			$scope.postIts = PostItFactory.query();
			console.log('deleted');
		});

	};

});