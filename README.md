# Wcmv3demo App

## To Do
- Fix translations
- Further implement redux
- Demo dynamic views with taxonomies
- Add server proxy

Angular 2 app created with the Angular 2 App generator.

## Quickstart

Install dependencies (will trigger a bower install if necessary and build the vendor DLL):
```
npm install
```
then run:
```
npm start
```
Your app will open in [the browser](http://localhost:3000).

## Available npm scripts

* `start`: run the webpack-dev-server
* `clean`: clean the node_modules, doc & dist folders and clear the npm cache
* `lint`: run tslint
* `e2e`: start protractor
    * `live`: enable the element explorer
* `test`: run the tests
    * `watch`: run tests with auto-watch enabled
* `coverage`: generate the coverage report
    * remap: remap the coverage to typescript
    * report: create a report
* `build`: create a clean production ready build of you app
* `build:vendor`: rebuild the vendor DLL
* `server`: start the webpack-dev-server (default port 3000)
    * `aot`: start the dev server in [aot](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) mode
    * `prod`: start the production server
        * `aot`: start the production server in [aot](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) mode
* webdriver
    * start: start the webdriver
    * update: update the webdriver
