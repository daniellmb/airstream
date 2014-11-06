'use strict';

describe('airstream', function() {

  describe('profile', function() {

    beforeEach(function() {
      browser.get('index.html#/profile');
    });

    it('should render the logged in users name', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Daniel Lamb/);
    });

  });
});
