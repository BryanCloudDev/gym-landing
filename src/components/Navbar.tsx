import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          THE 1% PROJECT
        </Link>

        <div
          className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLinks} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/#training"
              className={styles.navLinks}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                toggleMenu();
                if (location.pathname !== '/') {
                  navigate('/#training');
                } else {
                  const element = document.getElementById('training');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Training
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/#prices"
              className={styles.navLinks}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                toggleMenu();
                if (location.pathname !== '/') {
                  navigate('/#prices');
                } else {
                  const element = document.getElementById('prices');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Prices
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/#contact"
              className={styles.navLinks}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                toggleMenu();
                if (location.pathname !== '/') {
                  navigate('/#contact');
                } else {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
