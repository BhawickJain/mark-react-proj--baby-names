import BabyName from "../types/BabyNames";
import BabyNamesState from "../types/BabyNamesState";
import addToPick from "../utils/addToPick";
import isPicked from "../utils/isPicked";
import GenderAssignedBabyButton from "./GenderAssignedBabyButton";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}
const BabyDataDisplay = ({ state, setState }: Props): JSX.Element => {
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
        {state.display.map((b) => (
          <li key={b.id}>
            <GenderAssignedBabyButton
            className={`${isPicked(b, state.picks) ? "selected" : ""}`}
              baby={b}
              handleClick={() => handleAddToPick(b.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BabyDataDisplay;
