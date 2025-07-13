import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("loggedInUser") || "Guest";

  useEffect(() => {
    if (!localStorage.getItem("loggedInUser")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="logo">
        Welcome to <span className="green">GYM</span><span className="red">NATION</span> 💪
      </div>
      <main>
        <h1>Welcome, <span>{username}</span>!</h1>
        <p>You have successfully logged in. We're excited to have you on board!</p>
        <p>Enjoy your workout experience and start your fitness journey today.</p>
      </main>
    </div>
  );
}