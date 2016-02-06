'use strict';
(function() {
  function FlickrService ($http) {
    var FlickrService = {};
    var self = FlickrService;
    self.images = [];
    self.busy = false;
    self.after = '';
    self.idList = []

    self.nextLoad = function() {
      if (self.busy) return;
      self.busy = true;
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?after=" + self.after + "&format=json&jsoncallback=JSON_CALLBACK";

      $http.jsonp(url).success(function(data) {
        self._addNewImages(data.items)
        self.after = "t3_" + self.images[self.images.length - 1].author_id;
        self.busy = false;
      }.bind(self));
    };

    self._addNewImages = function(images) {
      for (var i = 0; i < images.length; i++) {
        var image = images[i]
        if( self._hasID(image) ) {
          continue;
        } else {
          self._addImage(image);
          self._addID(image)
        };
      }
    };

    self._addID = function(image) {
      self.idList.push(image.author_id);
    };

    self._addImage = function(image) {
      self.images.push(image);
    };

    self._hasID = function(image) {
      return self.idList.includes(image.author_id);
    };

    return FlickrService;
  }
  angular
    .module('imgApp')
    .factory('FlickrService', ['$http', FlickrService]);
})();
