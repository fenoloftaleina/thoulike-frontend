'use strict';

angular.module('thoulikeApp')
.controller('SignInController', ['$scope', '$http', function($scope, $http) {
  $scope.email = '';
  $scope.password = '';
}]);
