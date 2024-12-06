'use client';

import React, { useState } from 'react';


const signin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        Swal.fire({
          title: 'Login Successful!',
          icon: 'success',
        });
        if (result.role === 'user') {
          window.location.href = '/user/index';
        } else if (result.role === 'expert') {
          window.location.href = '/expert/index';
        } else if (result.role === 'admin') {
          window.location.href = '/admin/index';
        }
      } else {
        Swal.fire({
          title: result.message || 'Login failed. Try again!',
          icon: 'error',
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: 'An error occurred during login.',
        icon: 'error',
      });
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
    <main className="login-body">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="logo-login">
            <a href="#"><img src="assets/img/logo/loder.png" alt="Logo" /></a>
          </div>
          <h2>Login Here</h2>
          <div className="form-input">
            <label htmlFor="username">User Name</label>
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn col ">
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          <a href="#" className="registration">Forget Password</a>
          <a href="register" className="registration">Registration</a>
        </div>
      </form>
    </main>
    </>
  );
};

export default signin;
