import { useEffect } from "react";

import ServiceSection from "../components/ServiceSection";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <HeroSection />
      <Features />
      <ServiceSection
        title="Personal Training Excellence"
        subtitle="Transform Your Fitness"
        description="Experience personalized training sessions tailored to your goals. Our expert trainers will guide you through customized workouts, ensuring proper form and maximum results."
        linkTo="/personal-training"
        buttonText="Start Training"
        backgroundColor="#B81414"
      />
      <ServiceSection
        title="Sports Therapy & Recovery"
        subtitle="Professional Care"
        description="Get back to peak performance with our specialized sports therapy services. Our experienced therapists provide targeted treatment to help you recover from injuries and prevent future ones."
        linkTo="/sports-therapy"
        buttonText="Book Session"
        backgroundColor="#B81414"
      />
      <ServiceSection
        title="Online Training Programs"
        subtitle="Train Anywhere"
        description="Access professional workout guidance from anywhere. Our online training programs offer flexibility while maintaining the quality of personal training through detailed video instructions and progress tracking."
        linkTo="/online-training"
        buttonText="Get Started"
        backgroundColor="#B81414"
      />
      <ServiceSection
        title="Day Pass"
        subtitle="Flexible Fitness"
        description="Experience our state-of-the-art facilities and diverse range of equipment with our convenient day pass option. Perfect for travelers or those wanting to try out our gym before committing to a membership."
        linkTo="/day-pass"
        buttonText="Get Day Pass"
        backgroundColor="#B81414"
      />
      <ServiceSection
        title="Nutrition Plans"
        subtitle="Fuel Your Success"
        description="Transform your diet with personalized nutrition plans. Our expert nutritionists will create a customized meal plan that complements your training and helps you achieve your fitness goals faster."
        linkTo="/nutrition-plans"
        buttonText="Get Your Plan"
        backgroundColor="#B81414"
      />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;
