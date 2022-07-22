import BabyName from "../types/BabyNames";
import babyNamesJSON from "../data/babyNamesData.json"

export const loadData = (): BabyName[] => babyNamesJSON
export default loadData;
