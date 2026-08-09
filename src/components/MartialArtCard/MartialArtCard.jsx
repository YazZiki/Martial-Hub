import { Link } from "react-router-dom";
import styles from "./MartialArtCard.module.css";

function MartialArtCard({ martialArt }) {
  const { id, name, category, origin, description } = martialArt;

  return (
    <Link to={`/martial-arts/${id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={martialArt.image} alt={name} className={styles.image} />
        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <div className={styles.body}>
        <div className={styles.headerRow}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.category}>{category}</span>
        </div>

        <p className={styles.origin}>{origin}</p>
        <p className={styles.description}>{description}</p>

        <span className={styles.exploreLink}>
          Explore Style
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default MartialArtCard;
