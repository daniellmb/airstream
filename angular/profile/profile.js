'use strict';

angular.module('AirStream.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['$scope', 'profile', function($scope, profile) {
    profile.get(function(data) {
        $scope.profile = data;
    });
}]);