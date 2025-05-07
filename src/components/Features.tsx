import styles from '../styles/Features.module.css';


const Features = () => {
    return (
          <section className={styles.overviewSection} id="sobre">
      <div className={styles.container}>
        <h2 className={styles.title}>SERVICIOS EXCLUSIVOS PARA TI</h2>
        <p className={styles.subtitle}>
          Descubre todo lo que ofrecemos para ayudarte a alcanzar tus objetivos.
        </p>
        <div className={styles.servicesGrid}>
          <div className={styles.card}>
            <h3>Entrenamiento Personalizado</h3>
            <p>Sesiones uno a uno con entrenadores expertos para maximizar tu rendimiento.</p>
          </div>
          <div className={styles.card}>
            <h3>Terapia Deportiva</h3>
            <p>Prevención de lesiones, recuperación y mejora del rendimiento físico.</p>
          </div>
          <div className={styles.card}>
            <h3>Planes Personalizados en Línea</h3>
            <p>Entrena desde cualquier lugar con asesoramiento virtual y seguimiento continuo.</p>
          </div>
          <div className={styles.card}>
            <h3>Nutrición</h3>
            <p>Guías alimenticias adaptadas a tus metas y estilo de vida.</p>
          </div>
          <div className={styles.card}>
            <h3>Pase Diario al Gimnasio</h3>
            <p>Acceso exclusivo por un día, entrena a tu ritmo en un area exclusiva.</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Features;