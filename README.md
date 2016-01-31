[![Build Status](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller.svg?branch=master)](https://travis-ci.org/NULL-OPERATOR/infinite_photo_scroller) [![Code Climate](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller/badges/gpa.svg)](https://codeclimate.com/github/NULL-OPERATOR/infinite_photo_scroller) [![Coverage Status](https://coveralls.io/repos/github/NULL-OPERATOR/infinite_photo_scroller/badge.svg?branch=master)](https://coveralls.io/github/NULL-OPERATOR/infinite_photo_scroller?branch=master)

# Flickr Viewer.. infinitely.....

Angular Seeded, for optimum photo viewz

npm install (will run bower too)
npm run update-webdriver

to launch
http-server -a localhost -p 8000
or
npm start

to test
npm test
or
npm run protractor


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

 You must have node.js and npm installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Install Dependencies

```
npm install
```

Behind the scenes this will also call `bower install`.

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```
Now browse to the app at `http://localhost:8000/app/index.html`.


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

 These are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma].

```
npm test
```


### End to end testing

written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has special features for Angular applications.

The web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

```
npm run protractor
```


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
