import BabyName from "../types/BabyNames";
import addToPick from "./addToPick";

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

test("addToPick returns an appended BabyName when name does not already exist", () => {
  const pickToAdd: BabyName = {
    id: 1,
    name: "lucien",
    sex: "m",
  };

  const expectedResult: BabyName[] = [
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
    {
      id: 1,
      name: "lucien",
      sex: "m",
    },
  ];

  expect(addToPick(pickToAdd, initialPickState)).toEqual(expectedResult);
});

test("addToPick returns no changes a baby already exists", () => {
  const pickToAdd: BabyName = {
    id: 0,
    name: "sevgi",
    sex: "f",
  };
  expect(addToPick(pickToAdd, initialPickState)).toEqual(initialPickState);
});
