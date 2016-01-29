'use strict';

describe('img app searching', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('controlling order by dropdown box', function() {

  var imageTitles = element.all(by.repeater('image in images').column('image.title'));
  var search = element(by.model('search'));

  function getTitles() {
    return imageTitles.map(function(input) {
      return input.getText();
    });
  }

  search.sendKeys('gothic');

  expect(getTitles()).toEqual([
    "title1",
    "title2"
  ]);

  element(by.model('imgOrder')).element(by.css('option[value="date_taken"]')).click();

  expect(getTitles()).toEqual([
    "title2",
    "title1"
  ]);
});

});
