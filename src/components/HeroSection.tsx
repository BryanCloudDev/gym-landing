import Button from './Button';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
return (
  <div className={styles['hero-container']} id="home">
    <h1 className={styles['hero-title']}>ENTRENAMIENTO PERSONALIZADO</h1>
    <p className={styles['hero-subtitle']}>Rutinas adaptadas a tus metas</p>
    <div className={styles['hero-btns']}>
      <Button
        className={styles['hero-button']}
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        onClick={() => (window.location.href = '#contact')}
      >
        COMENZAR
      </Button>
      <Button
        className={styles['hero-button']}
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        onClick={() => (window.location.href = '#training')}
      >
        MÁS INFORMACIÓN
      </Button>
    </div>
  </div>
);

};

export default HeroSection;