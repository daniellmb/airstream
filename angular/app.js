'use strict';

// Declare app level module which depends on views, and components
angular.module('AirStream', [
  // angular extensions
  'ngRoute',
  'ngSanitize',
  // airstream
  'AirStream.api',
  // pages
  'AirStream.about',
  'AirStream.home',
  'AirStream.profile',
  // components
  'AirStream.posts'
])
.config(['$routeProvider', function($routeProvider) {
  // configure routing
  $routeProvider.otherwise({redirectTo: '/home'});
}]);