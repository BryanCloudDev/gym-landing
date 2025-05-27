import { Link } from 'react-router';
import React from 'react';

import PlaceholderImage from './PlaceholderImage';
import styles from '../styles/ServiceSection.module.css';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  linkTo: string;
  buttonText: string;
  backgroundColor?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  linkTo,
  buttonText,
  backgroundColor
}) => {
  return (
    <div className={styles.container}>
      <section className={styles.service}>
        <div className={styles.imageContainer}>
          <PlaceholderImage text={title} backgroundColor={backgroundColor} />
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link to={linkTo} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
