import BabyNamesState from "../types/BabyNamesState"

interface Props {
    state: BabyNamesState
    setState: React.Dispatch<React.SetStateAction<BabyNamesState>>
}
const PickedNamesDisplay = ({state, setState}: Props): JSX.Element => {

  const handleRemoveFromPick = (e: React.MouseEvent, id: number): void => {
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
              <button key={b.id} onClick={(e) => handleRemoveFromPick(e, b.id)}>
                {b.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default PickedNamesDisplay