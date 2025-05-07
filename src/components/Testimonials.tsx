import { type Testimonial } from '../types';
import styles from '../styles/Testimonials.module.css'; // Importa los estilos como un objeto

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: '¡El programa de entrenamiento personalizado transformó mi cuerpo y mi confianza! Perdí 9 kilos en 3 meses y gané fuerza.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: 'La mejor inversión en mi salud. Mi entrenador personalizó mi plan y logré mejorar mi tiempo en maratón por 15 minutos.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    text: 'Después de años en diferentes gimnasios, finalmente encontré un programa que realmente funciona. ¡La atención al detalle es increíble!',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className={styles['testimonials-container']}>
      <h1 className={styles['testimonials-title']}>LO QUE DICEN NUESTROS CLIENTES</h1>
      <div className={styles['testimonials-wrapper']}>
        {testimonials.map((testimonial) => (
          <div className={styles['testimonial-card']} key={testimonial.id}>
            <div className={styles['testimonial-rating']}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className={styles['testimonial-text']}>
              "{testimonial.text}"
            </blockquote>
            <cite className={styles['testimonial-name']}>- {testimonial.name}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Testimonials;