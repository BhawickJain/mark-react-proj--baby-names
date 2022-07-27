import BabyName from "../types/BabyNames";
import isPicked from "./isPicked";

const initialPickState: BabyName[] = [
  {
    id: -1,
    name: "bhawick",
    sex: "m",
  },
  {
    id: 0,
    name: "sevgi",
    sex: "f",
  },
  {
    id: 2,
    name: "lui",
    sex: "f",
  },
];

test("isPicked returns true when baby is present in pickedBabies", () => {
  const baby: BabyName = {
    id: 2,
    name: "lui",
    sex: "f",
  };
  const expectedResult = true;

  expect(isPicked(baby, initialPickState)).toEqual(expectedResult);
});
