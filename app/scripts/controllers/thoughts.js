'use strict';

angular.module('thoulikeApp')
.controller('ThoughtsController', ['$scope', '$http', function($scope, $http) {
  $scope.people = [];
  $scope.lastSearch = '';

  $scope.findnshare = function() {
    if($scope.lastSearch !== $scope.thought) {
      $scope.people = [];

      $scope.lastSearch = $scope.thought;

      var request = $http({
        method: 'get',
        url: 'http://localhost:3000/thoughts/findnshare/' + $scope.thought,
        headers: { 'X-User-Token': '-ixFszgyU8zC8vVa1Xs2', 'X-User-Email': 'dominik2cucu@gmail.com' },
      });

      return(request.then($scope.handleSuccess, $scope.handleError));
    }
    return null;
  };

  $scope.handleSuccess = function(response) {
    $scope.people = response.data;
  };

  $scope.handleError = function(response) {
  };
}]);

function showing(from, to, element, done, animateHeight, noAutoHeight) {
  jQuery(element).css({
    opacity: from && 1,
    height: (animateHeight ? from : undefined)
  });
  jQuery(element).animate({
    opacity: to && 1,
    height: (animateHeight ? to : undefined)
  }, 1000, function() {
    if(animateHeight && !noAutoHeight && to !== 0) {
      jQuery(element).css('height', 'auto');
    }
    done();
  });
}

var ANIMATE_HEIGHT = true;
var NO_AUTO_HEIGHT = true;

angular.module('thoulikeApp')
.animation('.welcome', function() {
  return {
    enter: function(element, done) {
      showing(0, element.css('height', 'auto').height(), element, done, ANIMATE_HEIGHT);
    },
    leave: function(element, done) {
      showing(element.height(), 0, element, done, ANIMATE_HEIGHT);
    }
  };
});

angular.module('thoulikeApp')
.animation('.person', function() {
  return {
    enter: function(element, done) {
      showing(0, 1, element, done);
    },
    leave: function(element, done) {
      showing(1, 0, element, done);
    }
  };
});

angular.module('thoulikeApp')
.animation('.people', function() {
  return {
    enter: function(element, done) {
      showing(0, element.height(), element, done, ANIMATE_HEIGHT, NO_AUTO_HEIGHT);
    },
    leave: function(element, done) {
      showing(element.height(), 0, element, done, ANIMATE_HEIGHT, NO_AUTO_HEIGHT);
    }
  };
});

angular.module('thoulikeApp')
.animation('.viewAnimation', function() {
  return {
    enter: function(element, done) {
      showing(0, element.css('height', 'auto').height(), element, done, ANIMATE_HEIGHT);
    },
    leave: function(element, done) {
      showing(element.height(), 0, element, done, ANIMATE_HEIGHT);
    }
  };
});
