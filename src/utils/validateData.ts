import BabyName from "../types/BabyNames";

// widen BabyName type before narrowing
interface BabyNameJson extends Omit<BabyName, "sex"> {
  sex: string;
}

const validateData = (jsonData: BabyNameJson[]): BabyName[] => {
  // propery BabyName wise check and assignation of sex: string to sex: "m" | "f"
  return jsonData as BabyName[]; // Assume data is correct
};

export default validateData;
