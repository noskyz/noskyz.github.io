import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let’s build
            <span> something.</span>
          </h2>

          <p>
            I’m currently open to opportunities in software development,
            front-end development and game development.
          </p>

          <p>
            Whether you have an opportunity, a project idea or simply want to
            get in touch, feel free to reach out.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:dars2003@gmail.com"
            className="contact-link contact-link--primary"
          >
            <div>
              <span className="contact-link__label">EMAIL</span>
              <span className="contact-link__value">
                dars2003@gmail.com
              </span>
            </div>

            <span className="contact-link__arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ddavidsilvaa03/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-link__label">LINKEDIN</span>
              <span className="contact-link__value">
                David Silva
              </span>
            </div>

            <span className="contact-link__arrow">↗</span>
          </a>

          <a
            href="https://github.com/noskyz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div>
              <span className="contact-link__label">GITHUB</span>
              <span className="contact-link__value">
                noskyz
              </span>
            </div>

            <span className="contact-link__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;