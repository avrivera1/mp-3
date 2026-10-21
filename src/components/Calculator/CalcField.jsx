export default function CalcField({ id, label, value, onChange }) {
  return (
    <div className="calc-field">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
