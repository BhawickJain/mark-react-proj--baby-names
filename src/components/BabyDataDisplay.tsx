import BabyName from "../types/BabyNames";
import BabyNamesState from "../types/BabyNamesState";
import addToPick from "../utils/addToPick";
import isPicked from "../utils/isPicked";
import searchBabyName from "../utils/searchBabyName";
import BabyButton from "./BabyButton";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}
const BabyDataDisplay = ({ state, setState }: Props): JSX.Element => {
  const computeDisplaySearchResults = (state: BabyNamesState) =>
    searchBabyName(state.filter, state.data, state.sexFilter);

  const handleAddToPick = (id: number): void => {
    const filteredBaby = state.data.filter((b) => b.id === id);
    const pickedBaby: BabyName = filteredBaby[0];
    setState({
      ...state,
      picks: addToPick(pickedBaby, state.picks),
    });
  };

  return (
    <div className="baby-data-display">
      <h3>Take your pick!</h3>
      <ul>
        {computeDisplaySearchResults(state).map((b) => (
          <li key={b.id}>
            <BabyButton
              label={b.name}
              sex={b.sex}
              className={`${isPicked(b, state.picks) ? "selected" : ""}`}
              onClick={() => handleAddToPick(b.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BabyDataDisplay;
