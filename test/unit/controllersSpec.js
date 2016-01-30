'use strict';

describe('imgApp controller', function() {

  describe('ImgViewerCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('imgApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK"

      $httpBackend.expectJSONP(url)
        .respond( {"items": [{"title": "upload"}]} )

      scope = $rootScope.$new();
      ctrl = $controller('ImgViewerCtrl', {$scope: scope});
    }));

    it('should get json and pull the image array out', function() {
      expect(scope.images).toBeUndefined();
      $httpBackend.flush();

      expect(scope.images).toEqual([{"title": "upload"}]);
    });

    it('should set the default value of orderProp model', function() {
      expect(scope.imgOrder).toBe('');
    });
  });
});
