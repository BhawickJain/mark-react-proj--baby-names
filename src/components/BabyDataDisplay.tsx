import BabyName from "../types/BabyNames";
import BabyNamesState from "../types/BabyNamesState"
import addToPick from "../utils/addToPick";

interface Props {
    state: BabyNamesState
    setState: React.Dispatch<React.SetStateAction<BabyNamesState>>
}
const BabyDataDisplay = ({state, setState}: Props): JSX.Element => {

  const handleAddToPick = (e: React.MouseEvent, id: number): void => {
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
              {" "}
              <button key={b.id} onClick={(e) => handleAddToPick(e, b.id)}>
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
)}

export default BabyDataDisplay