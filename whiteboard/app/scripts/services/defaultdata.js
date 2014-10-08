'use strict';

/**
 * @ngdoc service
 * @name floggitWhiteboardApp.DefaultData
 * @description
 * # DefaultData
 * Factory in the floggitWhiteboardApp.
 */
angular.module('floggitWhiteboardApp').factory('DefaultData', function defaultDataFactory() {
  var data = [{
    "wbDate": "",
    "wbName": "Sales",
    "wbAbout": "Lorem ipsum dolor sit amet, eos facer voluptua vulputate ut, ea vis doming eripuit petentium.",
  }, {
    "wbDate": "",
    "wbName": "Accountancy",
    "wbAbout": "Accountancy info",
  }];
  return {
    getAllData: function () {
      return data;
    }
  };
});