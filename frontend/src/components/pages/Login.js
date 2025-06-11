import React from 'react';
import ResponsiveAppBar from '../navbar/Navbar';
import './Login.css'; // Link the CSS file

export default function Login() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="login-button" />
          </div>
        </form>
      </div>
    </div>
  );
}
