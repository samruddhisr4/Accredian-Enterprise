import React from 'react';
import styles from './Stats.module.css';

const stats = [
  { label: 'Professionals Trained', value: '10K+' },
  { label: 'Sessions Delivered', value: '200+' },
  { label: 'Active Learners', value: '5K+' },
  { label: 'Global Partners', value: '50+' },
];

const Stats = () => {
  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h2 className={styles.value}>{stat.value}</h2>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
