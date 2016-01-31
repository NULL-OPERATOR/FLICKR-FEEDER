'use strict';

var imgApp = angular.module('imgApp', [
  'ngRoute',
  'imgApp.controllers',
  'imgApp.animations',
  'imgApp.services',
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
