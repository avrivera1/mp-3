// One resume entry: an h3 title, an optional italic subtitle/date line,
// then either a description paragraph or a bullet list.
export default function Entry({ title, dates, description, bullets }) {
  return (
    <>
      <h3>{title}</h3>
      {dates && (
        <p>
          <em>{dates}</em>
        </p>
      )}
      {description && <p>{description}</p>}
      {bullets && (
        <ul>
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
