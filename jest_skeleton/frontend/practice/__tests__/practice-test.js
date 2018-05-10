import { sum, screamify, quietfy } from '../practice.js';

describe("practice functions", () => {
  test("sum adds two numbers together", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  test("screamify should turn the string into an uppercase string", () => {
    expect(screamify("hello")).toEqual("HELLO");
  });

  test("quiet should turn the string into a lowercase string", () => {
    expect(quietfy('HELLO')).toEqual('hello');
  });


});
