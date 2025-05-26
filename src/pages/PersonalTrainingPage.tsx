import {
  IconTarget,
  IconMedal,
  IconHeartbeat,
  IconScale,
  IconClock,
} from "@tabler/icons-react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/PersonalTrainingPage.module.css";
import { pricingPlans } from "../models/pricing-plans.model";

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

const PersonalTrainingPage: React.FC = () => {
  const benefits = [
    {
      icon: <IconTarget stroke={2} size={48} />,
      title: "Personalized Workouts",
      description: "One-on-one training sessions with your dedicated private trainer, customized to your specific needs and goals.",
    },
    {
      icon: <IconMedal stroke={2} size={48} />,
      title: "Comprehensive Assessments",
      description: "Regular evaluations of your strength, mobility, and overall progress to ensure you're on track to meet your fitness goals.",
    },
    {
      icon: <IconHeartbeat stroke={2} size={48} />,
      title: "Level-Based Programs",
      description: "Tailored routines designed for your experience level - whether you're a beginner, intermediate, or advanced athlete.",
    },
    {
      icon: <IconScale stroke={2} size={48} />,
      title: "Progress Tracking",
      description: "Keep track of your journey with our personalized tracking app or notebook, monitoring your improvements and achievements.",
    },
    {
      icon: <IconClock stroke={2} size={48} />,
      title: "Flexible Packages",
      description: "Choose from convenient monthly packages or individual session plans to fit your schedule and budget.",
    },
  ];

  useEffect(() => {
    document.title = "Personal Training";
  }, []);

  return (
    <Layout>
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
            your goals and unlock your full potential.
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
      </section>

      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>how it works</span>
          Your Personal Training Journey
        </h2>
        <ol className={styles.processList}>
          <li>
            <h3>Initial Consultation</h3>
            <p>
              Meet with a trainer to discuss your goals, fitness history, and
              any health concerns.
            </p>
          </li>
          <li>
            <h3>Fitness Assessment</h3>
            <p>
              Complete a comprehensive assessment to determine your current
              fitness level and baseline measurements.
            </p>
          </li>
          <li>
            <h3>Customized Plan Creation</h3>
            <p>
              Your trainer designs a personalized workout and nutrition plan
              tailored to your goals and lifestyle.
            </p>
          </li>
          <li>
            <h3>Regular Training Sessions</h3>
            <p>
              Engage in one-on-one sessions with your trainer, focusing on
              proper form, technique, and progressive overload.
            </p>
          </li>
          <li>
            <h3>Progress Tracking</h3>
            <p>
              Regularly assess your progress and adjust your plan to ensure
              continued growth and success.
            </p>
          </li>
          <li>
            <h3>Ongoing Support</h3>
            <p>
              Receive continuous guidance, motivation, and support from your
              trainer, even outside of sessions.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.pricing}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>training packages</span>
          Choose Your Path
        </h2>
        <div className={styles.packages}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.package} ${
                plan.isPopular ? styles.featured : ""
              }`}
            >
              <h3 className={styles.packageTitle}>{plan.name}</h3>
              <p className={styles.packagePrice}>{plan.price}</p>
              <span className={styles.period}>{plan.period}</span>
              <ul className={styles.packageFeatures}>
                {plan.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={styles.packageButton}>
                {plan.isPopular ? "Choose Program" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Transform?</h2>
          <p className={styles.ctaDescription}>
            Take the first step towards your fitness goals. Schedule a free
            consultation with one of our expert trainers today and start your
            journey to a healthier, stronger you.
          </p>
          <button className={styles.ctaButton}>
            Schedule Your Free Workout
          </button>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default PersonalTrainingPage;
