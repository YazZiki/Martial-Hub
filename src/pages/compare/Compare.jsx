import { useState } from "react";
import { martialArts } from "../../data/martialArts";
import ComparisonPreview from "../../components/ComparisonPreview/ComparisonPreview";
import Reveal from "../../components/Section/Reveal";
import styles from "./Compare.module.css";

function Compare() {
  const [leftId, setLeftId] = useState("boxing");
  const [rightId, setRightId] = useState("bjj");

  const isSameSelection = leftId === rightId;

  return (
    <section className="section container">
      <Reveal>
        <div className={styles.header}>
          <span className="eyebrow">Compare</span>
          <h1>
            Tale of the <span className="text-accent">Tape</span>
          </h1>
          <p>
            Pick any two martial arts to compare their striking, grappling,
            fitness demand, and more, side by side.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className={styles.selectors}>
          <label className={styles.selectorGroup}>
            <span className={styles.selectorLabel}>Style A</span>
            <select
              value={leftId}
              onChange={(event) => setLeftId(event.target.value)}
              className={styles.select}
            >
              {martialArts.map((art) => (
                <option key={art.id} value={art.id}>
                  {art.name}
                </option>
              ))}
            </select>
          </label>

          <span className={styles.vsLabel}>VS</span>

          <label className={styles.selectorGroup}>
            <span className={styles.selectorLabel}>Style B</span>
            <select
              value={rightId}
              onChange={(event) => setRightId(event.target.value)}
              className={styles.select}
            >
              {martialArts.map((art) => (
                <option key={art.id} value={art.id}>
                  {art.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </Reveal>

      {isSameSelection ? (
        <p className={styles.warning}>
          Choose two different martial arts to see a meaningful comparison.
        </p>
      ) : (
        <Reveal delay={0.15}>
          <ComparisonPreview leftId={leftId} rightId={rightId} />
        </Reveal>
      )}
    </section>
  );
}

export default Compare;
