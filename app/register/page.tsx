'use client';

import React, { useState } from 'react';

const register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    gender: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Registration successful');
      } else {
        setMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      setMessage('An error occurred during registration');
    }
  };

  return (
    <>
    <head>
        
    <title>Courses | Education</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />

    {/* CSS files */}
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/animate.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
    <div className="login-body">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="logo-login">
            <img src="assets/img/logo/loder.png" alt="Logo" />
          </div>
          <h2>Registration Here</h2>
          <div className="row">
            <div className="col">
              <div className="form-input">
                <label>First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-input">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col color">
              <label>Gender:</label>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-input">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-input">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-input">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="btn col">
            <button type="submit">Register</button>
          </div>
          <a href="signin" className="registration">
            Login
          </a>
          {message && <div className="alert">{message}</div>}
        </div>
      </form>
    </div>
    </>
  );
};

export default register ;
