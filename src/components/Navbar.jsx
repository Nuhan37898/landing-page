import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand Logo or Name */}
        <a className="navbar-brand" href="#">Trip With Nuhan</a>

        {/* Toggler for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Sign Up and Login Buttons */}
        <div className="d-flex ms-auto">
          <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
