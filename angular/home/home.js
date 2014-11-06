'use strict';

angular.module('AirStream.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'feed', function($scope, feed) {
    feed.query(function(data) {
        $scope.feed = data;
    });
}]);