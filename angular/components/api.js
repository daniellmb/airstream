angular.module('AirStream.api', ['ngResource'])
    .factory('feed', function($resource) {
        return $resource('/data/feed.json');
    })
    .factory('profile', function($resource) {
        return $resource('/data/profile.json');
    });