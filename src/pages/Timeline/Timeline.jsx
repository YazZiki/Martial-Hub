import { Link } from "react-router-dom";
import { sortedTimeline } from "../../data/timeline";
import { getMartialArtById } from "../../data/martialArts";
import Reveal from "../../components/Section/Reveal";
import styles from "./Timeline.module.css";

function Timeline() {
  return (
    <section className="section container">
      <Reveal>
        <div className={styles.header}>
          <span className="eyebrow">Timeline</span>
          <h1>
            The History of <span className="text-accent">Combat</span>
          </h1>
          <p>
            From ancient wrestling grounds to modern grappling academies,
            trace how today's major disciplines came to be.
          </p>
        </div>
      </Reveal>

      <div className={styles.timeline}>
        {sortedTimeline.map((event, index) => {
          const martialArt = getMartialArtById(event.martialArtId);
          if (!martialArt) return null;

          return (
            <Reveal key={`${event.martialArtId}-${event.year}`} delay={index * 0.08}>
              <div className={styles.item}>
                <div className={styles.marker}>
                  <span className={styles.dot} />
                  {index < sortedTimeline.length - 1 && (
                    <span className={styles.line} />
                  )}
                </div>

                <div className={styles.card}>
                  <span className={styles.year}>{event.year}</span>
                  <Link to={`/martial-arts/${martialArt.id}`} className={styles.title}>
                    {martialArt.name}
                  </Link>
                  <p className={styles.note}>{event.note}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;
