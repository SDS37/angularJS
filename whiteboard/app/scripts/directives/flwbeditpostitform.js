'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flWbEditPostItForm
 * @description
 * # flWbEditPostItForm
 */
angular.module('floggitWhiteboardApp')
	.directive('flWbEditPostItForm', function () {
		return {
			template: '<div class="form-group">' +
				'<label for="subject">Subject</label>' +
				'<input name="subject" type="text" ng-model="postItEdit.subject" class="form-control" placeholder ="Subject"/>' +
				'</div>' +
				'<div class="form-group">' +
				'<label for="info">Info</label>' +
				'<input name="info" type="textbox" ng-model="postItEdit.info" class="form-control" placeholder ="Info"/>' +
				'</div>' +
				'<div>' +
				'<label>Color</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postItEdit.color" value="red" /> red' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postItEdit.color" value="yellow" /> yellow' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postItEdit.color" value="blue" /> blue' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postItEdit.color" value="green" /> green' +
				'</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<div><input type="submit" ng-click="currentWhiteboard()" class="btn btn-primary" value="Submit"/></div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope) {
				$scope.currentWhiteboard = function () {
					return $scope.whiteboardSelected.wbName;
				};
			}
		};
	});