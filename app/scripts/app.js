'use strict';

/**
 * @ngdoc overview
 * @name thoulikeApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular.module('thoulikeApp', ['ngAnimate', 'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/thoughts.html',
    controller: 'ThoughtsController'
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'SettingsController'
  })
  .when('/log_in', {
    templateUrl: 'views/sign_in.html',
    controller: 'SignInController'
  })
  .when('/confirm', {
    templateUrl: 'views/confirm.html',
    controller: 'ConfirmController'
  })
  .when('/reset', {
    templateUrl: 'views/reset.html',
    controller: 'ResetController'
  })
  .when('/cancel', {
    templateUrl: 'views/cancel.html',
    controller: 'CancelController'
  })
  .when('/connect', {
    templateUrl: 'views/connect.html',
    controller: 'ConnectController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
