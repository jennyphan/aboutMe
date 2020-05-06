# KasianBeautiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Testing
https://angular.io/docs/ts/latest/guide/testing.html#!#live-examples

TestBed is the first and most important of the Angular testing utilities. It creates an Angular testing module—an @NgModule
The createComponent method returns a ComponentFixture, a handle on the test environment surrounding the created component
The fixture provides access to the component instance itself and to the DebugElement, which is a handle on the component's DOM element

de = fixture.debugElement.query(By.css('h1')); // components DOM
el = de.nativeElement; /// the setup assigns the DOM element from the DebugElement nativeElement property to el
fixture.detectChanges();

The queryAll method returns an array of all DebugElements that satisfy the predicate.

## Deploy
Run npm build
Login to firebase
run firebase deploy
