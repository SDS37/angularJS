'use strict';

/**
 * @ngdoc directive
 * @name floggitWhiteboardApp.directive:flPostIt
 * @description
 * # flPostIt
 */
angular.module('floggitWhiteboardApp')
	.directive('flPostIt', function () {
		return {
			template: '<div ui-sortable ng-model="postIts" class="row">' +
				'<div class="post-it-container" ng-repeat="postIt in postIts | filter:byCurrentWhiteboard" ng-style="{&#39;background-color&#39;:postIt.color}" style="cursor: move;">' +
				'<div class="post-it-info">' +
				'<h4>Subject:</h4> {{ postIt.subject }}</br>' +
				'<h4>Info:</h4> {{ postIt.info }}</br>' +
				'</div>' +
				'<div class="post-it-options">' +
				'<div class="post-it-option">' +
				'<a class="btn btn-danger" ng-click="removePostIt(postIt)"><span class="glyphicon glyphicon-remove"></span></a>' +
				'</div>' +
				'<div class="post-it-option">' +
				'<a class="btn btn-default" ng-href="#/{{ whiteboardSelected.id }}/edit-post-it/{{ postIt.id }}"><span class="glyphicon glyphicon-pencil"></span></a>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>',
			restrict: 'E'
		};
	});