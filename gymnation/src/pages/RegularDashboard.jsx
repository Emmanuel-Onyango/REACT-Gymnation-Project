// src/pages/RegularDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import styles from '../styles/RegularDashboard.module.css';

const RegularDashboard = () => {
  const [userName, setUserName] = useState('Guest');
  const [branchName, setBranchName] = useState('');
  const [branchStatus, setBranchStatus] = useState('');

  useEffect(() => {
    // Display today's date
    document.getElementById("date").innerText = new Date().toDateString();

    // Load user's name
    const name = localStorage.getItem("loggedInUser");
    if (name) {
      setUserName(name);
    }

    // Initialize chart
    const ctx = document.getElementById('workoutChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Workout Duration (min)',
          data: [45, 0, 60, 0, 50],
          backgroundColor: 'rgba(0, 114, 255, 0.6)'
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Highlight today's workout
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const workoutItems = document.querySelectorAll('.calendar-section ul li');
    workoutItems.forEach(item => {
      if (item.textContent.includes(today)) {
        item.classList.add('today-highlight');
      }
    });

    // Load saved branch if exists
    const savedBranch = localStorage.getItem('userBranch');
    if (savedBranch) {
      setBranchName(savedBranch);
      setBranchStatus(`Current branch set: ${savedBranch}`);
    }
  }, []);

  const handleSaveBranch = () => {
    if (branchName.trim()) {
      localStorage.setItem('userBranch', branchName.trim());
      setBranchStatus(`Current branch set: ${branchName.trim()}`);
    } else {
      setBranchStatus('Please enter a branch/location.');
    }
  };

  return (
    <div className={styles.dashboard}>
      <nav className={styles.topNav}>
        <div className={styles.navLeft}>
          <h3>Gym Dashboard</h3>
        </div>
        <div className={styles.navRight}>
          <span style={{ color: branchStatus.includes('set') ? 'lightgreen' : 'salmon' }}>
            {branchStatus}
          </span>
        </div>
      </nav>

      <div style={{ margin: '10px 20px', textAlign: 'right' }}>
        <input 
          type="text" 
          id="branchInput" 
          placeholder="Enter your gym branch" 
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
        />
        <button id="saveBranchBtn" onClick={handleSaveBranch}>Save Branch</button>
      </div>

      <header>
        <h1>Welcome, <span>{userName}</span>!</h1>
        <p id="date"></p>
      </header>

      <section className={styles.progressSection}>
        <h2>Your Progress</h2>
        <canvas id="workoutChart" width="400" height="200"></canvas>
      </section>

      <section className={styles.calendarSection}>
        <h2>Workout Schedule</h2>
        <ul>
          <li><input type="checkbox" /> Monday - Cardio</li>
          <li><input type="checkbox" /> Wednesday - Strength</li>
          <li><input type="checkbox" /> Friday - Full Body</li>
        </ul>
      </section>

      <section className={styles.logSection}>
        <h2>Workout Log</h2>
        <form>
          <input type="text" placeholder="Workout Type" required />
          <input type="number" placeholder="Duration (mins)" required />
          <textarea placeholder="Notes..."></textarea>
          <button type="submit">Save Log</button>
        </form>
        <div className={styles.logEntries}>
          <p><strong>June 6:</strong> 45 mins Cardio - Felt great!</p>
          <p><strong>June 5:</strong> Rest day</p>
        </div>
      </section>

      <section className={styles.packageInfo}>
        <h2>Regular Package Benefits</h2>
        <ul>
          <li>Unlimited gym access</li>
          <li>Standard equipment use</li>
          <li>Locker room access</li>
        </ul>
        <p>Need more? <a href="#">Upgrade to Premium</a></p>
      </section>

      <footer>
        <a href="#">Edit Profile</a> | <a href="#">Log Out</a>
      </footer>
    </div>
  );
};

export default RegularDashboard;