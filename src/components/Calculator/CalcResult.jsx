export default function CalcResult({ result }) {
  let content = "";
  if (result !== null) {
    content =
      typeof result === "number" && result < 0 ? (
        <span className="negative">{String(result)}</span>
      ) : (
        String(result)
      );
  }

  return (
    <div className="calc-result">
      <h3 id="output">{content}</h3>
    </div>
  );
}
