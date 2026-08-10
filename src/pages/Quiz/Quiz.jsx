import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quizQuestions } from "../../data/quiz";
import { martialArts } from "../../data/martialArts";
import MartialArtCard from "../../components/MartialArtCard/MartialArtCard";
import styles from "./Quiz.module.css";

function scoreMartialArts(answerKeys) {
  // For every martial art, average the ratings for each key the user picked.
  // Higher average = closer match to what the user said they want.
  return martialArts
    .map((art) => {
      const total = answerKeys.reduce((sum, key) => sum + art.ratings[key], 0);
      const matchPercent = Math.round(total / answerKeys.length);
      return { ...art, matchPercent };
    })
    .sort((a, b) => b.matchPercent - a.matchPercent);
}

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const isComplete = currentIndex >= quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex];
  const progress = Math.round(
    (Math.min(currentIndex, quizQuestions.length) / quizQuestions.length) * 100
  );

  const results = useMemo(
    () => (isComplete ? scoreMartialArts(answers) : []),
    [isComplete, answers]
  );

  const handleAnswer = (key) => {
    setAnswers((prev) => [...prev, key]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentIndex(0);
  };

  return (
    <section className="section container">
      <div className={styles.header}>
        <span className="eyebrow">Find Your Style</span>
        <h1>
          Which Martial Art <span className="text-accent">Fits You?</span>
        </h1>
        {!isComplete && (
          <p>
            Question {currentIndex + 1} of {quizQuestions.length}
          </p>
        )}
      </div>

      {!isComplete && (
        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key={currentQuestion.id}
            className={styles.questionCard}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2>{currentQuestion.question}</h2>
            <div className={styles.options}>
              {currentQuestion.options.map((option) => (
                <button
                  key={option.label}
                  className={styles.optionBtn}
                  onClick={() => handleAnswer(option.key)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.resultsHeader}>
              <h2>Your Top Matches</h2>
              <button className="btn btn-secondary" onClick={handleRestart}>
                Retake Quiz
              </button>
            </div>

            <div className={styles.resultsGrid}>
              {results.slice(0, 3).map((art, index) => (
                <div className={styles.resultItem} key={art.id}>
                  <div className={styles.matchBadge}>
                    {index === 0 ? "Best Match" : `#${index + 1} Match`} ·{" "}
                    {art.matchPercent}%
                  </div>
                  <MartialArtCard martialArt={art} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Quiz;
