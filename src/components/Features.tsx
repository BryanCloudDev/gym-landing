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
      icon: '🏋️',
      title: 'Personalized training',
      description: 'One on one training with an expert personal trainer.'
    },
    {
      icon: '💆',
      title: 'Sports therapy',
      description: 'Prevent injuries and recover faster and improve performance.'
    },
     {
      icon: '🌐',
      title: 'Personalized online training',
      description: 'Train from anywhere with virtual guidance and continuous monitoring.'
    },
    {
      icon: '🥗',
      title: 'Nutrition plan',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempo.'
    },
    {
      icon: '📅',
      title: 'Day pass',
      description: 'Exclusive one-day access — train at your own pace in a private area.'
    }
  ];

  return (
    <section id="features" className={styles.features}>
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
