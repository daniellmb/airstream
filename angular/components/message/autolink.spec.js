describe('Filter: message.autolink', function () {
    var autolink;

    beforeEach(function () {
        module('AirStream.message.autolink');
        inject(function ($filter) {
            autolink = $filter('autolink');
        });
    });

    it('should exist', function () {
        expect(!!autolink).toBe(true);
    });

    describe('when evaluating an expression', function () {
        it('should link @ mentions', function () {
            var text = 'this is a @daniel test.',
                expected = 'this is a <a href="http://airstream.com/@daniel">@daniel</a> test.';
            expect(autolink(text)).toBe(expected);
        });
        it('should link hashtags', function () {
            var text = 'this is a #test.',
                expected = 'this is a <a href="http://airstream.com/#test">#test</a>.';
            expect(autolink(text)).toBe(expected);
        });
    });
});