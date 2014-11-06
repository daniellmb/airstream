'use strict';

describe('profile.js', function () {
  var MockApi = function () {
    this.get = jasmine.createSpy('get');
    return this;
  }, profileCtrl, scope, mockApi;

  // Initialize the controller and scope
  beforeEach(function () {
    // Load the controller's module
    module('AirStream.profile');

    // Provide any mocks needed
    module(function ($provide) {
      $provide.value('profile', new MockApi());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($controller, _profile_) {
      scope = {};
      mockApi = _profile_;
      profileCtrl = $controller('ProfileCtrl', {
        $scope: scope
      });
    });

  });

  it('should exist', function () {
    expect(!!profileCtrl).toBe(true);
  });

  describe('when created', function () {
    it('should call getFeed on the api with a callback', function () {
      expect(mockApi.get).toHaveBeenCalledWith(jasmine.any(Function));
    });
    it('should set feed on the scope when complete', function () {
      // arrange
      var callback = mockApi.get.calls[0].args[0];
      // act
      callback('foo');
      // assert
      expect(scope.profile).toBe('foo');
    });
  });

  describe('when destroyed', function () {
    // Add specs
  });
});