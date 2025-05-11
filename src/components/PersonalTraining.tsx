import React from 'react';

import miImagen from '../assets/images/foto-about.jpeg';
import styles from '../styles/PersonalTraining.module.css';

const PersonalTraining: React.FC = () => {
  return (
    <section className={styles.training}>
      <div className={styles.imageContainer}>
        <img src={miImagen} className={styles.image} alt="Foto" />
      </div>
      <div className={styles.content}>
        <span className={styles.subtitle}>welcome to the gym</span>
        <h2 className={styles.title}>
          Forge your fitness: gym adventures
        </h2>
        <p className={styles.description}>
          Push your limits, sculpt your body, and build discipline. Whether you're starting fresh or chasing new personal bests, we're here to help you grow stronger—every day.
        </p>
        <button className={styles.button}>About Us</button>
      </div>
      <div className={styles.rightImage}>
        <div className={styles.image} />
      </div>
    </section>
  );
};

export default PersonalTraining;
