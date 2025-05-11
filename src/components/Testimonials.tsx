import React from 'react';
import styles from '../styles/Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Larry Moore",
    role: "Bodybuilder",
    content: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua ut enim.",
    image: "/public/testi-1-copyright.jpg"
  },
  {
    id: 2,
    name: "Gloria Gordon",
    role: "Client",
    content: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua ut enim.",
    image: "/public/testi-2-copyright.jpg"
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Client",
    content: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim. Adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua ut enim.",
    image: "/public/testi-3-copyright.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>what we offer</span>
          <h2 className={styles.title}>Achieve amazing results with our services</h2>
        </div>

        <div className={styles.slider}>
          <div className={styles.testimonial}>
            <div className={styles.imageWrapper}>
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className={styles.image}
              />
            </div>
            <p className={styles.content}>{testimonials[currentIndex].content}</p>
            <div className={styles.author}>
              <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
              <span className={styles.role}>{testimonials[currentIndex].role}</span>
            </div>
          </div>

          <div className={styles.controls}>
            <button 
              className={`${styles.control} ${styles.prev}`}
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button 
              className={`${styles.control} ${styles.next}`}
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
