'use strict';

/**
 * @ngdoc service
 * @name floggitWhiteboardApp: PostItFactory
 * @description
 * # PostItFactory
 * Factory in the floggitWhiteboardApp.PostItFactory
 */

angular.module('floggitWhiteboardApp').factory('PostItFactory', function ($resource) {
  return $resource('http://localhost:8282/api/:id', {
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
    },
    'edit': {
      method: 'PUT'
    },
    'remove': {
      method: 'DELETE'
    }
  });
});