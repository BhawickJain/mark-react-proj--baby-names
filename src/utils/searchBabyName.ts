import BabyName from "../types/BabyNames";

const searchBabyName = (substring: string, data: BabyName[]): BabyName[] => {
  const filteredBabyNames: BabyName[] = data.filter((b) =>
    b.name.includes(substring)
  );
  return filteredBabyNames;
};

export default searchBabyName;
