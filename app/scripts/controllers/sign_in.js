'use strict';

angular.module('thoulikeApp')
.controller('SignInController', ['$scope', '$http', 'localStorageService', '$location',
            function($scope, $http, localStorageService, $location) {
  $scope.email = '';
  $scope.password = '';

  $scope.sign_in = function() {
    var request = $http({
      method: 'post',
      url: 'http://localhost:3000/users/sign_in.json',
      data: { 'user': { 'email': $scope.email, 'password': $scope.password } }
    });

    return(request.then($scope.handleSuccess, $scope.handleError));
  };

  $scope.handleSuccess = function(response) {
    $scope.saveToken(response.data.authentication_token);
    $location.path('/');
  };

  $scope.handleError = function(response) {
  };

  $scope.saveToken = function(token) {
    localStorageService.set('turboburbo', token);
  };
}]);
