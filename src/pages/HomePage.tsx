import { useEffect } from "react";

import PersonalTraining from "../components/PersonalTraining";
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
      <PersonalTraining />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;
