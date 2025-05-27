import React, { useEffect } from "react";
import styles from "../styles/DayPassPage.module.css";
import {
  IconClock,
  IconUsers,
  IconBarbell,
  IconSwimming,
} from "@tabler/icons-react";
import Layout from "../components/Layout";

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

const DayPassPage: React.FC = () => {
  const benefits = [
    {
      icon: <IconClock stroke={2} size={48} />,
      title: "Flexible Hours",
      description:
        "Access our gym facilities for the duration of your pass, perfect for your schedule.",
    },
    {
      icon: <IconUsers stroke={2} size={48} />,
      title: "Group or Individual",
      description:
        "Choose between solo workouts or bring friends for a group fitness experience.",
    },
    {
      icon: <IconBarbell stroke={2} size={48} />,
      title: "Full Equipment Access",
      description:
        "Enjoy unrestricted access to our state-of-the-art gym equipment during your visit.",
    },
    {
      icon: <IconSwimming stroke={2} size={48} />,
      title: "Additional Amenities",
      description:
        "Take advantage of our pool, sauna, and other premium facilities with your day pass.",
    },
  ];

  useEffect(() => {
    document.title = "Day Pass";
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>day pass</span>
            <h1 className={styles.title}>Experience Our Gym for a Day</h1>
            <p className={styles.description}>
              Whether you're visiting the area or just want to try out our
              facilities, our day pass option gives you full access to our
              premium gym experience. Get ready for an invigorating workout
              session!
            </p>
          </div>
        </section>

        <section className={styles.benefits}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>
              why choose a day pass
            </span>
            Day Pass Benefits
          </h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </section>

        <section className={styles.pricing}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>flexible options</span>
            Day Pass Pricing
          </h2>
          <div className={styles.packages}>
            <div className={styles.package}>
              <h3 className={styles.packageTitle}>Group Day Pass</h3>
              <p className={styles.packagePrice}>$200</p>
              <span className={styles.period}>for 4 people / 2 hours</span>
              <ul className={styles.packageFeatures}>
                <li>Access for 4 people</li>
                <li>2 hours gym time</li>
                <li>All equipment included</li>
                <li>Perfect for friend groups</li>
              </ul>
              <button className={styles.packageButton}>Book Now</button>
            </div>
            <div className={styles.package}>
              <h3 className={styles.packageTitle}>Duo Day Pass</h3>
              <p className={styles.packagePrice}>$45</p>
              <span className={styles.period}>for 2 people / 1 hour</span>
              <ul className={styles.packageFeatures}>
                <li>Access for 2 people</li>
                <li>1 hour gym time</li>
                <li>All equipment included</li>
                <li>Ideal for couples or buddies</li>
              </ul>
              <button className={styles.packageButton}>Book Now</button>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for a Day of Fitness?</h2>
            <p className={styles.ctaDescription}>
              Don't miss out on this opportunity to experience our world-class
              gym. Book your day pass now and start your fitness journey today!
            </p>
            <button className={styles.ctaButton}>Book Your Day Pass</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DayPassPage;
