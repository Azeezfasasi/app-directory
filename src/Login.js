import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'pass1234') {
      console.log('Login successful');
      navigate('/appdirectory');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;