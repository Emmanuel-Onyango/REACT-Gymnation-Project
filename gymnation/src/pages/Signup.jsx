// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/Signup.module.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generatedID, setGeneratedID] = useState('');
  const navigate = useNavigate();

  const registerUser = () => {
    const userId = "USER-" + Math.floor(100000 + Math.random() * 900000);
    const userData = { name, email, password };
    
    localStorage.setItem(userId, JSON.stringify(userData));
    localStorage.setItem("loggedInUser", name);
    localStorage.setItem("loggedInID", userId);
    
    setGeneratedID(`Welcome, ${name}! Your Membership ID is ${userId}`);
    
    setTimeout(() => {
      navigate('/packageselection');
    }, 6000);
  };

  return (
    <div>
      <Header />
      <div className={styles.signupPage}>
        <section className={styles.signupForm}>
          <h2>Create Your Account</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}>
            <input 
              type="text" 
              id="name" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Create Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit">Sign Up</button>
          </form>
          {generatedID && (
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{generatedID}</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Signup;