import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      console.log('Login successful', response.data);
      localStorage.setItem('token', response.data.token); // Save token to local storage
      navigate('/');              // Redirect to homepage after successful login
    } catch (err) {
      console.error('Login error', err.response.data);
      alert("Login Failure: Invalid Email and Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="signup-link">Do not have an account?<Link to="/signup"> Signup here</Link></p>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
