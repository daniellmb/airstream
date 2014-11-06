'use strict';

angular.module('AirStream.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
    });
}])

.controller('AboutCtrl', ['$scope', function($scope) {

}]);