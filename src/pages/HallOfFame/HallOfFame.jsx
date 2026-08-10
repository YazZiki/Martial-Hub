import { fighters } from "../../data/fighters";
import FighterCard from "../../components/FighterCard/FighterCard";
import Reveal from "../../components/Section/Reveal";
import styles from "./HallOfFame.module.css";

function HallOfFame() {
  return (
    <section className="section container">
      <Reveal>
        <div className={styles.header}>
          <span className="eyebrow">Hall of Fame</span>
          <h1>
            The Fighters Who <span className="text-accent">Defined an Era</span>
          </h1>
          <p>
            Legends whose skill, discipline, and dominance shaped the martial
            arts they represented.
          </p>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {fighters.map((fighter, index) => (
          <Reveal key={fighter.id} delay={index * 0.06}>
            <FighterCard fighter={fighter} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default HallOfFame;
