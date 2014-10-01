'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */

angular.module('thoulikeApp')
.controller('ThoughtsController', ['$scope', '$http', function($scope, $http) {
  $scope.people = [];
  $scope.noSearches = true;

  $scope.findnshare = function() {
    $scope.noSearches = false;
    $scope.people = [];
    setTimeout(function() {
      var request = $http({
        method: 'get',
        url: 'http://localhost:3000/thoughts/findnshare/' + $scope.thought,
        headers: { 'X-User-Token': '-ixFszgyU8zC8vVa1Xs2', 'X-User-Email': 'dominik2cucu@gmail.com' },
      });

      return(request.then($scope.handleSuccess, $scope.handleError));
    }, 1000);
  };

  $scope.handleSuccess = function(response) {
    $scope.people = response.data;
  };

  $scope.handleError = function(response) {
  };
}]);

function showing(from, to, element, done, height) {
  jQuery(element).css({
    opacity: from && 1,
    height: (height ? from : undefined)
  });
  jQuery(element).animate({
    opacity: to && 1,
    height: (height ? to : undefined)
  }, 1000, done);
}

angular.module('thoulikeApp')
.animation('.welcome', function() {
  return {
    enter: function(element, done) {
      showing(0, element.css('height', 'auto').height(), element, done);
    },
    leave: function(element, done) {
      showing(element.height(), 0, element, done);
    }
  };
});

angular.module('thoulikeApp')
.animation('.person', function() {
  return {
    enter: function(element, done) {
      showing(0, element.css('height', 'auto').height(), element, done);
    },
    leave: function(element, done) {
      showing(element.height(), 0, element, done);
    }
  };
});

