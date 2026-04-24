import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.content} animate-up`}>
          <h1 className={styles.title}>
            Next-Gen <span className={styles.accent}>Expertise</span><br />
            For Your <span className={styles.accent}>Enterprise</span>
          </h1>
          <p className={styles.subtitle}>
            Cultivate high-performance teams through expert learning. Tailored solutions designed to bridge the skill gap in your organization.
          </p>
          <ul className={styles.bullets}>
            <li>
              <span className={styles.check}>✓</span> Tailored Solutions
            </li>
            <li>
              <span className={styles.check}>✓</span> Industry Insights
            </li>
            <li>
              <span className={styles.check}>✓</span> Expert Guidance
            </li>
          </ul>
          <button className="btn btn-primary">Enquire Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.placeholderImage}>
            <img src="https://images.unsplash.com/photo-1522071823991-b99c223a709e?auto=format&fit=crop&q=80&w=1000" alt="Team working" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
