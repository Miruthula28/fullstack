import React, {useState} from 'react';
import ResponsiveAppBar from '../navbar/Navbar';
import './Register.css';



function Register() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        const username = "";
        const fullname = "";
        const email ="";
        const phone ="";
        const password ="";
        const confirmPassword = "";
    }
  return (
    <div>
      <ResponsiveAppBar />
      <div className="register-container">
        <h1 className="register-title">Register for Managing...</h1>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="register-button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
