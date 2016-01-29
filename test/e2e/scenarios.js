'use strict';

describe('img app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should filter the images by search tags', function() {

      var images = element.all(by.repeater('image in images'));
      var query = element(by.model('search'));

      expect(images.count()).toBe(3);

      query.sendKeys('gothic');
      expect(images.count()).toBe(2);
      query.clear();

      query.sendKeys('squareformat');
      expect(images.count()).toBe(1);
    });

});
