[![Build Status](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller.svg?branch=master)](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller) [![Code Climate](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller/badges/gpa.svg)](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller) [![Coverage Status](https://coveralls.io/repos/github/NULL-OPERATOR/infinite_photo_scroller/badge.svg?branch=master)](https://coveralls.io/github/NULL-OPERATOR/infinite_photo_scroller?branch=master)
```
8888888888 888      8888888  .d8888b.  888    d8P  8888888b.       
888        888        888   d88P  Y88b 888   d8P   888   Y88b      
888        888        888   888    888 888  d8P    888    888      
8888888    888        888   888        888d88K     888   d88P      
888        888        888   888        8888888b    8888888P"       
888        888        888   888    888 888  Y88b   888 T88b        
888        888        888   Y88b  d88P 888   Y88b  888  T88b       
888        88888888 8888888  "Y8888P"  888    Y88b 888   T88b      



888     888 8888888 8888888888 888       888 8888888888 8888888b.  
888     888   888   888        888   o   888 888        888   Y88b
888     888   888   888        888  d8b  888 888        888    888
Y88b   d88P   888   8888888    888 d888b 888 8888888    888   d88P
 Y88b d88P    888   888        888d88888b888 888        8888888P"  
  Y88o88P     888   888        88888P Y88888 888        888 T88b   
   Y888P      888   888        8888P   Y8888 888        888  T88b  
    Y8P     8888888 8888888888 888P     Y888 8888888888 888   T88b
```
![Image Alt](app/img/screenshot.png)

## About
Using AngularJs/Html/Css and the Flickr API to load the flickr public feed.
(Angular Seeded, for optimum photo viewz)

node.js and npm required - get them from [http://nodejs.org/](http://nodejs.org/).

## To run
clone & cd into the repo
```
git clone :
cd infinite_photo_scroller
```
install dependencies
(npm install will run bower)
```
npm install
npm run update-webdriver
```
now visit
```
http://localhost:8000/app/index.html#/
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
