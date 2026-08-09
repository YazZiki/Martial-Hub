import { motion } from "framer-motion";
import { getMartialArtById, ratingLabels } from "../../data/martialArts";
import styles from "./ComparisonPreview.module.css";

// Defaults to Boxing vs Muay Thai for the homepage preview. The Compare page
// passes its own leftId/rightId so users can pick any two martial arts from
// the same martialArts.js data source.
function ComparisonPreview({ leftId = "boxing", rightId = "muay-thai" }) {
  const left = getMartialArtById(leftId);
  const right = getMartialArtById(rightId);

  if (!left || !right) return null;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3 className={styles.name}>{left.name}</h3>
        <span className={styles.vs}>VS</span>
        <h3 className={styles.name}>{right.name}</h3>
      </div>

      <div className={styles.rows}>
        {ratingLabels.map(({ key, label }) => (
          <div className={styles.row} key={key}>
            <div className={styles.barTrackLeft}>
              <motion.div
                className={styles.barLeft}
                initial={{ width: 0 }}
                whileInView={{ width: `${left.ratings[key]}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className={styles.metricLabel}>{label}</div>

            <div className={styles.barTrackRight}>
              <motion.div
                className={styles.barRight}
                initial={{ width: 0 }}
                whileInView={{ width: `${right.ratings[key]}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonPreview;
