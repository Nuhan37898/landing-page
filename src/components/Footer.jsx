import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Custom CSS for footer

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            {/* Footer Links */}
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* Copyright */}
            <p className="copyright">&copy; 2024 Trip With Nuhan. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
