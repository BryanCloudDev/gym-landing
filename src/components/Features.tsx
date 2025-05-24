import React, { type JSX } from 'react';

import styles from '../styles/Features.module.css';
import { IconCalendarStar, IconMassage, IconSalad, IconTreadmill, IconWorld } from '@tabler/icons-react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className={styles.feature}>
    {icon}
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <IconTreadmill stroke={2} size={90} className={styles.icon} />,
      title: "Personalized Training",
      description:
        "Work one-on-one with a certified trainer to crush your goals with tailored workouts and expert motivation.",
    },
    {
      icon: <IconMassage stroke={2} size={90} className={styles.icon} />,
      title: "Sports Therapy",
      description:
        "Speed up recovery, prevent injuries, and keep your body performing at its best with targeted therapy sessions.",
    },
    {
      icon: <IconWorld stroke={2} size={90} className={styles.icon} />,
      title: "Online Training",
      description:
        "Train from anywhere with customized virtual programs and real-time feedback from your coach.",
    },
    {
      icon: <IconSalad stroke={2} size={90} className={styles.icon} />,
      title: "Nutrition Plans",
      description:
        "Fuel your progress with personalized meal plans designed to match your fitness journey and lifestyle.",
    },
    {
      icon: <IconCalendarStar stroke={2} size={90} className={styles.icon} />,
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
