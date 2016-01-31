'use strict';

var imgApp = angular.module('imgApp', [
  'ngRoute',
  'imgApp.controllers',
  'imgApp.services',
  'imgApp.directives',
  'infinite-scroll'
]);

imgApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/images.html',
        controller: 'ImgViewerCtrl'
      });
  }]);
