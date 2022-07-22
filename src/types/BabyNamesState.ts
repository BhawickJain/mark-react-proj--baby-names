import BabyName from "./BabyNames";

interface BabyNamesState {
  data: BabyName[];
  picks: BabyName[];
  filter: string;
  sexFilter: "m" | "f" | "";
  display: BabyName[];
}

export default BabyNamesState