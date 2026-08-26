import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId) => {
    closeMenu();

    const targetHash = `#${sectionId}`;

    // Already on the homepage
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar?.offsetHeight ?? 0;

        const elementPosition =
          element.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.history.replaceState(
          null,
          "",
          `/#${sectionId}`
        );

        window.scrollTo({
          top: elementPosition,
          left: 0,
          behavior: "smooth",
        });

        return;
      }
    }

    // Coming from another page
    navigate({
      pathname: "/",
      hash: targetHash,
    });
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        <button
          type="button"
          className="navbar__logo"
          onClick={() => {
            closeMenu();

            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });

              window.history.replaceState(null, "", "/");
            } else {
              navigate("/");
            }
          }}
        >
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          <span>David</span>
        </button>

        <nav
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => handleSectionNavigation("work")}
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => handleSectionNavigation("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleSectionNavigation("currently")}
          >
            Currently
          </button>

          <button
            type="button"
            onClick={() => handleSectionNavigation("contact")}
          >
            Contact
          </button>
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