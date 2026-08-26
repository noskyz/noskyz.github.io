import Section from "../Section/Section";
import "./Currently.css";

function Currently() {
  return (
    <Section
      id="currently"
      eyebrow="Currently"
      title="What I'm up to"
      description="What I'm currently focusing on and where I'm heading next."
    >
      <div className="currently-grid">

        <article className="currently-card">
          <span className="currently-card__number">01</span>

          <div className="currently-card__status">
            <span className="currently-card__dot" />
            Open to opportunities
          </div>

          <h3>Looking for opportunities</h3>

          <p>
            I'm currently looking for opportunities in software development,
            front-end development and game development.
          </p>
        </article>

        <article className="currently-card">
          <span className="currently-card__number">02</span>

          <div className="currently-card__status">
            <span className="currently-card__dot" />
            In progress
          </div>

          <h3>Building my portfolio</h3>

          <p>
            I'm building and refining this portfolio to showcase my work,
            experience, skills and the projects I'm developing.
          </p>
        </article>

        <article className="currently-card">
          <span className="currently-card__number">03</span>

          <div className="currently-card__status">
            <span className="currently-card__dot" />
            In development
          </div>

          <h3>Developing my projects</h3>

          <p>
            I'm continuing to develop my personal projects, including
            Rise of a Squire, Saúde Animal and Echoes of the Forgotten with
            SkyCat.
          </p>
        </article>

      </div>
    </Section>
  );
}

export default Currently;