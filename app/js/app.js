'use strict';

var imgApp = angular.module('imgApp', ['ngRoute','imgApp.controllers']);

imgApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/images.html',
        controller: 'ImgViewerCtrl'
      });
  }]);
