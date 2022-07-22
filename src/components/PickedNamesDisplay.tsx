import BabyNamesState from "../types/BabyNamesState";
import GenderAssignedBabyButton from "./GenderAssignedBabyButton";

interface Props {
  state: BabyNamesState;
  setState: React.Dispatch<React.SetStateAction<BabyNamesState>>;
}
const PickedNamesDisplay = ({ state, setState }: Props): JSX.Element => {
  const handleRemoveFromPick = (id: number): void => {
    const filteredPicks = state.picks.filter((b) => b.id !== id);
    setState({
      ...state,
      picks: [...filteredPicks],
    });
  };

  return (
    <div className="picked-names-display">
      <h3>Your Favourites!</h3>
      <ul>
        {state.picks.map((b) => (
          <li key={b.id}>
            {" "}
            <GenderAssignedBabyButton
              baby={b}
              handleClick={() => handleRemoveFromPick(b.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickedNamesDisplay;
