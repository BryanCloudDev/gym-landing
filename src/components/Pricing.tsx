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
    price: "$250",
    period: "Per month",
    description: "12 sessions per month",
  },
  {
    id: 2,
    name: "Advanced",
    price: "$300",
    period: "Per month",
    description: "16 sessions per month",
    isPopular: true
  },
  {
    id: 3,
    name: "Strong",
    price: "$350",
    period: "Per month",
    description: "20 sessions per month",
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="prices" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>personal training</span>
          <h2 className={styles.title}>Pricing plans</h2>
          <p className={styles.description}>
            Choose the plan that suits you best. We offer a variety of plans to fit your needs and budget.
          </p>
        </div>

        <div className={styles.plans}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.plan} ${
                plan.isPopular ? styles.popular : ""
              }`}
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
