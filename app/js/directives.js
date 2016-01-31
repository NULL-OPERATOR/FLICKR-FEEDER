'use strict';
angular.module('imgApp.directives', [])
.directive('dragMe', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attr, ctrl) {
			elem.draggable();
		}
	};
});
