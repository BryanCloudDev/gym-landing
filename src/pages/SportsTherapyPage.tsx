import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PlaceholderImage from "../components/PlaceholderImage";
import styles from "../styles/SportsTherapyPage.module.css";
import { pricingPlans } from "../models/pricing-plans.model";

const SportsTherapyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("assessment");

  useEffect(() => {
    document.title = "Sports Therapy | Peak Performance Recovery";
  }, []);

  const therapyProcess = [
    {
      id: "assessment",
      title: "Comprehensive Assessment",
      description: "Our experts evaluate your condition, movement patterns, and goals to create a tailored therapy plan.",
      image: <PlaceholderImage width={600} height={400} text="Comprehensive Assessment" backgroundColor="#2C3E50" />
    },
    {
      id: "treatment",
      title: "Specialized Treatment",
      description: "Using advanced techniques, we address your specific needs to promote healing and enhance performance.",
      image: <PlaceholderImage width={600} height={400} text="Specialized Treatment" backgroundColor="#34495E" />
    },
    {
      id: "rehabilitation",
      title: "Active Rehabilitation",
      description: "We guide you through exercises designed to rebuild strength, flexibility, and functional movement.",
      image: <PlaceholderImage width={600} height={400} text="Active Rehabilitation" backgroundColor="#2980B9" />
    },
    {
      id: "prevention",
      title: "Injury Prevention",
      description: "Learn strategies to maintain your health and prevent future injuries, ensuring long-term athletic success.",
      image: <PlaceholderImage width={600} height={400} text="Injury Prevention" backgroundColor="#3498DB" />
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Elevate Your Performance with Sports Therapy</h1>
            <p className={styles.description}>
              Unlock your full potential and accelerate recovery with our cutting-edge sports therapy services.
            </p>
          </div>
        </section>

        <section className={styles.interactiveProcess}>
          <h2 className={styles.sectionTitle}>Your Path to Peak Performance</h2>
          <div className={styles.processTabs}>
            {therapyProcess.map((step) => (
              <button
                key={step.id}
                className={`${styles.processTab} ${activeTab === step.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(step.id)}
              >
                {step.title}
              </button>
            ))}
          </div>
          <div className={styles.processContent}>
            {therapyProcess.map((step) => (
              <div
                key={step.id}
                className={`${styles.processStep} ${activeTab === step.id ? styles.activeStep : ''}`}
              >
                <div className={styles.processImage}>{step.image}</div>
                <div className={styles.processDescription}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Our Specialized Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Sports Physical Therapy</h3>
              <p>Tailored treatment plans to address sports-specific injuries and enhance performance.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Biomechanical Analysis</h3>
              <p>Advanced motion capture technology to identify and correct movement imbalances.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Performance Recovery</h3>
              <p>Cutting-edge techniques to accelerate recovery and minimize downtime.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Injury Prevention Programs</h3>
              <p>Customized strategies to reduce injury risk and maintain peak condition.</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>Athlete Success Stories</h2>
          <div className={styles.testimonialSlider}>
            {/* Add testimonial slider component here */}
          </div>
        </section>

        <section className={styles.pricing}>
          <h2 className={styles.sectionTitle}>Therapy Packages</h2>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`${styles.pricingCard} ${plan.isPopular ? styles.popularPlan : ''}`}>
                <h3>{plan.name}</h3>
                <p className={styles.price}>{plan.price} <span className={styles.period}>{plan.period}</span></p>
                <ul className={styles.features}>
                  {plan.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className={styles.selectPlanButton}>Select Plan</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Elevate Your Performance?</h2>
          <p>Schedule a consultation with our sports therapy experts and start your journey to peak condition.</p>
          <button className={styles.ctaButton}>Book Your Assessment</button>
        </section>
      </div>
    </Layout>
  );
};

export default SportsTherapyPage;
