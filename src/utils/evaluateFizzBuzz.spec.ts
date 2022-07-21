import { evaluateFizzBuzz } from "./evaluateFizzBuzz";

test("can handle single numbers", () => {
  expect(evaluateFizzBuzz(1)).toBe("1");
});
