'use strict';

/**
 * @ngdoc overview
 * @name floggitWhiteboardApp
 * @description
 * # floggitWhiteboardApp
 *
 * Main module of the application.
 */
angular
  .module('floggitWhiteboardApp', [
    'floggitWhiteboardApp.wbControllers',
    'floggitWhiteboardApp.piControllers',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posting-default-data', {
        templateUrl: 'views/posting-default-data.html',
        controller: 'MainCtrl'
      })
      .when('/select-whiteboard', {
        templateUrl: 'views/select-whiteboard.html',
        controller: 'GetWhiteboardsCtrl'
      })
      .when('/add-whiteboard', {
        templateUrl: 'views/add-whiteboard.html',
        controller: 'CreateWhiteboardCtrl'
      })
      .when('/whiteboard/:id', {
        templateUrl: 'views/whiteboard.html',
        controller: 'GetWhiteboardCtrl'
      })
      .when('/:id/add-post-it', {
        templateUrl: 'views/add-post-it.html',
        controller: 'CreatePostItCtrl'
      })
      .when('/:wid/edit-post-it/:pid', {
        templateUrl: 'views/edit-post-it.html',
        controller: 'EditPostItCtrl'
      })
      .otherwise({
        redirectTo: '/posting-default-data'
      });
  });