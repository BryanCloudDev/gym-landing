// src/components/Pricing.tsx
import { type PricingPlan } from '../types';
import styles from '../styles/Pricing.module.css';

const plans: PricingPlan[] = [
  {
    name: 'BÁSICO',
    price: '$99',
    period: '/mes',
    features: [
      '4 sesiones de entrenamiento',
      'Plan de entrenamiento básico',
      'Soporte por correo electrónico',
      'Seguimiento del progreso'
    ],
    popular: false
  },
  {
    name: 'PREMIUM',
    price: '$199',
    period: '/mes',
    features: [
      '8 sesiones de entrenamiento',
      'Plan de entrenamiento personalizado',
      'Asesoría nutricional',
      'Soporte 24/7',
      'Análisis de composición corporal'
    ],
    popular: true
  },
  {
    name: 'ELITE',
    price: '$299',
    period: '/mes',
    features: [
      '12 sesiones de entrenamiento',
      'Programa totalmente personalizado',
      'Planes de alimentación',
      'Revisiones semanales',
      'Agendamiento prioritario'
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className={styles['pricingContainer']} id="pricing">
      <h1>PLANES DE ENTRENAMIENTO PERSONAL</h1>
      <div className={styles['pricingWrapper']}>
        {plans.map((plan, index) => (
          <div
            className={`${styles['pricingCard']} ${plan.popular ? styles['popular'] : ''}`}
            key={index}
          >
            {plan.popular && <div className={styles['popularBadge']}>MÁS POPULAR</div>}
            <h2>{plan.name}</h2>
            <div className={styles['price']}>
              {plan.price}<span>{plan.period}</span>
            </div>
            <ul className={styles['featuresList']}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`${styles['pricingBtn']} ${plan.popular ? styles['popularBtn'] : ''}`}
            >
              {plan.popular ? 'EMPEZAR AHORA' : 'VER MÁS'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Pricing;