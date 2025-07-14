// src/pages/PackageSelection.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PackageSelection.module.css';

const PackageSelection = () => {
  const [userName, setUserName] = useState('Guest');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("loggedInUser");
    const storedId = localStorage.getItem("loggedInID");

    if (!storedName || !storedId) {
      navigate('/login');
    } else {
      setUserName(storedName);
      setUserId(storedId);
    }
  }, [navigate]);

  const handlePackageSelect = (selectedPackage) => {
    const userData = JSON.parse(localStorage.getItem(userId));
    userData.package = selectedPackage;
    localStorage.setItem(userId, JSON.stringify(userData));

    if (selectedPackage === "Regular") {
      navigate('/regulardash');
    } else if (selectedPackage === "Premium") {
      navigate('/premiumdashboard');
    } else if (selectedPackage === "Platinum") {
      navigate('/platinumpage');
    } else {
      alert("Unknown package. Please try again.");
    }
  };

  return (
    <div className={styles.packageSelection}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.packageTitleMain}>Choose Your Package</h1>
      <p className={styles.usernameBanner}>Hello, <span>{userName}</span> 👋</p>

      <div className={styles.packagesContainer}>
        <div className={`${styles.packageCard} ${styles.packageRegular}`}>
          <h2 className={styles.packageTitle}>Regular</h2>
          <p className={styles.packageDescription}>Basic gym access and standard equipment.</p>
          <button 
            className={styles.selectBtn} 
            onClick={() => handlePackageSelect("Regular")}
          >
            Select
          </button>
        </div>
        <div className={`${styles.packageCard} ${styles.packagePremium}`}>
          <h2 className={styles.packageTitle}>Premium</h2>
          <p className={styles.packageDescription}>Instructor booking and full gym access</p>
          <button 
            className={styles.selectBtn} 
            onClick={() => handlePackageSelect("Premium")}
          >
            Select
          </button>
        </div>
        <div className={`${styles.packageCard} ${styles.packagePlatinum}`}>
          <h2 className={styles.packageTitle}>Platinum</h2>
          <p className={styles.packageDescription}>Personal trainer, gym merch, house calls, instructor of your choice.</p>
          <button 
            className={styles.selectBtn} 
            onClick={() => handlePackageSelect("Platinum")}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;