import { Link } from 'react-router';
import { IconTarget, IconMedal, IconHeartbeat, IconScale } from '@tabler/icons-react';
import React from 'react';

import styles from '../styles/PersonalTraining.module.css';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className={styles.benefit}>
    <div className={styles.benefitIcon}>{icon}</div>
    <h3 className={styles.benefitTitle}>{title}</h3>
    <p className={styles.benefitDescription}>{description}</p>
  </div>
);

const PersonalTraining: React.FC = () => {
  const benefits = [
    {
      icon: <IconTarget stroke={2} size={48} />,
      title: "Customized Programs",
      description: "Tailored workout plans designed specifically for your goals, fitness level, and schedule."
    },
    {
      icon: <IconMedal stroke={2} size={48} />,
      title: "Expert Guidance",
      description: "Work with certified trainers who are passionate about helping you achieve your fitness goals."
    },
    {
      icon: <IconHeartbeat stroke={2} size={48} />,
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress tracking to keep you motivated and on track."
    },
    {
      icon: <IconScale stroke={2} size={48} />,
      title: "Nutrition Support",
      description: "Comprehensive nutrition guidance to complement your training and maximize results."
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>personal training</span>
          <h1 className={styles.title}>
            Transform Your Body, Transform Your Life
          </h1>
          <p className={styles.description}>
            Take your fitness journey to the next level with our expert personal
            trainers. Whether you're just starting out or looking to break
            through plateaus, we'll create a customized plan to help you achieve
            your goals.
          </p>
        </div>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>why choose us</span>
          Benefits of Personal Training
        </h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <Link to="/personal-training" className={styles.button}>
              Start Your Journey
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PersonalTraining;
