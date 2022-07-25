import React from "react";
import BabyName from "../types/BabyNames";
import BabyButton from "./BabyButton";

interface Prop {
  baby: BabyName;
  handleClick: React.Dispatch<void>;
}
const GenderAssignedBabyButton = ({ baby, handleClick }: Prop): JSX.Element => {
  return (
    <>
      <BabyButton
        className={baby.sex === "m" ? "boy" : "girl"}
        keyValue={baby.id}
        onClick={() => handleClick()}
        label={baby.name}
      />
    </>
  );
};

export default GenderAssignedBabyButton;
