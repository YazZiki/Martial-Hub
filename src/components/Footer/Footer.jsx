import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const EXPLORE_LINKS = [
  { label: "Martial Arts", to: "/martial-arts" },
  { label: "Compare", to: "/compare" },
  { label: "Find Your Style", to: "/quiz" },
];

const DISCOVER_LINKS = [
  { label: "Hall of Fame", to: "/hall-of-fame" },
  { label: "Timeline", to: "/timeline" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            MartialHub
          </Link>
          <p className={styles.tagline}>
            The ultimate resource for martial arts comparison, history, and
            technique analysis. Precision in every strike.
          </p>
        </div>

        <nav className={styles.linkCol} aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            {EXPLORE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.linkCol} aria-label="Discover">
          <h4>Discover</h4>
          <ul>
            {DISCOVER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.linkCol} aria-label="Legal">
          <h4>Legal</h4>
          <ul>
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        © {new Date().getFullYear()} MartialHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
