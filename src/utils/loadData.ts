import BabyName from "../types/BabyNames";

export const loadData = (): BabyName[] => {
  return [
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
      id: 1,
      name: "lucien",
      sex: "m",
    },
    {
      id: 2,
      name: "lui",
      sex: "f",
    },
    {
      id: 3,
      name: "ben",
      sex: "f",
    },
    {
      id: 4,
      name: "seiji",
      sex: "f",
    },
    {
      id: 5,
      name: "nehi",
      sex: "f",
    } ];
};

export default loadData;
