import { useState } from "react";

// power() must use a for() loop, not Math.pow() or **
function power(a, b) {
  let result = 1;
  for (let i = 0; i < Math.abs(b); i++) {
    result = result * a;
  }
  return b < 0 ? 1 / result : result;
}

// One table of operations replaces the five near-identical functions from MP-1.
const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "**": power,
};

export default function useCalculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState(null);

  function calculate(operator) {
    const a = Number(first);
    const b = Number(second);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult("Please enter valid numbers");
    } else if (operator === "/" && b === 0) {
      setResult("Cannot divide by zero");
    } else if (operator === "**" && !Number.isInteger(b)) {
      setResult("Exponent must be a whole number");
    } else {
      setResult(OPERATIONS[operator](a, b));
    }
  }

  function clear() {
    setFirst("");
    setSecond("");
    setResult(null);
  }

  return { first, setFirst, second, setSecond, result, calculate, clear };
}
