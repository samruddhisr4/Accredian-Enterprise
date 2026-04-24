import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          Accredian <span className={styles.logoSpan}>Enterprise</span>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#stats">Stats</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#edge">The Edge</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>
        <button className="btn btn-primary">Enquire Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
