import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} David. All rights reserved.
          </div>

          <div className="footer__credits">
            <span>Designed & built by David Silva</span>

            <span className="footer__separator">•</span>

            <span>React · Vite · CSS</span>
          </div>

          <Link to="/" className="footer__top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;