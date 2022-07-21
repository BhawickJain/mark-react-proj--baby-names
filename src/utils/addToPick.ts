import BabyName from "../types/BabyNames";

const addToPick = (pick: BabyName, listOfPicks: BabyName[]): BabyName[] => {
  const doesExist: boolean = listOfPicks
    .map((e) => e.id === pick.id)
    .some((b) => b);
  console.log("addToPick: ", doesExist);
  return doesExist ? listOfPicks : [...listOfPicks, pick];
};

export default addToPick;
