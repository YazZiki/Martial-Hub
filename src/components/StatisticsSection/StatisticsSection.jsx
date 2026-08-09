import { motion } from "framer-motion";
import { siteStatistics } from "../../data/statistics";
import styles from "./StatisticsSection.module.css";

function StatisticsSection() {
  return (
    <div className={styles.grid}>
      {siteStatistics.map((stat, index) => (
        <motion.div
          className={styles.item}
          key={stat.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatisticsSection;
