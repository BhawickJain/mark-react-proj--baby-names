import BabyName from "../types/BabyNames";
import babyNamesJSON from "../data/babyNamesData.json";
import validateData from "./validateData";

export const loadData = (): BabyName[] => validateData(babyNamesJSON);
export default loadData;
