import FizzBuzz from "../types/FizzBuzz";

export const evaluateFizzBuzz = (num: number): string => {
  const fizzBuzzNumberArray: FizzBuzz[] = [];

  if (num % 2 === 0) {
    fizzBuzzNumberArray.push("Fizz");
  }
  if (num % 5 === 0) {
    fizzBuzzNumberArray.push("Buzz");
  }
  if (fizzBuzzNumberArray.length === 0) {
    fizzBuzzNumberArray.push(num);
  }

  return fizzBuzzNumberArray.join("");
};
