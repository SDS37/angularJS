'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flWbButtonOptions
 * @description
 * # flWbButtonOptions
 */
angular.module('floggitWhiteboardApp')
	.directive('flWbButtonOptions', function () {
		return {
			template: '<ul class="nav nav-pills pull-right">' +
				'<li><a ng-href="#/ {{ whiteboardSelected.id }}/add-post-it"><span class="glyphicon glyphicon-pushpin"></span> Add a post-it!</a></li>' +
				'</ul>',
			restrict: 'E'
		};
	});