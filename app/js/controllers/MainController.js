'use strict';
(function () {
  function MainCtrl (FlickrService) {
    var self = this;
    self.nextLoad = FlickrService.nextLoad;
    self.busy = FlickrService.busy;
    self.images = FlickrService.images;
    self.imgOrder = '';

    self.nameFilter = function(user) {
      var to_del = user.replace(/ *\([^)]*\) */g, "");
      return user.replace(to_del, "");
    };

  }
  angular
    .module('imgApp')
    .controller('MainCtrl',['FlickrService', MainCtrl]);
})();
