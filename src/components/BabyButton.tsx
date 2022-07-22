import React from "react";

interface Prop {
  className: string;
  keyValue: React.Key;
  onClick: React.Dispatch<void>;
  label: string;
}
const BabyButton = ({
  keyValue,
  onClick,
  label,
  className,
}: Prop): JSX.Element => {
  return (
    <button
      className={`baby-button ${className}`}
      key={keyValue}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

export default BabyButton;
