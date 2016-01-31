'use strict';
angular.module('imgApp.services', [])

.factory('Flickr', function($http) {
  var Flickr = function() {
    this.images = [];
    this.busy = false;
    this.after = '';
  };

Flickr.prototype.nextPage = function() {
  if (this.busy) return;
  this.busy = true;

  var url = "http://api.flickr.com/services/feeds/photos_public.gne?after=" + this.after + "&format=json&jsoncallback=JSON_CALLBACK";
  console.log(url)
  $http.jsonp(url).success(function(data) {
    var images = data.items;
    for (var i = 0; i < images.length; i++) {
      console.log(images[i])
      this.images.push(images[i]);
    }

    this.after = "t3_" + this.images[this.images.length - 1].author_id;
    this.busy = false;
  }.bind(this));
};

return Flickr;
});
