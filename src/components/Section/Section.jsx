import "./Section.css";

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section__header">
          {eyebrow && (
            <span className="section__eyebrow">
              {eyebrow}
            </span>
          )}

          <h2>{title}</h2>

          {description && (
            <p>{description}</p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}

export default Section;