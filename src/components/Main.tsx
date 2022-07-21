import React, { useState } from "react";
import BabyName from "../types/BabyNames";
import addToPick from "../utils/addToPick";
import loadData from "../utils/loadData";
import searchBabyName from "../utils/searchBabyName";

interface BabyNamesState {
  data: BabyName[];
  picks: BabyName[];
  filter: string;
  display: BabyName[];
}

const initialiseBabyNamesState = (): BabyNamesState => {
  const babyData = loadData();
  return {
    data: babyData,
    picks: [],
    filter: "",
    display: babyData,
  };
};

const Main = (): JSX.Element => {
  const [state, setState] = useState(initialiseBabyNamesState());
  console.log(state);

  const handleChange = (search: string): void => {
    const displaySearchResult: BabyName[] = searchBabyName(search, state.data);
    setState({
      ...state,
      filter: search,
      display: [...displaySearchResult],
    });
  };

  const handleAddToPick = (e: React.MouseEvent, id: number): void => {
    const filteredBaby = state.data.filter((b) => b.id === id);
    const pickedBaby: BabyName = filteredBaby[0];
    setState({
      ...state,
      picks: addToPick(pickedBaby, state.picks),
    });
  };

  const handleRemoveFromPick = (e: React.MouseEvent, id: number): void => {
    const filteredPicks = state.picks.filter((b) => b.id !== id);
    setState({
      ...state,
      picks: [...filteredPicks],
    });
  };

  return (
    <>
      <input
        value={state.filter}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>
        <h3>Your Favourites!</h3>
        <ul>
          {state.picks.map((b) => (
            <li key={b.id}>
              {" "}
              <button key={b.id} onClick={(e) => handleRemoveFromPick(e, b.id)}>
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="baby-data">
        <h3>Take your pick!</h3>
        <ul>
          {state.display.map((b) => (
            <li key={b.id}>
              {" "}
              <button key={b.id} onClick={(e) => handleAddToPick(e, b.id)}>
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Main;
