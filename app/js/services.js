'use strict';
(function() {
  function Flickr ($http) {
    var Flickr = {};
    this.images = [];
    this.busy = false;
    this.after = '';
    this.idList = []

    self.nextLoad = function() {
      if (this.busy) return;
      this.busy = true;
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?after=" + this.after + "&format=json&jsoncallback=JSON_CALLBACK";

      $http.jsonp(url).success(function(data) {
        this._addNewImages(data.items)
        this.after = "t3_" + this.images[this.images.length - 1].author_id;
        this.busy = false;
      }.bind(this));
    };

    self._addNewImages = function(images) {
      for (var i = 0; i < images.length; i++) {
        var image = images[i]
        if( this._hasID(image) ) {
          continue;
        } else {
          this._addImage(image);
          this._addID(image)
        };
      }
    };

    self._addID = function(image) {
      this.idList.push(image.author_id);
    };

    self._addImage = function(image) {
      this.images.push(image);
    };

    self._hasID = function(image) {
      return this.idList.includes(image.author_id);
    };

    return Flickr;
  };
angular
  .module('imgApp')
  .factory('Flickr', ['$http', DiscountsService]);
})();
