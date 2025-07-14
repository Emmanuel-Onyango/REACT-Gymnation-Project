// src/pages/PlatinumPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PlatinumPage.module.css';


const PlatinumPage = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [showShopImages, setShowShopImages] = useState(false);
  const [showCoachImages, setShowCoachImages] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("loggedInUser");
    const storedUserId = localStorage.getItem("loggedInID");

    if (!storedUsername || !storedUserId) {
      navigate('/login');
    } else {
      const userData = JSON.parse(localStorage.getItem(storedUserId));
      if (!userData || userData.package !== "Platinum") {
        alert("Access restricted to Platinum members only.");
        navigate('/login');
      } else {
        setUsername(storedUsername);
        setUserId(storedUserId);
      }
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInID");
    navigate('/login');
  };

  return (
    <div>
      <header className={styles.platinumHeader}>
        <h2>Welcome, <span>{username}</span> 👑</h2>
        <button className={styles.logoutBtn} onClick={logout}>Log Out</button>
      </header>

      <h1 style={{ marginTop: '20px', textAlign: 'center' }}>Platinum Package</h1>

      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Exclusive Merchandise</h2>
          <p>
            Enjoy premium gym apparel, accessories, and branded gear available only to Platinum members.
            Get monthly drops and discounts on new arrivals.
          </p>
          <button 
            className={styles.btn} 
            onClick={() => setShowShopImages(!showShopImages)}
          >
            {showShopImages ? 'Hide Items' : 'Shop Now'}
          </button>
        </div>
        
        {showShopImages && (
          <div className={styles.shopImages}>
            <img src={tshirt} alt="T-shirt" />
            <img src={bottle} alt="Water Bottle" />
            <img src={wristband} alt="Wristband" />

          </div>
        )}

        <div className={styles.card}>
          <h2>Elite Instructors</h2>
          <p>
            Get access to one-on-one sessions with top-tier fitness instructors.
            Customized plans, check-ins, and progress tracking included.
          </p>
          <button 
            className={styles.btn} 
            onClick={() => setShowCoachImages(!showCoachImages)}
          >
            {showCoachImages ? 'Hide Coaches' : 'Meet Coaches'}
          </button>
        </div>
        
        {showCoachImages && (
          <div className={styles.coachImages}>
            <div className={styles.coachCard}>
              <img src="/images/5337caebc2d7ce5d907b3bc9696f431d.jpg" alt="Sarah Wilson" />
              <h3>Mark Wilson</h3>
              <p>Biceps and Triceps Expert</p>
            </div>
            <div className={styles.coachCard}>
              <img src="/images/8414895db3e170ea9ae4aea476dacc52.jpg" alt="John Martinez" />
              <h3>John Martinez</h3>
              <p>Strength & Conditioning</p>
            </div>
            <div className={styles.coachCard}>
              <img src="/images/eb79651891c51ed47e9533de0b4eab24.jpg" alt="Emily Chen" />
              <h3>Emily Chen</h3>
              <p>HIIT & Cardio Specialist</p>
            </div>
            <div className={styles.coachCard}>
              <img src="/images/88d11a3428462b2e143d8c4a28af7a60.jpg" alt="Mike Johnson" />
              <h3>Mike Johnson</h3>
              <p>Bodybuilding Coach</p>
            </div>
          </div>
        )}

        <div className={styles.card}>
          <h2>Remote Workouts</h2>
          <p>
            Join live and on-demand virtual workout sessions anytime, anywhere.
            Includes yoga, HIIT, strength, and more—tailored to your level.
          </p>
          <button className={styles.btn}>Start Training</button>
        </div>
      </div>
    </div>
  );
};

export default PlatinumPage;