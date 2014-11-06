angular.module('AirStream.posts', ['AirStream.message'])
.directive('posts', [
  function() {
    return {
      templateUrl: 'components/posts/posts.html',
      restrict: 'C',
      require: 'ngModel',
      scope: {
        feed: '=ngModel'
      }
    };
  }
]);