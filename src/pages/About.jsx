import { Link } from "react-router-dom";
import "./AboutPage.css";

function About() {
  return (
    <main className="about-page">

      {/* Header */}

      <section className="about-page__intro">
        <div className="about-page__container">

          <span className="about-page__eyebrow">
            About me
          </span>

          <h1>
            Building things,
            <span> learning constantly.</span>
          </h1>

          <p className="about-page__intro-text">
            I'm a software engineer and game developer interested in
            building applications, games and interactive experiences.
            My journey has taken me through software development,
            multimedia, game development and professional projects.
          </p>

          <Link to="/" className="about-page__back">
            <span>←</span>
            Back to portfolio
          </Link>

        </div>
      </section>


      {/* Journey */}

      <section className="about-page__journey">
        <div className="about-page__container">

          <div className="about-page__section-heading">
            <span className="about-page__eyebrow">
              My journey
            </span>

            <h2>
              From learning
              <span> to building.</span>
            </h2>

            <p>
              A timeline of the experiences, education and projects
              that have shaped the way I develop.
            </p>
          </div>


          <div className="timeline">


            {/* 2018 — 2021 */}

            <article className="timeline__item">

              <div className="timeline__date">
                2018 — 2021
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Education
                </span>

                <h3>
                  Escola Secundária Manuel Cargaleiro
                </h3>

                <p className="timeline__subtitle">
                  Técnico de Gestão e Programação de Sistemas Informáticos
                </p>

                <p>
                  Professional Level 4 course focused on information
                  systems, programming and web technologies.
                </p>

              </div>

            </article>


            {/* 2021 — 2023 */}

            <article className="timeline__item">

              <div className="timeline__date">
                2021 — 2023
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Education
                </span>

                <h3>
                  ISTEC
                </h3>

                <p className="timeline__subtitle">
                  CTeSP — Desenvolvimento de Dispositivos Móveis
                </p>

                <p>
                  Further developed my programming foundations while
                  focusing on mobile application development and
                  related technologies.
                </p>

              </div>

            </article>


            {/* 2023 — Cofina */}

            <article className="timeline__item timeline__item--featured">

              <div className="timeline__date">
                Mar 2023 — Jul 2023
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Professional Experience
                </span>

                <h3>
                  Cofina Media / Medialivre
                </h3>

                <p className="timeline__subtitle">
                  Internship — UX/UI & Web Programming
                </p>

                <p>
                  During my internship, I worked on interactive and
                  multimedia projects, combining programming, visual
                  development and user experience.                  
                </p>

                <p>
                    View my published work:
                </p>


                <div className="timeline__links">

                  <a
                    href="https://www.cmjornal.pt/cm-interativo/reportagens-interativas/sangue-solidario-o-que-saber-para-ser-dador"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sangue Solidário ↗
                  </a>

                  <a
                    href="https://www.cmjornal.pt/cm-interativo/graficos-interativos/A-industria-milionaria-da-moda#bodyPageAnchor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    A Indústria Milionária da Moda ↗
                  </a>

                </div>

              </div>

            </article>


            {/* 2023 — 2025 */}

            <article className="timeline__item">

              <div className="timeline__date">
                2023 — 2025
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Education
                </span>

                <h3>
                  ISTEC
                </h3>

                <p className="timeline__subtitle">
                  Licenciatura — Engenharia Multimédia
                </p>

                <p>
                  Expanded my experience across multimedia production,
                  3D, interactive experiences and software development.
                </p>

              </div>

            </article>


            {/* 2023 — 2026 */}

            <article className="timeline__item">

              <div className="timeline__date">
                2023 — 2026
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Education
                </span>

                <h3>
                  ISTEC
                </h3>

                <p className="timeline__subtitle">
                  Licenciatura — Engenharia Informática
                </p>

                <p>
                  Continued developing my knowledge in software
                  engineering, programming and computer science.
                </p>

              </div>

            </article>


            {/* 2025 — Present */}

            <article className="timeline__item timeline__item--project">

              <div className="timeline__date">
                2025 — Present
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Project · SkyCat
                </span>

                <h3>
                  Echoes of the Forgotten
                </h3>

                <p className="timeline__subtitle">
                  Game Development
                </p>

                <p>
                  A psychological narrative game developed with
                  SkyCat, combining Unity HDRP, Blender, FMOD and
                  collaborative development.
                </p>

                <Link
                  to="/work/echoes-of-the-forgotten"
                  className="timeline__project-link"
                >
                  View project ↗
                </Link>

              </div>

            </article>


            {/* 2025 — Present */}

            <article className="timeline__item timeline__item--project">

              <div className="timeline__date">
                Nov 2025 — Present
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Project
                </span>

                <h3>
                  Saúde Animal
                </h3>

                <p className="timeline__subtitle">
                  Software Development
                </p>

                <p>
                  A mobile application originally developed between
                  November and February and now being continued as
                  an independent project.
                </p>

                <Link
                  to="/work/saude-animal"
                  className="timeline__project-link"
                >
                  View project ↗
                </Link>

              </div>

            </article>


            {/* 2026 — Present */}

            <article className="timeline__item timeline__item--project">

              <div className="timeline__date">
                2026 — Present
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Project
                </span>

                <h3>
                  Rise of a Squire
                </h3>

                <p className="timeline__subtitle">
                  Game Development
                </p>

                <p>
                  Started as a university project and continued as
                  an independent development project, focused on
                  building a larger medieval game experience.
                </p>

                <Link
                  to="/work/rise-of-a-squire"
                  className="timeline__project-link"
                >
                  View project ↗
                </Link>

              </div>

            </article>


            {/* NOW */}

            <article className="timeline__item timeline__item--current">

              <div className="timeline__date">
                Now
              </div>

              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__content">

                <span className="timeline__type">
                  Current
                </span>

                <h3>
                  Looking for opportunities
                </h3>

                <p>
                  Currently looking for opportunities in software
                  development, front-end development and game
                  development while continuing to build and refine
                  my projects.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* Bottom */}

      <section className="about-page__closing">

        <div className="about-page__container">

          <span className="about-page__eyebrow">
            What's next
          </span>

          <h2>
            Still building.
            <span> Still learning.</span>
          </h2>

          <p>
            This journey is still being written. I'm continuing to
            develop projects, improve my skills and look for
            opportunities where I can keep growing.
          </p>

          <Link to="/" className="about-page__button">
            Back to portfolio
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;