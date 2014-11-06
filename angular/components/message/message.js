'use strict';

angular.module('AirStream.message', [
    'AirStream.message.autolink',
    'yaru22.angular-timeago'
])
.run(['timeAgo', function(timeAgo) {
    // configure time ago
    angular.extend(timeAgo.settings, {
      refreshMillis: 30000,
      strings: {
        'en_US': {
          suffixAgo: '',
          seconds: '%ds',
          minute: '%dm',
          minutes: '%dm',
          hour: '%dh',
          hours: '%dh',
          day: '%dd',
          days: '%dd',
          month: '%dmo',
          months: '%dmo',
          year: '%dyr',
          years: '%dyr'
        }
      }
    })
  }]);