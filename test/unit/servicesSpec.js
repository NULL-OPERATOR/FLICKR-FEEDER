'use strict';


describe('services', function() {
    var $httpBackend;

    beforeEach(module('imgApp.services'));

    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    it('should return flickr json', inject(function(geoProvider){
        $httpBackend.expectGET('yoururl').respond({/* the response object */});

        var data = geoProvider.counties.query();

        $httpBackend.flush();

        expect(data).toBe(some);
    }));
});
