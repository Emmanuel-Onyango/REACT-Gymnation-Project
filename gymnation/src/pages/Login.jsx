import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
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
    const storedData = localStorage.getItem(memberId);
    
    if (storedData) {
      const user = JSON.parse(storedData);
      localStorage.setItem("loggedInUser", user.name);
      localStorage.setItem("loggedInID", memberId);
      
      setLoginMsg({ text: `Welcome back, ${user.name}!`, color: 'green' });
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setLoginMsg({ text: 'Invalid Membership ID. Please try again.', color: 'red' });
    }
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <section className="login-form">
          <h2>Member Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="memberId" 
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              placeholder="Enter Membership ID" 
              required 
            />
            <button type="submit">Log In</button>
          </form>
          <p id="loginMsg" style={{ color: loginMsg.color }}>
            {loginMsg.text}
          </p>
        </section>
      </div>
    </>
  );
}