// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <button 
            className={styles.ctaButton} 
            onClick={() => window.location.href = '/signup'}
          >
            JOIN US
          </button>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <h3>Gym Access</h3>
            <p>Unlimited use of our state-of-the-art equipment.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Personal Training</h3>
            <p>Work one-on-one with certified trainers.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Home Visits</h3>
            <p>Trainers available for in-home sessions (Platinum package).</p>
          </div>
        </div>
      </section>

      <section className={styles.packagesSection}>
        <h2>Our GYMNATION Packages</h2>
        <div className={styles.packagesContainer}>
          <div className={`${styles.packageCard} ${styles.packageRegular}`}>
            <h3>Regular</h3>
            <p>Basic gym access and standard equipment</p>
          </div>
          <div className={`${styles.packageCard} ${styles.packagePremium}`}>
            <h3>Premium</h3>
            <p>instructor booking and full gym access</p>
          </div>
          <div className={`${styles.packageCard} ${styles.packagePlatinum}`}>
            <h3>Platinum</h3>
            <p>Personal trainer,gym merch, house calls,intructor of your choice</p>
          </div>
        </div>
      </section>
      
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <h3>About Us</h3>
          <p>GYMNATION is dedicated to providing top-tier fitness experiences</p>
          <p>Contact us at: info@gymnation.com | Phone: +254718851313</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


