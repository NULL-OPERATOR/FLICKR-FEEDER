'use strict';
(function () {
  function MainCtrl (Flickr) {
    var self = this;

    self.flickr = new Flickr();
    self.imgOrder = '';

    self..nameFilter = function(user) {
      var to_del = user.replace(/ *\([^)]*\) */g, "");
      return user.replace(to_del, "");
    };

  }
angular
  .module('imgApp')
  .controller('MainCtrl',['Flickr', MainCtrl]);
})();
