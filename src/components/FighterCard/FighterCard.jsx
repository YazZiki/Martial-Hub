import styles from "./FighterCard.module.css";

function FighterCard({ fighter }) {
  const { name, discipline, achievement, image } = fighter;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.imageFade} aria-hidden="true" />
        <div className={styles.overlay}>
          <span className={styles.discipline}>{discipline}</span>
          <h3 className={styles.name}>{name}</h3>
        </div>
      </div>
      <p className={styles.achievement}>{achievement}</p>
    </article>
  );
}

export default FighterCard;
