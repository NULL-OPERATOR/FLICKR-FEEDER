'use strict';
angular.module('imgApp.services')

.factory('Flickr', function($http) {
  var Flickr = function() {
    this.images = [];
    this.busy = false;
    this.after = '';
    this.idList = []
  };

Flickr.prototype.addID = function(image) {
  this.idList.push(image.author_id);
};

Flickr.prototype.addImage = function(image) {
  this.images.push(image);
};

Flickr.prototype.hasID = function(image) {
  return this.idList.includes(image.author_id);
};

Flickr.prototype.addNewImages = function(images) {
  for (var i = 0; i < images.length; i++) {
    var image = images[i]
    if( this.hasID(image) ) {
      continue;
    } else {
      this.addImage(image);
      this.addID(image)
    };
  }
};

Flickr.prototype.nextLoad = function() {
  if (this.busy) return;
  this.busy = true;
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?after=" + this.after + "&format=json&jsoncallback=JSON_CALLBACK";

  $http.jsonp(url).success(function(data) {
    this.addNewImages(data.items)
    this.after = "t3_" + this.images[this.images.length - 1].author_id;
    this.busy = false;
  }.bind(this));
};

return Flickr;
});
