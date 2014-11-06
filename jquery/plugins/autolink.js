(function ($) {
  var link = '<a href="http://airstream.com/$1">$1</a>',
      list = [/\B(@[\w]*)/g, /\B(#[\w]*)/g];
  $.fn.autolink = function () {
    return this.each(function () {
      var elm = $(this);
      $.each(list, function (i, regex) {
        elm.html(elm.html().replace(regex, link));
      });
    });
  };
})(jQuery);