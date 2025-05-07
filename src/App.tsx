import HeroSection from './components/HeroSection';
import Features from './components/Features';
import PersonalTraining from './components/PersonalTraining';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import styles from './styles/App.module.css';

function App() {
  return (
     <div className={styles.app}>
      <Navbar />
      <HeroSection />
      <Features />
      <PersonalTraining />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
