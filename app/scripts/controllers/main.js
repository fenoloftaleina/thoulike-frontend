'use strict';

angular.module('thoulikeApp')
.controller('MainController', function ($scope) {
  $scope.animate = function() {
    setTimeout(function() {
      $scope.animate = true;
    }, 1000);
    return false;
  }();
});
