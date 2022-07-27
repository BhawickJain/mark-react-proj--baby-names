import BabyNamesState from "../types/BabyNamesState";
import Sex from "../types/sex";
import searchBabyName from "../utils/searchBabyName";
import BabyButton from "./BabyButton";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}

const SearchFilterBar = ({ state, setState }: Props): JSX.Element => {
  const recomputeDisplaySearchResults = (state: BabyNamesState) =>
    searchBabyName(state.filter, state.data, state.sexFilter);

  const handleChange = (search: string): void => {
    setState({
      ...state,
      display: recomputeDisplaySearchResults({ ...state, filter: search }),
      filter: search,
    });
  };

  const handleSetSex = (sex: Sex): void => {
    setState({
      ...state,
      display: recomputeDisplaySearchResults({ ...state, sexFilter: sex }),
      sexFilter: sex,
    });
  };

  return (
    <div className="search-filter-bar">
      <input
        value={state.filter}
        onChange={(e) => handleChange(e.target.value)}
      />
      <BabyButton
        className={`${state.sexFilter === "" ? "selected" : ""}`}
        label="Any"
        keyValue={"any"}
        onClick={() => handleSetSex("")}
      />
      <BabyButton
        className={`girl ${state.sexFilter === "f" ? "selected" : ""}`}
        label="Girl"
        keyValue={"girl"}
        onClick={() => handleSetSex("f")}
      />
      <BabyButton
        className={`boy ${state.sexFilter === "m" ? "selected" : ""}`}
        label="Boy"
        keyValue={"boy"}
        onClick={() => handleSetSex("m")}
      />
    </div>
  );
};

export default SearchFilterBar;
