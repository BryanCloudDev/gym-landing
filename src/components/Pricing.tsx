import React from 'react';

import styles from '../styles/Pricing.module.css';
import Button from './Button';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "$55.55",
    period: "Per month",
    description: "Adipiscing elit sed do eusmod tempor incididunt ut labore et."
  },
  {
    id: 2,
    name: "Advanced",
    price: "$75.75",
    period: "Per month",
    description: "Adipiscing elit sed do eusmod tempor incididunt ut labore et.",
    isPopular: true
  },
  {
    id: 3,
    name: "Strong",
    price: "$95.50",
    period: "Per month",
    description: "Adipiscing elit sed do eusmod tempor incididunt ut labore et."
  }
];

const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>personal training</span>
          <h2 className={styles.title}>Pricing plans</h2>
          <p className={styles.description}>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
          </p>
        </div>

        <div className={styles.plans}>
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`${styles.plan} ${plan.isPopular ? styles.popular : ''}`}
              aria-label={`${plan.name} plan: ${plan.price} ${plan.period}`}
            >
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <Button 
                variant={plan.isPopular ? "primary" : "outline"}
                className={styles.planButton}
                aria-label={`Get ${plan.name} plan for ${plan.price} ${plan.period}`}
              >
                Get Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
