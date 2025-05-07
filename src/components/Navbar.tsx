import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

return (
  <nav className={styles['navbar']}>
    <div className={styles['navbarContainer']}>
      <a href="#" className={styles['navbarLogo']}>
        THE 1% PROJECT
      </a>
      <div className={styles['menuIcon']} onClick={toggleMenu}>
        <span className={`${styles['bar']} ${isMenuOpen ? styles['open'] : ''}`}></span>
        <span className={`${styles['bar']} ${isMenuOpen ? styles['open'] : ''}`}></span>
        <span className={`${styles['bar']} ${isMenuOpen ? styles['open'] : ''}`}></span>
      </div>
      <ul className={`${styles['navMenu']} ${isMenuOpen ? styles['active'] : ''}`}>
        <li className={styles['navItem']}>
          <a href="#" className={styles['navLinks']}>
            Inicio
          </a>
        </li>
        <li className={styles['navItem']}>
          <a href="#training" className={styles['navLinks']}>
            Entrenamiento
          </a>
        </li>
        <li className={styles['navItem']}>
          <a href="#pricing" className={styles['navLinks']}>
            Precios
          </a>
        </li>
        <li className={styles['navItem']}>
          <a href="#contact" className={styles['navLinks']}>
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

};

export default Navbar;