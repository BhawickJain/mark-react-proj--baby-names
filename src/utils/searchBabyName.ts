import BabyName from "../types/BabyNames";
import Sex from "../types/Sex";

const searchBabyName = (
  substring: string,
  data: BabyName[],
  sex: Sex
): BabyName[] => {
  const filteredBabyNames: BabyName[] = data.filter((b) =>
    b.name.includes(substring)
  );
  const filteredSex: BabyName[] = filteredBabyNames.filter((b) =>
    b.sex.includes(sex)
  );
  return filteredSex;
};

export default searchBabyName;
