'use strict';
// 'imgApp.services'
var imgApp = angular.module('imgApp', []);

imgApp.controller('ImgViewerCtrl', ["$scope", "$http",
  function($scope, $http) {

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK"
    // var url = 'test/test.json'
    $http.jsonp(url)
      .success(function(feed){
        $scope.images = feed.items;
     });

    $scope.nameFilter = function(user) {
       return user;//.replace(/[A-Z]\w+/g, "");
    };

    $scope.imgOrder = '';
}]);
