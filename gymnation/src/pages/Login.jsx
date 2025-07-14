
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [memberId, setMemberId] = useState('');
  const [loginMsg, setLoginMsg] = useState({ text: '', color: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const lastId = sessionStorage.getItem('lastGeneratedId');
    if (lastId) {
      setMemberId(lastId);
      sessionStorage.removeItem('lastGeneratedId');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem(memberId.trim());

    if (storedData) {
      const user = JSON.parse(storedData);
      localStorage.setItem("loggedInUser", user.name);
      localStorage.setItem("loggedInID", memberId.trim());

      setLoginMsg({ text: `Welcome back, ${user.name}!`, color: 'green' });

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      setLoginMsg({ text: 'Invalid Membership ID. Please try again.', color: 'red' });
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.loginPage}>
        <section className={styles.loginForm}>
          <h2>Member Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="memberId" 
              placeholder="Enter Membership ID" 
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              required 
            />
            <button type="submit">Log In</button>
          </form>
          <p id="loginMsg" style={{ 
            marginTop: '20px', 
            fontWeight: 'bold',
            color: loginMsg.color 
          }}>
            {loginMsg.text}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;