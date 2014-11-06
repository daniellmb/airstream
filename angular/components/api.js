angular.module('AirStream.api', ['ngResource'])
    .factory('feed', function($resource) {
        return $resource('/airstream/data/feed.json');
    })
    .factory('profile', function($resource) {
        return $resource('/airstream/data/profile.json');
    });