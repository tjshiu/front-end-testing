import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../bench_actions";
import * as ApiUtil from "../../util/bench_api_util";

import { testBenches, newBench } from "../../testUtil/bench_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("simple action creators", () => {
  test("receiveBenches should create an action to receive benches", () => {
    // refer to https://redux.js.org/docs/recipes/WritingTests.html
    const expectedAction = {
      type: actions.RECEIVE_BENCHES,
      benches: testBenches
    };
    expect(actions.receiveBenches(testBenches)).toEqual(expectedAction);
  });

  test("receiveBench should create an action to receive one bench", () => {
    const expectedAction = {
      type: actions.RECEIVE_BENCH,
      bench: newBench
    };

    expect(actions.receiveBench(newBench)).toEqual(expectedAction);
  });
});

describe("async action creators", () => {});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });
