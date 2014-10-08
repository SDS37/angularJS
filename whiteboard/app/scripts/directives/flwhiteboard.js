'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flWhiteboard
 * @description
 * # flWhiteboard
 */
angular.module('floggitWhiteboardApp')
	.directive('flWhiteboard', function () {
		return {
			template: '<div ui-sortable ng-model="whiteboards" class="row">' +
				'<div class="whiteboard-container" ng-repeat="whiteboard in whiteboards | filter:{ wbName:query }" style="cursor: move;">' +
				'<div class="whiteboard-info">' +
				'<h4>Whiteboard:</h4>' +
				'<a ng-href="#/whiteboard/{{ whiteboard.id }}" style="cursor:pointer;">{{ whiteboard.wbName }}</a>' +
				'<h4>About:</h4>' +
				'{{ whiteboard.wbAbout }}</br>' +
				'<h4>Date created:</h4>' +
				'{{ whiteboard.wbDate | date:"MM/dd/yyyy &#39;at&#39; h:mma" }}</br>' +
				'</div>' +
				'<div class="whiteboard-options">' +
				'<div class="whiteboard-option">' +
				'<a class="btn btn-default" ng-href="#/whiteboard/{{ whiteboard.id }}"><span class="glyphicon glyphicon-ok"></span> SELECT</a>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>',
			restrict: 'E',
		};
	});