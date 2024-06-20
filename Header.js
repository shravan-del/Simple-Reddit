import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <img className="logo" src="/images/reddit-logo.png" alt="Reddit Logo" />
      </div>
      <div className="header-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
