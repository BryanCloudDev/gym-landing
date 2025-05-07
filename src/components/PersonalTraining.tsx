import styles from '../styles/PersonalTraining.module.css';

const PersonalTraining = () => {
return (
  <section className={styles['training-container']} id="training">
    <div className={styles['training-wrapper']}>
      <div className={styles['training-img']}>
        <img 
          src="/images/personal-training.jpg" 
          alt="Entrenamiento Personal" 
          loading="lazy"
        />
      </div>
      <div className={styles['training-content']}>
        <h1>PLANES DE ENTRENAMIENTO PERSONALIZADOS</h1>
        <p>
          Nuestros entrenadores certificados crean planes de entrenamiento adaptados a tu 
          nivel físico, objetivos y preferencias. Ya sea que quieras perder peso, 
          ganar músculo o mejorar tu rendimiento atlético, tenemos lo que necesitas.
        </p>
        <ul className={styles['training-list']}>
          <li>Sesiones de entrenamiento uno a uno</li>
          <li>Guía nutricional personalizada</li>
          <li>Seguimiento detallado del progreso</li>
          <li>Opciones de horario flexibles</li>
          <li>Apoyo motivacional continuo</li>
        </ul>
        <a href="#contact" className={styles['training-btn']}>
          RESERVAR UNA SESIÓN
        </a>
      </div>
    </div>
  </section>
);

};

export default PersonalTraining;
