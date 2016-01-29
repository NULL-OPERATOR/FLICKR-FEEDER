'use strict';

/* jasmine specs for controllers go here */
describe('Img controllers', function() {

  describe('ImgViewerCtrl', function(){

    beforeEach(module('imgApp'));

    it('should create $scope.images from json', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ImgViewerCtrl', {$scope:scope});
      expect(scope.phones.length).toBe(3);
    }));

  });
});
