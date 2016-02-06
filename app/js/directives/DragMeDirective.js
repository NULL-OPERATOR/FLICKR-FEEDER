'use strict';
(function() {
  function dragMe () {
  	return {
  		restrict: 'A',
  		link: function(scope, elem, attr, ctrl) {
  			elem.draggable();
  		}
  	};
  }
	angular
	  .module('imgApp')
	  .directive('dragMe', dragMe);
})();
