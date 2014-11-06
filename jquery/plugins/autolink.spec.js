module("autolink plugin", {
  setup: function () {

  },
  teardown: function () {

  }
});

test("should link @ mentions", function () {
  // arrange
  expect(1);
  var text = 'this is a @daniel test.',
    expected = 'this is a <a href="http://airstream.com/@daniel">@daniel</a> test.',
    $fixture = $("#qunit-fixture").text(text);
  // act
  $("#qunit-fixture").autolink();
  // assert
  equal($fixture.html(), expected, "mentions should be linked");
});

test("should link hashtags", function () {
  // arrange
  expect(1);
  var text = 'this is a #test.',
    expected = 'this is a <a href="http://airstream.com/#test">#test</a>.',
    $fixture = $("#qunit-fixture").text(text);
  // act
  $("#qunit-fixture").autolink();
  // assert
  equal($fixture.html(), expected, "hashtags should be linked");
});