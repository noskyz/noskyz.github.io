import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">

        <div className="footer__main">

          <div className="footer__intro">
            <span className="footer__eyebrow">
              Get in touch
            </span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm always open to interesting projects, opportunities and
              conversations about software, games and technology.
            </p>
          </div>

          <div className="footer__contact">
            <a
              href="mailto:YOUR_EMAIL_HERE"
              className="footer__email"
            >
              YOUR_EMAIL_HERE
            </a>

            <div className="footer__links">
              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">

          <div className="footer__copyright">
            © {new Date().getFullYear()} David. All rights reserved.
          </div>

          <div className="footer__credits">
            <span>Designed & built by David Silva</span>

            <span className="footer__separator">•</span>

            <span>
              React · Vite · CSS
            </span>
          </div>

          <Link
            to="/"
            className="footer__top"
          >
            Back to top ↑
          </Link>

        </div>

      </div>
    </footer>
  );
}

export default Footer;