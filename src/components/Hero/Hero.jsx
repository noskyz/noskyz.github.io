import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
      </div>

      <div className="hero__container container">
        <div className="hero__content fade-in">
          <p className="hero__eyebrow">
            <span className="hero__status" />
            Available for opportunities
          </p>

          <h1 className="hero__title">
            Hi, I'm <span>David.</span>
          </h1>

          <h2 className="hero__subtitle">
            <span className="hero__role">
              Software Engineer
            </span>

            <span className="hero__ampersand">
              &
            </span>

            <span className="hero__role">
              Game Developer
            </span>
          </h2>

          <p className="hero__description">
            I build software, games and interactive experiences with a focus
            on clean development, problem solving and continuous learning.
          </p>

          <div className="hero__actions">
            <a href="#work" className="hero__button hero__button--primary">
              View my work
              <span>→</span>
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Get in touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/noskyz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/ddavidsilva/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual fade-in">
          <div className="hero__image-frame">
            <div className="hero__image-placeholder">
              <span>YOUR PHOTO</span>
              <small>Professional portrait</small>
            </div>

            <div className="hero__corner hero__corner--top" />
            <div className="hero__corner hero__corner--bottom" />
          </div>

          <div className="hero__code-card">
            <span className="hero__code-dot" />
            <code>building_the_future();</code>
          </div>
        </div>
      </div>

      <a href="#work" className="hero__scroll">
        <span>Scroll to explore</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

export default Hero;