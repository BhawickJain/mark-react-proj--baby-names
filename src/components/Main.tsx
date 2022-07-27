import { useState } from "react";
import BabyNamesState from "../types/BabyNamesState";
import loadData from "../utils/loadData";
import sortAlphabetically from "../utils/sortInAlphabetical";
import BabyDataDisplay from "./BabyDataDisplay";
import PickedNameDisplay from "./PickedNamesDisplay";
import SearchFilterBar from "./SearchFilterBar";

const Main = (): JSX.Element => {
  const initialiseBabyNamesState = (): BabyNamesState => {
    const babyData = loadData();
    return {
      data: sortAlphabetically(babyData),
      picks: [],
      filter: "",
      sexFilter: ""
    };
  };

  const [state, setState] = useState<BabyNamesState>(
    initialiseBabyNamesState()
  );

  return (
    <>
      <SearchFilterBar setState={setState} state={state} />
      <PickedNameDisplay setState={setState} state={state} />
      <BabyDataDisplay setState={setState} state={state} />
    </>
  );
};

export default Main;
