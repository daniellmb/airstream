'use strict';

describe('airstream', function() {

  browser.get('index.html');

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/home');
    });


    it('should render the logged in users feed', function() {
      expect(element.all(by.css('[ng-view] ul.feed li')).count()).toBeGreaterThan(0);
    });

  });
});
