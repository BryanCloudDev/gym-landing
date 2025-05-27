import { Link, useNavigate } from "react-router";
import styles from "../styles/Footer.module.css";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import { useState } from "react";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.logo}>THE 1% PROJECT</h3>
            <p className={styles.description}>
              Transform your body and mind with our state-of-the-art facilities
              and expert trainers, be the difference.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <IconBrandFacebook stroke={1} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <IconBrandInstagram stroke={1} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Tik Tok">
                <IconBrandTiktok stroke={1} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#trainers">Trainers</a>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className={styles.navLinks}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    toggleMenu();
                    if (location.pathname !== "/") {
                      navigate("/#contact");
                    } else {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Services</h4>
            <ul className={styles.links}>
              <li>
                <Link to="/personal-training">Personal Training</Link>
              </li>
              <li>
                <Link to="/sports-therapy">Sports Therapy</Link>
              </li>
              <li>
                <Link to="/online-training">Online Training</Link>
              </li>
              <li>
                <Link to="/nutrition-plans">Nutrition Plans</Link>
              </li>
              <li>
                <Link to="/day-pass">Day Pass</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Opening Hours</h4>
            <ul className={styles.hours}>
              <li>
                <span>Monday - Friday:</span>
                <span>5:00 AM - 10:00 PM</span>
              </li>
              <li>
                <span>Saturday:</span>
                <span>8:00 AM - 2:00 PM</span>
              </li>
              <li>
                <span>Sunday:</span>
                <span>8:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} THE 1% PROJECT. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
