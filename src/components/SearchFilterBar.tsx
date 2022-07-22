import BabyName from "../types/BabyNames";
import BabyNamesState from "../types/BabyNamesState";
import searchBabyName from "../utils/searchBabyName";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}

const SearchFilterBar = ({ state, setState }: Props): JSX.Element => {
  const handleChange = (search: string): void => {
    const displaySearchResult: BabyName[] = searchBabyName(
      search,
      state.data,
      state.sexFilter
    );
    setState({
      ...state,
      filter: search,
      display: [...displaySearchResult],
    });
  };

  const handleSetSex = (sex: "m" | "f" | ""): void => {
    const displaySearchResult: BabyName[] = searchBabyName(
      state.filter,
      state.data,
      sex
    );
    setState({
      ...state,
      sexFilter: sex,
      display: displaySearchResult,
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
