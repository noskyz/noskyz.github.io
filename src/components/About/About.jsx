import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">

        <div className="about__header">
          <span className="about__eyebrow">About me</span>

          <h2>
            Building things,
            <span> learning constantly.</span>
          </h2>

          <p>
            I'm a software engineer and game developer interested in
            building applications, games and interactive experiences.
            I enjoy learning new technologies and turning ideas into
            working projects.
          </p>
        </div>

        <div className="about__highlights">

          <article className="about__card">
            <span className="about__card-number">01</span>

            <h3>Software Development</h3>

            <p>
              Building applications with a focus on clean development,
              usability and problem solving.
            </p>

            <div className="about__tags">
              <span>React</span>
              <span>Flutter</span>
              <span>Dart</span>
              <span>Firebase</span>
            </div>
          </article>

          <article className="about__card">
            <span className="about__card-number">02</span>

            <h3>Game Development</h3>

            <p>
              Creating interactive experiences and games while exploring
              gameplay, systems, storytelling and technical development.
            </p>

            <div className="about__tags">
              <span>Unity</span>
              <span>C#</span>
              <span>Blender</span>
              <span>FMOD</span>
            </div>
          </article>

        </div>

        <div className="about__journey">

          <div>
            <span className="about__eyebrow">My journey</span>

            <h3>
              From learning to
              <span> building.</span>
            </h3>
          </div>

          <div className="about__journey-content">
            <p>
              My journey has taken me through multimedia, software
              development, game development and collaborative projects.
              Along the way, I've worked on academic, professional and
              personal projects that continue to shape the way I build.
            </p>

            <button type="button" className="about__button">
              View my journey
              <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;