import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          <span>David</span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#currently" onClick={closeMenu}>
            Currently
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__control"
            type="button"
            aria-label="Change language"
          >
            EN
          </button>

          <button
            className="navbar__control navbar__theme"
            type="button"
            aria-label="Change theme"
          >
            ◐
          </button>

          <button
            className="navbar__menu"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;