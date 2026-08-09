import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/sections/HeroImage.jpeg"
import styles from "./FinalCTA.module.css";

function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.backdrop} aria-hidden="true">
        <img
          src={HeroImage}
          alt=""
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <h2>
          Every Style Has a <span className="text-accent">Story.</span>
        </h2>
        <p>
          Explore the disciplines, techniques, and legends that shaped
          martial arts.
        </p>
        <Link to="/martial-arts" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1.1rem 2.25rem" }}>
          Start Exploring
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;
