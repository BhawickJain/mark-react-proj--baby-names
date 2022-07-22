import BabyName from "../types/BabyNames";
import searchBabyName from "./searchBabyName";

const initialDisplayState: BabyName[] = [
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

test("searchBabyNames returns all Baby names containing a substring", () => {
  const expectedResultOne: BabyName[] = [
    {
      id: -1,
      name: "bhawick",
      sex: "m",
    },
  ];
  expect(searchBabyName("b", initialDisplayState, "")).toEqual(
    expectedResultOne
  );

  const expectedResultTwo: BabyName[] = [
    {
      id: 0,
      name: "sevgi",
      sex: "f",
    },
  ];
  expect(searchBabyName("vg", initialDisplayState, "")).toEqual(
    expectedResultTwo
  );
});
