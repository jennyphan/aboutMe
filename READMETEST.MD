## Testing
https://angular.io/docs/ts/latest/guide/testing.html#!#live-examples

TestBed is the first and most important of the Angular testing utilities. It creates an Angular testing module—an @NgModule
The createComponent method returns a ComponentFixture, a handle on the test environment surrounding the created component
The fixture provides access to the component instance itself and to the DebugElement, which is a handle on the component's DOM element

de = fixture.debugElement.query(By.css('h1')); // components DOM
el = de.nativeElement; /// the setup assigns the DOM element from the DebugElement nativeElement property to el
fixture.detectChanges();

The queryAll method returns an array of all DebugElements that satisfy the predicate.

## Example Routing Test
navbar.component.ts

## Example Dom Test
carousel.component.spec.ts

## Example Component Test
navbar.component.ts

## Example Form Test
search.component.spec.ts

## Example Mock Service Test
carousel.component.spec.ts

## Debugging
npm install -g typings
npm install --save-dev karma-typescript-preprocessor
npm install --save-dev typescript
Add SourceMap
http://www.damirscorner.com/blog/posts/20160116-ContinuousTestingOfTypeScriptCode.html
http://www.damirscorner.com/blog/posts/20161018-DebuggingKarmaTestsInABrowser.html
