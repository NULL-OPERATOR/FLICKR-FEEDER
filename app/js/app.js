'use strict';
(function() {
  function config ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/images.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
  angular
    .module('imgApp', ['ngRoute', 'infinite-scroll'])
    .config(config);
})();
