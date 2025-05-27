import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/AboutPage.module.css";
import aboutImage from "../assets/images/foto-about.jpeg";
import {
  IconTarget,
  IconMedal,
  IconTrophy,
  IconUsers,
  IconHeartbeat,
} from "@tabler/icons-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | The 1% Project";
  }, []);

  const features = [
    {
      icon: <IconTarget stroke={2} size={48} />,
      title: "Expert Training",
      description: "Personalized programs tailored to your unique goals with certified trainers",
    },
    {
      icon: <IconMedal stroke={2} size={48} />,
      title: "Modern Facility",
      description: "State-of-the-art equipment and technology for optimal training results",
    },
    {
      icon: <IconTrophy stroke={2} size={48} />,
      title: "Comprehensive Services",
      description: "From personal training to sports therapy and nutrition planning",
    },
    {
      icon: <IconUsers stroke={2} size={48} />,
      title: "Community Focus",
      description: "Supportive environment with like-minded individuals pursuing excellence",
    },
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>about us</span>
            <h1 className={styles.title}>The 1% Project Journey</h1>
            <p className={styles.description}>
              Welcome to The 1% Project, where we believe in the power of incremental progress
              and the pursuit of excellence. Our mission is to help you achieve your fitness goals
              through dedication, expert guidance, and a supportive community.
            </p>
          </div>
        </section>

        <section className={styles.mission}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>our mission</span>
            Empowering Your Fitness Journey
          </h2>
          <div className={styles.missionContent}>
            <div className={styles.imageContainer}>
              <img src={aboutImage} alt="The 1% Project Gym" className={styles.missionImage} />
            </div>
            <div className={styles.missionText}>
              <p>
                At The 1% Project, we believe in pushing boundaries and achieving the extraordinary. 
                Our state-of-the-art facility is designed to inspire and empower individuals to reach 
                their full potential, one percent at a time.
              </p>
              <p>
                We understand that every fitness journey is unique, which is why we offer personalized 
                training programs, expert guidance, and a supportive environment to help you succeed.
              </p>
              <div className={styles.missionHighlight}>
                <IconHeartbeat stroke={2} size={48} className={styles.missionIcon} />
                <p>Our goal is to make every 1% improvement count towards your overall success.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>why choose us</span>
            What Sets Us Apart
          </h2>
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Start Your 1% Journey Today</h2>
            <p className={styles.ctaDescription}>
              Join The 1% Project community and take the first step towards achieving your fitness goals.
              Let us help you unlock your full potential, one percent at a time.
            </p>
            <button className={styles.ctaButton}>Schedule a Free Consultation</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
