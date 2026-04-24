import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.footerTitle}>Accredian <span className={styles.accent}>Enterprise</span></h3>
            <p className={styles.footerText}>Leading the way in professional education and corporate training solutions.</p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>About Us</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Careers</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Solutions</h4>
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>Corporate Training</a></li>
              <li><a href="#" className={styles.footerLink}>Skill Gap Analysis</a></li>
              <li><a href="#" className={styles.footerLink}>Expert Guidance</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <p className={styles.footerText}>enterprise@accredian.com</p>
            <p className={styles.footerText}>Gurugram, India</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Accredian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
