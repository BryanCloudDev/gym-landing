import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Ultimate Gym</span>
          <span className={styles.outline}>Facility</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
