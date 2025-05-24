import React from "react";

import styles from "../styles/Testimonials.module.css";
import bryan from "../assets/images/bryan.png";
import diego from "../assets/images/diego.png";
import dani from "../assets/images/dani.png";
import rene from "../assets/images/rene.png";
import rob from "../assets/images/rob.png";

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
    name: "Rene Gordon",
    role: "The Cleaning Guy",
    content:
      "I clean like a ninja and judge like a critic. If it's dirty, I'm already disappointed.",
    image: rene,
  },
  {
    id: 2,
    name: "Bryan Smith",
    role: "Client",
    content:
      "This service is smoother than my morning coffee… and twice as energizing!",
    image: bryan,
  },
  {
    id: 3,
    name: "Diego Heinz",
    role: "Client",
    content:
      "At first I was skeptical, then I blinked and everything was just… perfect. Sorcery?",
    image: diego,
  },
  {
    id: 4,
    name: "Daniel Brown",
    role: "Client",
    content:
      "I came for the service, stayed for the vibes. Also, someone brought cookies?",
    image: dani,
  },
  {
    id: 5,
    name: "Roberto Lee",
    role: "Client",
    content:
      "This changed my life. Well, not dramatically… but enough to brag about it at brunch, call my mom please.",
    image: rob,
  },
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
          <h2 className={styles.title}>
            Achieve amazing results with our services
          </h2>
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
            <p className={styles.content}>
              {testimonials[currentIndex].content}
            </p>
            <div className={styles.author}>
              <h4 className={styles.name}>{testimonials[currentIndex].name}</h4>
              <span className={styles.role}>
                {testimonials[currentIndex].role}
              </span>
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
