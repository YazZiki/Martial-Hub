import { Link } from "react-router-dom";
import FindSectionImage from "../../assets/images/sections/find-sectionImage.jpeg"
import styles from "./FindStyleSection.module.css";

function FindStyleSection() {
  return (
    <div className={styles.panel}>
      <div className={styles.imageWrap}>
        <img
          src={FindSectionImage}
          alt="Fighter training"
          className={styles.image}
        />
        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <div className={styles.copy}>
        <h2>
          Which Martial Art Is <span className="text-accent">Right For You?</span>
        </h2>
        <p>
          Not every discipline fits every fighter. Answer a few questions and
          discover which martial arts match your goals, personality, and
          preferred fighting style.
        </p>
        <Link to="/quiz" className="btn btn-primary">
          Find My Style
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default FindStyleSection;
