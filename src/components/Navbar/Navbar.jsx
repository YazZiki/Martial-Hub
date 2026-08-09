import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Martial Arts", to: "/martial-arts" },
  { label: "Compare", to: "/compare" },
  { label: "Find Your Style", to: "/quiz" },
  { label: "Hall of Fame", to: "/hall-of-fame" },
  { label: "Timeline", to: "/timeline" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu automatically if the viewport grows back to desktop size.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          MartialHub
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <NavLink to="/martial-arts" className={`btn btn-primary ${styles.ctaDesktop}`}>
            Explore
          </NavLink>
          <button
            className={styles.menuToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={isMenuOpen ? styles.barTopOpen : styles.bar} />
            <span className={isMenuOpen ? styles.barMidOpen : styles.bar} />
            <span className={isMenuOpen ? styles.barBottomOpen : styles.bar} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/martial-arts"
            className="btn btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Explore
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
