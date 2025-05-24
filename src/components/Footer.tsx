import { Link } from 'react-router';
import styles from '../styles/Footer.module.css';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

const Footer = () => {
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#trainers">Trainers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
                <a href="#group-classes">Sports Therapy</a>
              </li>
              <li>
                <a href="#nutrition">Online Training</a>
              </li>
              <li>
                <a href="#fitness">Nutrition Plans</a>
              </li>
              <li>
                <a href="#cardio">Day Pass</a>
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
