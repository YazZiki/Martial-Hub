import { useMemo, useState } from "react";
import { martialArts } from "../../data/martialArts";
import MartialArtCard from "../../components/MartialArtCard/MartialArtCard";
import Reveal from "../../components/Section/Reveal";
import styles from "./MartialArts.module.css";

function MartialArts() {
  const categories = useMemo(() => {
    const unique = new Set(martialArts.map((art) => art.category));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArts =
    activeCategory === "All"
      ? martialArts
      : martialArts.filter((art) => art.category === activeCategory);

  return (
    <section className="section container">
      <Reveal>
        <div className={styles.header}>
          <span className="eyebrow">Library</span>
          <h1>
            Every Discipline. <span className="text-accent">One Source.</span>
          </h1>
          <p className={styles.intro}>
            Browse the full roster of martial arts, from striking-heavy combat
            sports to ground-based grappling systems. Filter by category to
            narrow your search.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className={styles.filters} role="tablist" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={
                activeCategory === category
                  ? `${styles.filterBtn} ${styles.filterBtnActive}`
                  : styles.filterBtn
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className={styles.grid}>
        {filteredArts.map((art, index) => (
          <Reveal key={art.id} delay={index * 0.05}>
            <MartialArtCard martialArt={art} />
          </Reveal>
        ))}
      </div>

      {filteredArts.length === 0 && (
        <p className={styles.empty}>No martial arts found in this category.</p>
      )}
    </section>
  );
}

export default MartialArts;
