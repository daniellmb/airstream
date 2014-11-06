'use strict';

describe('home.js', function () {
  var MockApi = function () {
    this.query = jasmine.createSpy('query');
    return this;
  }, homeCtrl, scope, mockApi;

    // Initialize the controller and scope
    beforeEach(function () {
        // Load the controller's module
        module('AirStream.home');

        // Provide any mocks needed
        module(function ($provide) {
            $provide.value('feed', new MockApi());
        });

        // Inject in angular constructs otherwise,
        //  you would need to inject these into each test
        inject(function ($controller, _feed_) {
            scope = {};
            mockApi = _feed_;
            homeCtrl = $controller('HomeCtrl', {
                $scope: scope
            });
        });

    });

    it('should exist', function () {
        expect(!!homeCtrl).toBe(true);
    });

    describe('when created', function () {
        it('should call getFeed on the api with a callback', function () {
            expect(mockApi.query).toHaveBeenCalledWith(jasmine.any(Function));
        });
        it('should set feed on the scope when complete', function () {
            // arrange
            var callback = mockApi.query.calls[0].args[0];
            // act
            callback('foo');
            // assert
            expect(scope.feed).toBe('foo');
        });
    });

    describe('when destroyed', function () {
        // Add specs
    });
});