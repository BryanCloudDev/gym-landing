import React, { useEffect } from "react";

import PersonalTraining from "./components/PersonalTraining";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import styles from "./styles/App.module.css";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <PersonalTraining />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
