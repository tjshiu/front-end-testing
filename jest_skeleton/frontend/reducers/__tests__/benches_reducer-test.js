import BenchesReducer from "../benches_reducer";
import { testBenches, newBench } from "../../testUtil/bench_helper";
import * as BenchActions from "../../actions/bench_actions";

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/
