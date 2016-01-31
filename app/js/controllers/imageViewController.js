'use strict';
angular.module('imgApp.controllers')
.controller('ImgViewerCtrl', ["$scope", "$http", "Flickr",
  function($scope, $http, Flickr) {

    $scope.flickr = new Flickr();
    $scope.imgOrder = '';

    $scope.nameFilter = function(user) {
      var to_del = user.replace(/ *\([^)]*\) */g, "");
      return user.replace(to_del, "");//.replace(/[A-Z]\w+/g, "");
    };


}]);
