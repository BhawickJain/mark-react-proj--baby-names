import BabyName from "../types/BabyNames";
import validateData from "./validateData";

test("dummy test", () => {
  const jsonData = [
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
    {
      id: 1,
      name: "Parsa",
      sex: "m",
    },
    {
      id: 2,
      name: "Avah",
      sex: "f",
    },
  ];
  const babyData: BabyName[] = [
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
    {
      id: 1,
      name: "Parsa",
      sex: "m",
    },
    {
      id: 2,
      name: "Avah",
      sex: "f",
    },
  ];
  expect(validateData(jsonData)).toStrictEqual(babyData);
});
