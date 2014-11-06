(function ($) {

  // define a new Sammy.Application bound to the #main element selector
  var app = $.sammy('#main', function () {

    var view = this.$element();

    // use Mustache templates
    this.use('Mustache', 'html');

    // configure helpers
    function autolink() {
      // auto link post contents
      return $('.message', view).autolink();
    }
    function timeago() {
      // run time ago on the post date
      return $('.time-ago', view).timeago();
    }

    // configure the jquery time ago plugin
    $.extend($.timeago.settings, {
      refreshMillis: 30000,
      strings: {
        suffixAgo: '',
        seconds: "%ds",
        minute: "%dm",
        minutes: "%dm",
        hour: "%dh",
        hours: "%dh",
        day: "%dd",
        days: "%dd",
        month: "%dmo",
        months: "%dmo",
        year: "%dyr",
        years: "%dyr"
      }
    });

    // configure routes
    this.get('#:view', function (context) {
      var name = this.params.view,
        page = name + '.html';

      switch (name) {
        case 'home':
          // get feed JSON and posts partial template
          this.load('../data/feed.json')
            .load('partials/posts.html')
            .then(function (partial, json) {
              context.partials = {posts: partial};
              // finally render the home page
              context.partial(page, {feed: json}, function () {
                autolink();
                timeago();
              });
            });
          break;
        case 'profile':
          // get profile JSON and posts partial template
          this.load('../data/profile.json')
            .load('partials/posts.html')
            .then(function (partial, json) {
              context.partials = {posts: partial};
              // finally render the profile page
              context.partial(page, {profile: json}, function () {
                autolink();
                timeago();
              });
            });
          break;
        default:
          // render a static view
          this.partial(page);
          break;
      }
    });
    // catch all
    this.notFound = function () {
      app.runRoute("get", "#home");
    };

  });

  $(function () {
    app.run('#home');
  });

})(jQuery);