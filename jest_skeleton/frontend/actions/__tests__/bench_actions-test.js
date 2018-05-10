import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../bench_actions";
import * as ApiUtil from "../../util/bench_api_util";

import { testBenches, newBench } from "../../testUtil/bench_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("simple action creators", () => {});

describe("async action creators", () => {});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });
