'use strict';

/**
 * @ngdoc service
 * @name floggitWhiteboardApp: WhiteboardFactory
 * @description
 * # Whiteboard
 * Factory in the floggitWhiteboardApp.WhiteboardFactory
 */

angular.module('floggitWhiteboardApp').factory('WhiteboardFactory', function ($resource) {
	return $resource('http://localhost:8181/api/:id', {
		id: '@id'
	}, {
		'add': {
			method: 'POST'
		},
		'query': {
			method: 'GET',
			isArray: true
		},
		'get': {
			method: 'GET'
		}
	});
});