import {
  IconApple,
  IconScale,
  IconChartBar,
  IconPill,
  IconClipboardList,
  IconBarbell,
  IconHeartbeat,
  IconBrain,
  IconActivity,
  IconAward,
} from "@tabler/icons-react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/NutritionPlansPage.module.css";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <div className={styles.service}>
    <div className={styles.serviceIcon}>{icon}</div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
  </div>
);

const NutritionPlansPage: React.FC = () => {
  const services = [
    {
      icon: <IconApple stroke={2} size={48} />,
      title: "Personalized Nutrition Plans",
      description:
        "Customized meal plans tailored to your specific goals, whether it's fat loss, muscle gain, or sports performance.",
    },
    {
      icon: <IconScale stroke={2} size={48} />,
      title: "Body Composition Analysis",
      description:
        "Comprehensive evaluation using bioimpedance and skinfold measurements to track your progress accurately.",
    },
    {
      icon: <IconChartBar stroke={2} size={48} />,
      title: "Performance Optimization",
      description:
        "Nutritional strategies to enhance your physical performance and recovery for various sports and activities.",
    },
    {
      icon: <IconPill stroke={2} size={48} />,
      title: "Guided Supplementation",
      description:
        "Expert advice on supplements like proteins, creatine, and omega-3s to support your fitness journey.",
    },
    {
      icon: <IconClipboardList stroke={2} size={48} />,
      title: "Monthly Follow-ups",
      description:
        "Regular check-ins and adjustments to your nutrition plan to ensure continued progress towards your goals.",
    },
  ];

  useEffect(() => {
    document.title = "Nutrition Plans";
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>nutrition plans</span>
            <h1 className={styles.title}>Fuel Your Body, Achieve Your Goals</h1>
            <p className={styles.description}>
              Unlock your full potential with our expert nutrition guidance.
              Whether you're aiming to lose fat, gain muscle, or enhance your
              athletic performance, our personalized nutrition plans will help
              you reach your goals and maintain a healthy lifestyle.
            </p>
          </div>
        </section>

        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>our services</span>
            Comprehensive Nutrition Support
          </h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </section>

        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>training benefits</span>
            Expert Training Programs
          </h2>
          <div className={styles.servicesGrid}>
            <Service
              icon={<IconBarbell stroke={2} size={48} />}
              title="Customized Workouts"
              description="Personalized training programs designed specifically for your goals, fitness level, and schedule."
            />
            <Service
              icon={<IconHeartbeat stroke={2} size={48} />}
              title="Improved Fitness"
              description="Enhance your cardiovascular health, strength, and overall physical performance through structured training."
            />
            <Service
              icon={<IconBrain stroke={2} size={48} />}
              title="Expert Guidance"
              description="Learn proper form and technique from experienced trainers to maximize results and prevent injuries."
            />
            <Service
              icon={<IconActivity stroke={2} size={48} />}
              title="Strength Development"
              description="Progressive resistance training to build lean muscle, increase strength, and improve body composition."
            />
            <Service
              icon={<IconAward stroke={2} size={48} />}
              title="Goal Achievement"
              description="Structured progression and accountability to help you reach and exceed your fitness goals."
            />
          </div>
        </section>

        <section className={styles.process}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>how it works</span>
            Your Nutrition Journey
          </h2>
          <ol className={styles.processList}>
            <li>
              <h3>Initial Consultation</h3>
              <p>
                Meet with our nutrition expert to discuss your goals, dietary
                preferences, and any health concerns.
              </p>
            </li>
            <li>
              <h3>Body Composition Analysis</h3>
              <p>
                Undergo a comprehensive assessment to determine your current
                body composition and metabolic rate.
              </p>
            </li>
            <li>
              <h3>Customized Plan Creation</h3>
              <p>
                Receive a personalized nutrition plan tailored to your goals,
                lifestyle, and dietary needs.
              </p>
            </li>
            <li>
              <h3>Education and Guidance</h3>
              <p>
                Learn about proper nutrition, portion control, and how to make
                sustainable dietary changes.
              </p>
            </li>
            <li>
              <h3>Regular Follow-ups</h3>
              <p>
                Engage in monthly check-ins to track progress, make adjustments,
                and ensure you're on track to meet your goals.
              </p>
            </li>
            <li>
              <h3>Ongoing Support</h3>
              <p>
                Receive continuous guidance and motivation from our nutrition
                experts throughout your journey.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.pricing}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionSubtitle}>our plans</span>
            Choose Your Perfect Plan
          </h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingBox}>
              <h3 className={styles.pricingTitle}>Nutrition Consultation</h3>
              <p className={styles.pricingPrice}>$25</p>
              <span className={styles.pricingPeriod}>per session</span>
              <ul className={styles.pricingFeatures}>
                <li>Personalized nutrition assessment</li>
                <li>Body composition analysis</li>
                <li>Customized meal planning</li>
                <li>Goal-setting and strategy discussion</li>
                <li>Follow-up recommendations</li>
              </ul>
              <button className={styles.pricingButton}>
                Book Consultation
              </button>
            </div>

            <div className={styles.pricingBox}>
              <h3 className={styles.pricingTitle}>Training Plan</h3>
              <p className={styles.pricingPrice}>$50</p>
              <span className={styles.pricingPeriod}>per month</span>
              <ul className={styles.pricingFeatures}>
                <li>Personalized workout program</li>
                <li>Exercise technique guidance</li>
                <li>Progressive overload planning</li>
                <li>Weekly program adjustments</li>
                <li>Training support and tracking</li>
              </ul>
              <button className={styles.pricingButton}>Start Training</button>
            </div>

            <div className={`${styles.pricingBox} ${styles.featured}`}>
              <h3 className={styles.pricingTitle}>Complete Package</h3>
              <p className={styles.pricingPrice}>$70</p>
              <span className={styles.pricingPeriod}>per month</span>
              <ul className={styles.pricingFeatures}>
                <li>Full nutrition consultation</li>
                <li>Personalized meal plans</li>
                <li>Custom training program</li>
                <li>Weekly adjustments and support</li>
                <li>Progress tracking and analysis</li>
                <li>Priority scheduling</li>
              </ul>
              <button className={styles.pricingButton}>Get Started</button>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Nutrition?
            </h2>
            <p className={styles.ctaDescription}>
              Take the first step towards a healthier you. Schedule your
              nutrition consultation today and start your journey to better
              health and improved performance.
            </p>
            <button className={styles.ctaButton}>
              Schedule Your Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NutritionPlansPage;
