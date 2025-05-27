import {
  IconDeviceLaptop,
  IconCalendar,
  IconUsers,
  IconChartBar,
  IconClock,
} from "@tabler/icons-react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/OnlineTrainingPage.module.css";
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

const OnlineTrainingPage: React.FC = () => {
  const benefits = [
    {
      icon: <IconDeviceLaptop stroke={2} size={48} />,
      title: "Virtual Workouts",
      description:
        "Access personalized training sessions from anywhere, anytime, with our expert trainers via video calls.",
    },
    {
      icon: <IconCalendar stroke={2} size={48} />,
      title: "Flexible Scheduling",
      description:
        "Book your online sessions at times that suit your lifestyle, with 24/7 availability.",
    },
    {
      icon: <IconUsers stroke={2} size={48} />,
      title: "Community Support",
      description:
        "Join our online community of like-minded individuals for motivation, tips, and challenges.",
    },
    {
      icon: <IconChartBar stroke={2} size={48} />,
      title: "Progress Tracking",
      description:
        "Monitor your improvements with our digital tracking system, accessible from any device.",
    },
    {
      icon: <IconClock stroke={2} size={48} />,
      title: "On-Demand Content",
      description:
        "Access a library of workout videos, nutrition guides, and wellness resources anytime.",
    },
  ];

  useEffect(() => {
    document.title = "Online Training";
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>online training</span>
            <h1 className={styles.title}>
              Achieve Your Fitness Goals from Anywhere
            </h1>
            <p className={styles.description}>
              Experience the convenience and effectiveness of our online
              training programs. Whether you're at home, traveling, or prefer
              digital coaching, our expert trainers will guide you through
              personalized workouts designed to help you reach your fitness
              goals.
            </p>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>why choose online</span>
            Benefits of Online Training
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
            Your Online Training Journey
          </h2>
          <ol className={styles.processList}>
            <li>
              <h3>Virtual Consultation</h3>
              <p>
                Schedule a video call with one of our trainers to discuss your
                goals, fitness history, and any health concerns.
              </p>
            </li>
            <li>
              <h3>Digital Fitness Assessment</h3>
              <p>
                Complete an online assessment to determine your current fitness
                level and baseline measurements.
              </p>
            </li>
            <li>
              <h3>Personalized Program Design</h3>
              <p>
                Receive a customized workout and nutrition plan tailored to your
                goals, available equipment, and schedule.
              </p>
            </li>
            <li>
              <h3>Virtual Training Sessions</h3>
              <p>
                Engage in live, one-on-one video sessions with your trainer,
                focusing on proper form, technique, and progressive overload.
              </p>
            </li>
            <li>
              <h3>Digital Progress Tracking</h3>
              <p>
                Log your workouts and track your progress using our online
                platform or mobile app.
              </p>
            </li>
            <li>
              <h3>Continuous Online Support</h3>
              <p>
                Stay connected with your trainer through messaging, email
                support, and our online community forum.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.pricing}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>online packages</span>
            Choose Your Digital Path
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
            <h2 className={styles.ctaTitle}>
              Ready to Start Your Online Journey?
            </h2>
            <p className={styles.ctaDescription}>
              Take the first step towards achieving your fitness goals from
              anywhere. Schedule a free virtual consultation with one of our
              expert trainers today and start your online training journey.
            </p>
            <button className={styles.ctaButton}>
              Schedule Your Free Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OnlineTrainingPage;
