import { useState } from 'react';
import { type FormData } from '../types';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

return (
  <section className={styles['contactContainer']} id="contacto">
    <div className={styles['contactWrapper']}>
      <div className={styles['contactInfo']}>
        <h1>CONTÁCTANOS</h1>
        <p>
          ¿Listo para comenzar tu camino hacia una vida más saludable? Escríbenos para agendar tu primera sesión o resolver cualquier duda.
        </p>
        <div className={styles['contactDetails']}>
          <p><i className="fas fa-map-marker-alt"></i> Calle Fitness 123, Ciudad Gym</p>
          <p><i className="fas fa-phone"></i> (555) 123-4567</p>
          <p><i className="fas fa-envelope"></i> info@fitpersonal.com</p>
        </div>
        <div className={styles['socialIcons']}>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className={styles['contactForm']}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Tu Nombre"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Tu Correo"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Tu Teléfono"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Tu Teléfono"
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Tu Mensaje"
          ></textarea>
          <button type="submit" className={styles['submitBtn']}>
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </div>
  </section>
);

};

export default Contact;