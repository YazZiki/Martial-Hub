import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroStats } from "../../data/statistics";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.image} />
        <div className={styles.gradientRight} />
        <div className={styles.gradientTop} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            Discover the <br />
            <span className="text-accent">Art of Combat.</span>
          </motion.h1>

          <motion.p
            className={styles.subtext}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.15}
          >
            Explore the world's martial arts, compare fighting styles,
            discover legendary fighters, and find the discipline that fits
            you.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
          >
            <Link to="/martial-arts" className="btn btn-primary">
              Explore Martial Arts
            </Link>
            <Link to="/compare" className="btn btn-secondary">
              Compare Styles
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.statPanel}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.45}
        >
          {heroStats.map((stat, index) => (
            <div
              key={stat.id}
              className={styles.statCard}
              style={{ marginLeft: `${index * 1.5}rem` }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
