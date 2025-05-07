// src/components/Footer.tsx
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

return (
  <footer className={styles['footer-container']}>
    <div className={styles['footer-links']}>
      <div className={styles['footer-link-wrapper']}>
        <div className={styles['footer-link-items']}>
          <h2>Sobre Nosotros</h2>
          <a href="#about">Nuestra Historia</a>
          <a href="#trainers">Entrenadores</a>
          <a href="#facility">Instalaciones</a>
          <a href="#testimonials">Testimonios</a>
        </div>
        <div className={styles['footer-link-items']}>
          <h2>Servicios</h2>
          <a href="#training">Entrenamiento Personal</a>
          <a href="#classes">Clases Grupales</a>
          <a href="#nutrition">Coaching Nutricional</a>
          <a href="#online">Entrenamiento en Línea</a>
        </div>
      </div>
      <div className={styles['footer-link-wrapper']}>
        <div className={styles['footer-link-items']}>
          <h2>Contacto</h2>
          <a href="#contact">Contáctanos</a>
          <a href="#faq">Preguntas Frecuentes</a>
          <a href="#careers">Trabaja con Nosotros</a>
          <a href="#press">Prensa</a>
        </div>
        <div className={styles['footer-link-items']}>
          <h2>Legal</h2>
          <a href="#terms">Términos del Servicio</a>
          <a href="#privacy">Política de Privacidad</a>
          <a href="#refund">Política de Reembolso</a>
          <a href="#waiver">Exención de Responsabilidad</a>
        </div>
      </div>
    </div>
    <div className={styles['social-media']}>
      <div className={styles['social-media-wrap']}>
        <div className={styles['footer-logo']}>
          <a href="#" className={styles['social-logo']}>
            THE 1% PROJECT
          </a>
        </div>
        <small className={styles['website-rights']}>THE 1% PROJECT © {currentYear}</small>
        <div className={styles['social-icons']}>
          <a href="#" className={styles['social-icon-link']} aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className={styles['social-icon-link']} aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className={styles['social-icon-link']} aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className={styles['social-icon-link']} aria-label="YouTube">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

};

export default Footer;