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
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  })
  .when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsController'
  })
  .when('/sign_in', {
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
  .otherwise({
    redirectTo: '/'
  });
});
