import { useEffect } from "react";
import BabyName from "../types/BabyNames";
import BabyNamesState from "../types/BabyNamesState";
import searchBabyName from "../utils/searchBabyName";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}

const SearchFilterBar = ({ state, setState }: Props): JSX.Element => {
  useEffect(() => {
    const displaySearchResult: BabyName[] = searchBabyName(
      state.filter,
      state.data,
      state.sexFilter
    );
    console.log("useEffect used to update search results")
    setState({
      ...state,
      display: [...displaySearchResult],
    });
  }, [state.data, state.sexFilter, state.filter]);

  const handleChange = (search: string): void => {
    setState({
      ...state,
      filter: search,
    });
  };

  const handleSetSex = (sex: "m" | "f" | ""): void => {
    setState({
      ...state,
      sexFilter: sex,
    });
  };

  return (
    <div className="search-filter-bar">
      <input
        value={state.filter}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="baby-button" onClick={() => handleSetSex("")}>
        any
      </button>
      <button className="baby-button girl" onClick={() => handleSetSex("f")}>
        girl
      </button>
      <button className="baby-button boy" onClick={() => handleSetSex("m")}>
        boy
      </button>
    </div>
  );
};

export default SearchFilterBar;
