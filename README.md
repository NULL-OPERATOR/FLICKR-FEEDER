[![Build Status](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller.svg?branch=master)](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller) [![Code Climate](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller/badges/gpa.svg)](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller) [![Coverage Status](https://coveralls.io/repos/github/NULL-OPERATOR/infinite_photo_scroller/badge.svg?branch=master)](https://coveralls.io/github/NULL-OPERATOR/infinite_photo_scroller?branch=master)
```
'  .___.   ._. __ .  ..__       .___.___.___.__ .___.__
'  [__ |    | /  `|_/ [__)      [__ [__ [__ |  \[__ [__)
'  |   |____|_\__.|  \|  \      |   [___[___|__/[___|  \
' (╯◕_◕)╯SCROLL (╯◕_◕)╯SCROLL (╯◕_◕)╯SCROLL (╯◕_◕)╯SCROLL
```
![Image Alt](app/img/screenshot.png)

## About
##### Full page Flickr public-feed viewer.
Using AngularJs/Html/Css and the Flickr API
(Angular Seeded, for optimum photo viewz)

## Current Features

- Infinite (╯◕_◕)╯SCROLLing_
- Search filters by: Title/Tags/Author
- Images arranged by: Date taken/Date published


node.js and npm required - get them from [http://nodejs.org/](http://nodejs.org/).

## To run
clone & cd into the repo
```
git clone https://github.com/NULL-OPERATOR/FLICKR-FEEDER.git
cd FLICKR-FEEDER
```
install dependencies
(npm install will run bower)
```
npm install
npm run update-webdriver
```
now visit
```
http://localhost:8000/app
```
launch the server
```
http-server -a localhost -p 8000
```

## Tests
are written in [Jasmine][jasmine], which will run with the [Karma Test Runner][karma].
```
npm test
```
## e2e
written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor]

```
npm run protractor
```


## Pending Improvements
 - Setup server
 - Deploy to heroku
 - Login to an account
   - save images
   - upvote? add to a global feed
   - add comments
 - Create a loading animation
 - Style / Add more functionality to search bar
  - Able to adjust image size (slider)
  - Add additional flicker feeds (checkbox)
  - Add feeds from other websites
 - Speed up loading times






[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
