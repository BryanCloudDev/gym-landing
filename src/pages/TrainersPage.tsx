import React, { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/TrainersPage.module.css";
import { IconQuote } from "@tabler/icons-react";
import bryan from "../assets/images/bryan.png";
import dani from "../assets/images/dani.png";
import diego from "../assets/images/diego.png";
import rene from "../assets/images/rene.png";
import rob from "../assets/images/rob.png";

interface TrainerProps {
  name: string;
  image: string;
  specialization: string;
  description: string;
  quote: string;
}

const Trainer: React.FC<TrainerProps> = ({ name, image, specialization, description, quote }) => (
  <div className={styles.trainerCard}>
    <div className={styles.trainerImageContainer}>
      <img src={image} alt={name} className={styles.trainerImage} />
    </div>
    <div className={styles.trainerInfo}>
      <h3 className={styles.trainerName}>{name}</h3>
      <p className={styles.trainerSpecialization}>{specialization}</p>
      <p className={styles.trainerDescription}>{description}</p>
      <div className={styles.trainerQuote}>
        <IconQuote size={24} className={styles.quoteIcon} />
        <p>{quote}</p>
      </div>
    </div>
  </div>
);

const TrainersPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Trainers | The 1% Project";
  }, []);

  const trainers = [
    {
      name: "Bryan Guevara",
      image: bryan,
      specialization: "Strength & Conditioning",
      description: "Bryan specializes in strength training and functional fitness. With over 10 years of experience, he's passionate about helping clients build strength and improve overall performance.",
      quote: "Every rep counts. Push yourself to be 1% better every day."
    },
    {
      name: "Dani Hernandez",
      image: dani,
      specialization: "Yoga & Flexibility",
      description: "Dani is our yoga and flexibility expert. Her classes focus on improving mobility, reducing stress, and enhancing mind-body connection.",
      quote: "Flexibility is not about touching your toes, it's about expanding your limits."
    },
    {
      name: "Diego Alvarez",
      image: diego,
      specialization: "High-Intensity Interval Training",
      description: "Diego's high-energy HIIT classes are designed to push you to your limits. He's known for his motivating approach and effective fat-burning workouts.",
      quote: "The only bad workout is the one that didn't happen. Let's make every session count!"
    },
    {
      name: "Rene Flores",
      image: rene,
      specialization: "Nutrition & Weight Management",
      description: "Rene is our nutrition guru. He helps clients develop sustainable eating habits and create personalized meal plans to support their fitness goals.",
      quote: "Abs are made in the kitchen. Let's fuel your body for success!"
    },
    {
      name: "Rob Sanchez",
      image: rob,
      specialization: "Powerlifting & Olympic Weightlifting",
      description: "Rob is our powerlifting and Olympic weightlifting specialist. He coaches proper form and technique to help you lift heavier and safer.",
      quote: "Strength is not just about lifting heavy weights, it's about lifting your spirits and those around you."
    }
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>our trainers</span>
            <h1 className={styles.title}>Meet The 1% Project Team</h1>
            <p className={styles.description}>
              Our expert trainers are dedicated to helping you achieve your fitness goals. With diverse specializations and years of experience, they're here to guide you on your 1% journey.
            </p>
          </div>
        </section>

        <section className={styles.trainersSection}>
          {trainers.map((trainer, index) => (
            <Trainer key={index} {...trainer} />
          ))}
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Start Training with the Best</h2>
            <p className={styles.ctaDescription}>
              Ready to take your fitness to the next level? Our trainers are here to help you achieve your goals and become part of The 1% Project community.
            </p>
            <button className={styles.ctaButton}>Book a Session Now</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TrainersPage;
