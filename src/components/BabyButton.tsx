import React from "react";
import Sex from "../types/sex";

interface Prop {
  className?: string;
  keyValue?: React.Key;
  onClick: React.Dispatch<void>;
  label: string;
  sex?: Sex;
}

const BabyButton = ({
  keyValue,
  onClick,
  label,
  sex,
  className,
}: Prop): JSX.Element => {
  return (
    <button
      className={`baby-button ${
        sex ? (sex === "f" ? "girl" : "boy") : ""
      } ${className}`}
      key={keyValue}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

export default BabyButton;
