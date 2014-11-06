module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      // angular
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      // angular extensions
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-resource/angular-resource.min.js',
      '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      '../bower_components/angular-sanitize/angular-sanitize.min.js',
      // components
      'components/**/*.js',
      // pages
      'about/*.js',
      'home/*.js',
      'profile/*.js',
      'app.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
