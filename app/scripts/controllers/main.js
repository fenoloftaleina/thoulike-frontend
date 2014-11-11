'use strict';

angular.module('thoulikeApp')
.controller('MainController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.animate = (function() {
    $timeout(function() {
      $scope.animate = true;
    }, 1000);
    return false;
  }());
}]);
