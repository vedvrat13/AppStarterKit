# APP STARTER KIT
[![Build Status](https://travis-ci.org/vedvrat13/AppStarterKit.svg?branch=master)](https://travis-ci.org/vedvrat13/AppStarterKit)

###Getting Started
1. Clone this repository
2. Run `npm install && npm start`
3. Visit `0.0.0.0:8080` in your browser

###Tasks To Complete
1. Setup the ES6 support using Babel & its required Presets
    * List the Presets
        * ["es2015", "react"]
    * List the files required to run react Application
        * "babel-core": "^6.14.0",
        * "babel-loader": "^6.2.5",
        * "babel-preset-es2015": "^6.14.0",
        * "babel-preset-react": "^6.11.1",
        * "react": "^15.3.2",
        * "react-dom": "^15.3.2",
        * "webpack": "^2.1.0-beta.25",
        * "webpack-dev-server": "^1.16.1"

2. Webpack Bundling
    * Understand the configurations
        * entry - file entry Point
        * output - where the chunks will be written
        * loaders
        * plugins - htmlwebpackplugin, Dedupe, uglify, ExtractTextPlugin, SplitByPathPlugin, definePlugin

    * Production/Tests Webpack
    * Hot Module Reload?
    * webpack-dev-server // middle & hot tiers

3. Configuring the Application to Display React Application
    * React App gets displayed

4. Redux configurations
    * Providers
    * Middleware
    * App Entry Point
    * Pass The Stores
    * Dispatch Actions
    * Populate State in the reducer

5. Unit Testing
    * Configure the Test framework - Mocha
        'mocha --require ignore-styles --compilers js:babel-register --require ./test/testSetup.js -R landing --recursive ./{PATH}'
    * Configure the Assertion library
        enzyme - should, mount, render
        chai - expect
    * Run the Tests
        * "chai": "^3.5.0",
        * "enzyme": "^2.4.1",
        * "ignore-styles": "^5.0.1",
        * "jsdom": "^9.5.0",
        * "mocha": "^3.0.2",
        * "react": "^15.3.2",
        * "react-addons-test-utils": "^15.3.2",

6. Configure the Code Coverage
    * Understand the Karma configurations
        karma start will reach out to karma.conf.js
    * PhantomJS Output // Folder Coverage created with components
        * "isparta-loader": "^2.0.0",
        * "json-loader": "^0.5.4",
        * "karma": "^1.3.0",
        * "karma-coverage": "^1.1.1",
        * "karma-mocha": "^1.1.1",
        * "karma-phantomjs-launcher": "^1.0.2",
        * "karma-sourcemap-loader": "^0.3.7",
        * "karma-webpack": "^1.8.0",

7. Selenium Testing
    * Configure the BrowserStack & Saucelabs utility

8. Continuos Integration - Jenkins
    * Create Codepipeline
    * Create the Jenkins Job to autotrigger and deploy on Git Commits
    * Prehooks to perform testing and stop deployment

9. Deploy the App on Heroku
    * How it gets deployed
    * 404's fallback

10. LOCAL:SERVER
    * create the local:SERVER
    * mock the API's
    * NODE // EXPRESS // CONNECT // fs

---------------
