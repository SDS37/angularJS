'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flWhiteboardForm
 * @description
 * # flWhiteboardForm
 */
angular.module('floggitWhiteboardApp')
	.directive('flWhiteboardForm', function () {
		return {
			template: '<form name="whiteboardForm" ng-submit="createWhiteboard()">' +
				'<div class="form-group">' +
				'<label for="wbName">Name</label>' +
				'<input name="wbName" type="text" ng-model="whiteboard.wbName" class="form-control" placeholder ="Name"/>' +
				'</div>' +
				'<div class="form-group">' +
				'<label for="wbAbout">Info</label>' +
				'<input name="wbAbout" type="text" ng-model="whiteboard.wbAbout" class="form-control" placeholder ="About"/>' +
				'</div>' +
				'<div class="form-group">' +
				'<div><input type="submit" ng-click="dateCreated(whiteboard)" class="btn btn-primary" value="Submit"/></div>' +
				'</div>' +
				'</form>',
			restrict: 'E',
			controller: function ($scope) {
				$scope.dateCreated = function (whiteboard) {
					whiteboard.wbDate = new Date().getTime();
					return whiteboard.wbDate;
				};
			}
		};
	});