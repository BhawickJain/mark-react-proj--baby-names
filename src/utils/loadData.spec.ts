import loadData from "./loadData";

test("loadData returns a populated array of BabyNames", () => {
  expect(loadData()).toHaveLength(171);
});
