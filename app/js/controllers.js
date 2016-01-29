'use strict';
// 'imgApp.services'
var imgApp = angular.module('imgApp', []);

imgApp.controller('ImgViewerCtrl',  function($scope) {
  // var data = return $resource('https://api.flickr.com/services/feeds/photos_public.gne?format=json;')
  // var data = $resource('https://api.flickr.com/services/feeds/photos_public.gne?format=json', {}, {
  //   query: { method: 'GET', isArray: true }
  // });

  // console.log(data.query())

  $scope.imgOrder = '';

  var data = {
    "title": "Uploads from everyone",
    "link": "https://www.flickr.com/photos/",
    "description": "",
    "modified": "2016-01-29T14:47:43Z",
    "generator": "https://www.flickr.com/",
    "items": [
      {
      "title": "_IGP8698.jpg",
      "link": "https://www.flickr.com/photos/andreakirkby/24060963634/",
      "media": {"m":"https://farm2.staticflickr.com/1684/24060963634_9d7483301b_m.jpg"},
      "date_taken": "2016-01-29T15:47:43-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/andreakirkby/\">Andrea Kirkby<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/andreakirkby/24060963634/\" title=\"_IGP8698.jpg\"><img src=\"https://farm2.staticflickr.com/1684/24060963634_9d7483301b_m.jpg\" width=\"240\" height=\"159\" alt=\"_IGP8698.jpg\" /><\/a><\/p> ",
      "published": "2016-01-29T14:47:43Z",
      "author": "nobody@flickr.com (Andrea Kirkby)",
      "author_id": "12071889@N00",
      "tags": "portugal architecture gothic monastery batalha manueline"
      }, {
      "title": "100 pour un Hyakunin Manigod - 18",
      "link": "https://www.flickr.com/photos/barbery/24060963834/",
      "media": {"m":"https://farm2.staticflickr.com/1671/24060963834_8f4e13b2c2_m.jpg"},
      "date_taken": "2015-12-18T04:47:14-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/barbery/\">Stéphane Barbery<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/barbery/24060963834/\" title=\"100 pour un Hyakunin Manigod - 18\"><img src=\"https://farm2.staticflickr.com/1671/24060963834_8f4e13b2c2_m.jpg\" width=\"240\" height=\"180\" alt=\"100 pour un Hyakunin Manigod - 18\" /><\/a><\/p> ",
      "published": "2016-01-29T14:47:43Z",
      "author": "nobody@flickr.com (Stéphane Barbery)",
      "author_id": "77673826@N00",
      "tags": "portugal architecture gothic monastery batalha manueline"
      }, {
      "title": "#METZ 激ヤバ過ぎたしもう狂気の沙汰。初っぱなから“Headache”→“Get Off”という1st再現状態で頭のネジがどっか飛んでったよね😇",
      "link": "https://www.flickr.com/photos/ekatokyo/24062296003/",
      "media": {"m":"https://farm2.staticflickr.com/1524/24062296003_a0baa01c4e_m.jpg"},
      "date_taken": "2016-01-29T23:47:45-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/ekatokyo/\">ekatokyo<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/ekatokyo/24062296003/\" title=\"#METZ 激ヤバ過ぎたしもう狂気の沙汰。初っぱなから“Headache”→“Get Off”という1st再現状態で頭のネジがどっか飛んでったよね😇\"><img src=\"https://farm2.staticflickr.com/1524/24062296003_a0baa01c4e_m.jpg\" width=\"240\" height=\"225\" alt=\"#METZ 激ヤバ過ぎたしもう狂気の沙汰。初っぱなから“Headache”→“Get Off”という1st再現状態で頭のネジがどっか飛んでったよね😇\" /><\/a><\/p> ",
      "published": "2016-01-29T14:47:45Z",
      "author": "nobody@flickr.com (ekatokyo)",
      "author_id": "38166727@N02",
      "tags": "square squareformat perpetua iphoneography instagramapp uploaded:by=instagram foursquare:venue=4f560015e4b0861b32861f13"
      },
   ]};

  $scope.images = data.items
});
