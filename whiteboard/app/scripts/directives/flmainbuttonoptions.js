'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flMainButtonOptions
 * @description
 * # flMainButtonOptions
 */
angular.module('floggitWhiteboardApp')
	.directive('flMainButtonOptions', function () {
		return {
			template: '<ul class="nav nav-pills pull-right">' +
				'<li class="active"><a ng-href="#/select-whiteboard">Select a whiteboard</a></li>' +
				'<li><a ng-href="#/add-whiteboard"><span class="glyphicon glyphicon-plus"></span> New whiteboard</a></li>' +
				'</ul>',
			restrict: 'E'
		};
	});