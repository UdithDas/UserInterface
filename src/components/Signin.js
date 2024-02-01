// Signin.js
import React, { useState } from 'react';
import './Auth.css';

const Signin = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signin logic here
    console.log('Signin form submitted:', formData);
  };

  return (
    <div className="auth-container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Signin</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={() => toggleForm('sign-up')}>Signup</button>
      </p>
    </div>
  );
};

export default Signin;
