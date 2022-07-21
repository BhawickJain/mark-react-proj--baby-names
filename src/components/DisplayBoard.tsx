import { evaluateFizzBuzz } from "../utils/evaluateFizzBuzz";

interface NumberProp {
  num: number;
}

const DisplayBoard = ({ num }: NumberProp): JSX.Element => {
  return <div className="fizz-buzz">{evaluateFizzBuzz(num)}</div>;
};

export default DisplayBoard;
