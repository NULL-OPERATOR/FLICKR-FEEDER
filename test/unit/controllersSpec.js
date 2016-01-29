'use strict';

/* jasmine specs for controllers go here */
describe('Img controllers', function() {

  describe('ImgViewerCtrl', function(){
    var scope, ctrl;

    beforeEach(module('imgApp'));
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('ImgViewerCtrl', {$scope:scope});
    }));

    it('should create scope.images from json', inject(function($controller) {
      expect(scope.images.length).toBe(3);
    }));

    it('has an empty default search order', function() {
      expect(scope.imgOrder).toBe("");
    });

  });
});
