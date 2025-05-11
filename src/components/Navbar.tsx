import React, { useState, useEffect } from 'react';

import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          THE 1% PROJECT
        </a>

        <div className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLinks} onClick={toggleMenu}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#pages" className={styles.navLinks} onClick={toggleMenu}>Training</a>
          </li>
          <li className={styles.navItem}>
            <a href="#blog" className={styles.navLinks} onClick={toggleMenu}>Prices</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contacts" className={styles.navLinks} onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
