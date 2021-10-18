import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> Get help</h4>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Policy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online Service</h4>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Policy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
