import Hero from "../../components/Hero/Hero";
import MartialArtCard from "../../components/MartialArtCard/MartialArtCard";
import ComparisonPreview from "../../components/ComparisonPreview/ComparisonPreview";
import StatsChart from "../../components/StatsChart/StatsChart";
import StatisticsSection from "../../components/StatisticsSection/StatisticsSection";
import FindStyleSection from "../../components/FindStyleSection/FindStyleSection";
import FighterCard from "../../components/FighterCard/FighterCard";
import FinalCTA from "../../components/FinalCTA/FinalCTA";
import Reveal from "../../components/Section/Reveal";
import { martialArts } from "../../data/martialArts";
import { fighters } from "../../data/fighters";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />

      {/* Explore Martial Arts */}
      <section className={`section container`}>
        <Reveal>
          <div className="section-heading">
            <h2>
              Explore <span className="text-accent">Martial Arts</span>
            </h2>
            <Link to="/martial-arts" className="btn-link">
              View All Styles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className={styles.cardGrid}>
          {martialArts.map((art, index) => (
            <Reveal key={art.id} delay={index * 0.06}>
              <MartialArtCard martialArt={art} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tale of the Tape */}
      <section className={`section ${styles.taleSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-title-center">
              <h2>Tale of the Tape</h2>
              <p>
                Compare fighting styles across key attributes to find the
                perfect match for your goals.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ComparisonPreview />
          </Reveal>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section container">
        <Reveal>
          <div className="section-title-center">
            <h2>
              By the <span className="text-accent">Numbers</span>
            </h2>
            <p>Analytics breakdown of primary martial arts disciplines.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <StatsChart />
        </Reveal>
      </section>

      {/* Statistics */}
      <section className={styles.statsBand}>
        <div className="container">
          <Reveal>
            <StatisticsSection />
          </Reveal>
        </div>
      </section>

      {/* Find Your Style */}
      <section className="section container">
        <Reveal>
          <FindStyleSection />
        </Reveal>
      </section>

      {/* The Legends */}
      <section className={`section ${styles.legendsSection}`}>
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <h2>
                The <span className="text-accent">Legends</span>
              </h2>
              <Link to="/hall-of-fame" className="btn-link">
                Hall of Fame
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className={styles.fighterGrid}>
            {fighters.map((fighter, index) => (
              <Reveal key={fighter.id} delay={index * 0.06}>
                <FighterCard fighter={fighter} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

export default Home;
