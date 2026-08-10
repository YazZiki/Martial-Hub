import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getMartialArtById, ratingLabels } from "../../data/martialArts";
import Reveal from "../../components/Section/Reveal";
import styles from "./MartialArtDetails.module.css";

function MartialArtDetails() {
  const { id } = useParams();
  const martialArt = getMartialArtById(id);

  if (!martialArt) {
    return <Navigate to="/martial-arts" replace />;
  }

  const { name, category, origin, founded, longDescription, image, ratings } =
    martialArt;

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerBackdrop} aria-hidden="true">
          <img src={image} alt="" className={styles.bannerImage} />
          <div className={styles.bannerOverlay} />
        </div>

        <div className={`container ${styles.bannerContent}`}>
          <Link to="/martial-arts" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to Library
          </Link>

          <span className={styles.category}>{category}</span>
          <h1>{name}</h1>

          <div className={styles.metaRow}>
            <span>
              <strong>Origin:</strong> {origin}
            </span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span>
              <strong>Founded:</strong> {founded}
            </span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className={styles.contentGrid}>
          <Reveal className={styles.description}>
            <h2>Overview</h2>
            <p>{longDescription}</p>

            <Link to="/compare" className="btn btn-secondary" style={{ marginTop: "2rem" }}>
              Compare This Style
            </Link>
          </Reveal>

          <Reveal delay={0.1} className={styles.ratingsPanel}>
            <h2>Attribute Ratings</h2>
            <div className={styles.ratingsList}>
              {ratingLabels.map(({ key, label }) => (
                <div className={styles.ratingRow} key={key}>
                  <div className={styles.ratingHeader}>
                    <span>{label}</span>
                    <span className={styles.ratingValue}>{ratings[key]}</span>
                  </div>
                  <div className={styles.ratingTrack}>
                    <motion.div
                      className={styles.ratingFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ratings[key]}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.footnote}>
              Ratings are comparative and illustrative, not scientifically
              measured.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default MartialArtDetails;
