import useCalculator from "../../hooks/useCalculator.js";
import CalcField from "./CalcField.jsx";
import CalcResult from "./CalcResult.jsx";

const OPERATORS = ["+", "-", "*", "/", "**"];

export default function Calculator() {
  const { first, setFirst, second, setSecond, result, calculate, clear } =
    useCalculator();

  return (
    <div className="calculator">
      <h3>Calculator</h3>

      <div className="calc-inputs">
        <CalcField
          id="first-number"
          label="First Number:"
          value={first}
          onChange={setFirst}
        />
        <CalcField
          id="second-number"
          label="Second Number:"
          value={second}
          onChange={setSecond}
        />
      </div>

      <div className="calc-buttons">
        {OPERATORS.map((op) => (
          <button key={op} onClick={() => calculate(op)}>
            {op}
          </button>
        ))}
        <button onClick={clear}>Clear</button>
      </div>

      <CalcResult result={result} />
    </div>
  );
}
