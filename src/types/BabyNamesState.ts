import BabyName from "./BabyNames";
import Sex from "./Sex";

interface BabyNamesState {
  data: BabyName[];
  picks: BabyName[];
  filter: string;
  sexFilter: Sex;
}

export default BabyNamesState;
