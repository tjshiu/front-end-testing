# Front-End Testing

refer to https://redux.js.org/docs/recipes/WritingTests.html

## Why Test?

* Prevents fear of refactoring
* Documentation
* Catches potential bugs
* TDD

## JEST

* Testing framework for React
* Mock components
* Facebook's JS testing framework
* Great for React

## SETUP

* npm install --save-dev jest
* npm install --save-dev babel-jest
* npm install --save-dev redux-mock-store
* Edit packgage.json to run jest when you run npm test
* Add .babelrc file

## Testing Redux

* Relatively simple
* Pure functions

## Component Testing

* Enzyme
* jQuery like API on components

## Component Testing

* npm install save-dev enzyme

```
import { shallow } from 'enzyme'

describe('<MyComponent />', () => {
  it('should render three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />)
    });
  })
```

## Where to Go from here

* Add tests to your FSP
* Add tests to JS project
* Add Jest to your resume
* Add tests whenever possible on coding challenges!
