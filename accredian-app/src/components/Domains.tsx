import React from 'react';
import styles from './Domains.module.css';

const domains = [
  { title: 'Gen-AI Mastery', icon: '🤖', description: 'Master generative AI tools and frameworks for enterprise efficiency.' },
  { title: 'Fintech Innovation', icon: '🏦', description: 'Explore the future of finance with blockchain and digital banking.' },
  { title: 'Data Strategy', icon: '📊', description: 'Build a data-driven culture with advanced analytics and BI.' },
  { title: 'Product Leadership', icon: '🚀', description: 'Scale products effectively with modern management principles.' },
  { title: 'Cyber Security', icon: '🛡️', description: 'Protect your enterprise with robust security protocols.' },
  { title: 'Cloud Solutions', icon: '☁️', description: 'Optimize operations with scalable cloud architectures.' },
];

const Domains = () => {
  return (
    <section id="domains" className="section" style={{ backgroundColor: 'var(--section-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Our Domain <span style={{ color: 'var(--primary)' }}>Expertise</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Specialized programs across high-growth domains to ensure your teams stay ahead of the curve.
          </p>
        </div>
        <div className={styles.grid}>
          {domains.map((domain, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{domain.icon}</div>
              <h3 className={styles.cardTitle}>{domain.title}</h3>
              <p className={styles.cardDescription}>{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
