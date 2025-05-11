import React from 'react';

import styles from '../styles/Features.module.css';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className={styles.feature}>
    <div className={styles.icon}>{icon}</div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: "🏋️",
      title: "Personalized Training",
      description:
        "Work one-on-one with a certified trainer to crush your goals with tailored workouts and expert motivation.",
    },
    {
      icon: "💆",
      title: "Sports Therapy",
      description:
        "Speed up recovery, prevent injuries, and keep your body performing at its best with targeted therapy sessions.",
    },
    {
      icon: "🌐",
      title: "Online Training",
      description:
        "Train from anywhere with customized virtual programs and real-time feedback from your coach.",
    },
    {
      icon: "🥗",
      title: "Nutrition Plans",
      description:
        "Fuel your progress with personalized meal plans designed to match your fitness journey and lifestyle.",
    },
    {
      icon: "📅",
      title: "Day Pass",
      description:
        "Get full access for a day — train freely, explore our space, and experience our premium setup firsthand.",
    },
  ];

  return (
    <section id="training" className={styles.features}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.subtitle}>what we offer</span>
        Achieve amazing results with our services
      </h2>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
