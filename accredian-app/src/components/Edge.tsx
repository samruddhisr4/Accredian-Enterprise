import React from 'react';
import styles from './Edge.module.css';

const features = [
  { title: 'Tailored Solutions', description: 'Curated programs designed specifically for your organizational needs.' },
  { title: 'Expert Guidance', description: 'Learn from industry veterans who bring real-world expertise.' },
  { title: 'Innovative Framework', description: 'Proven methodology to ensure learning translates to impact.' },
  { title: 'Advanced Technology', description: 'Cutting-edge platform for seamless learning delivery.' },
  { title: 'Diverse Offerings', description: 'Programs ranging from AI to Fintech and Management.' },
  { title: 'Proven Impact', description: 'Measurable ROI on talent development and performance.' },
];

const Edge = () => {
  return (
    <section id="edge" className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            The <span style={{ color: 'var(--primary)' }}>Accredian</span> Edge
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Why leading enterprises trust us to transform their workforce into high-performance powerhouses.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edge;
