'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flWbPostItForm
 * @description
 * # flWbPostItForm
 */
angular.module('floggitWhiteboardApp')
	.directive('flWbPostItForm', function () {
		return {
			template: '<div class="form-group">' +
				'<label for="subject">Subject</label>' +
				'<input name="subject" type="text" ng-model="postIt.subject" class="form-control" placeholder ="Subject"/>' +
				'</div>' +
				'<div class="form-group">' +
				'<label for="info">Info</label>' +
				'<input name="info" type="textbox" ng-model="postIt.info" class="form-control" placeholder ="Info"/>' +
				'</div>' +
				'<div>' +
				'<label>Color</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="red" /> red' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="yellow" /> yellow' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="blue" /> blue' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="green" /> green' +
				'</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<div><input type="submit" ng-click="currentWhiteboard(postIt)" class="btn btn-primary" value="Submit"/></div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope) {
				$scope.currentWhiteboard = function (postIt) {
					postIt.wbName = $scope.whiteboardSelected.wbName;
					return postIt.wbName;
				};
			}
		};
	});