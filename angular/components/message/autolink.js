/**
 * @file
 *
 * ### Responsibilities
 * This filter takes the given input string and automatically links the following:
 * - mentions
 * - hashtags
 *
 * @module AirStream.message.autolink
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */

angular.module('AirStream.message.autolink', []).filter('autolink', [function () {
  var link = '<a href="http://airstream.com/$1">$1</a>',
      list = [/\B(@[\w]*)/g, /\B(#[\w]*)/g];

  return function (text) {
    angular.forEach(list, function (regex) {
      text = text.replace(regex, link);
    });
    return text;
  };
}]);