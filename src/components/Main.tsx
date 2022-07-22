import React, { useState } from "react";
import BabyNamesState from "../types/BabyNamesState";
import loadData from "../utils/loadData";
import BabyDataDisplay from "./BabyDataDisplay";
import PickedNameDisplay from "./PickedNamesDisplay";
import SearchFilterBar from "./SearchFilterBar";

const initialiseBabyNamesState = (): BabyNamesState => {
  const babyData = loadData();
  return {
    data: babyData,
    picks: [],
    filter: "",
    sexFilter: "",
    display: babyData,
  };
};

const Main = (): JSX.Element => {
  const [state, setState] = useState(initialiseBabyNamesState());

  return (
    <>
      <SearchFilterBar setState={setState} state={state} />
      <PickedNameDisplay setState={setState} state={state} />
      <BabyDataDisplay setState={setState} state={state} />
    </>
  );
};

export default Main;
