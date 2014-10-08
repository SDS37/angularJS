'use strict';

/**
 * @ngdoc function
 * @name floggitWhiteboardApp.piControllers: CreatePostItCtrl
 * @name floggitWhiteboardApp.piControllers: EditPostItCtrl
 * @description
 * # CreatePostItCtrl
 * # EditPostItCtrl
 * Controllers of the floggitWhiteboardApp.piControllers
 */

angular.module('floggitWhiteboardApp.piControllers', [])
//Creates a postit in the server
.controller('CreatePostItCtrl', function ($scope, $routeParams, $location, WhiteboardFactory, PostItFactory) {

	$scope.postIt = new PostItFactory();

	var whiteboard = $scope.whiteboardSelected = WhiteboardFactory.get({
		id: $routeParams.id
	});

	$scope.createPostIt = function () {
		$scope.postIt.$add(function () {
			console.log(whiteboard.id);
			$location.path('/whiteboard/' + whiteboard.id);
		});
	};

}).
//Edits a postit in the server
controller('EditPostItCtrl', function ($scope, $routeParams, $location, WhiteboardFactory, PostItFactory) {

	$scope.postItEdit = PostItFactory.get({
		id: $routeParams.pid
	});

	var whiteboard = $scope.whiteboardSelected = WhiteboardFactory.get({
		id: $routeParams.wid
	});

	$scope.updatePostIt = function () {

		$scope.postItEdit.$edit(function () {
			console.log('Done!');
			$location.path('/whiteboard/' + whiteboard.id);
		});
	};

});