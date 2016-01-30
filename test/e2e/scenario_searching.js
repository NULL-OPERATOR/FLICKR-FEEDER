'use strict';

describe('img app searching', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('controlling search functions', function() {

  var imageTitles = element.all(by.repeater('image in images').column('image.title'));
  var search = element(by.model('search'));

  expect(imageTitles.count()).toBe(20);

  var first = imageTitles[0]
  var last = imageTitles[19]

  element(by.model('imgOrder')).element(by.css('option[value="-date_taken"]')).click();

  expect(imageTitles[0]).toEqual(last);

  search.sendKeys('gothic');
  expect(imageTitles).toBeLessThan(20);
});

});
