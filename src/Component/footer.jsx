import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-curve"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Portfolio<span className="purpal">.</span>
            </h2>
            <p className="text-gray">
              Creating beautiful, responsive and user-friendly websites is my
              passion. Let's turn your ideas into reality!
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <FaEnvelope className="purpal" />
                <span>your.email@example.com</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="purpal" />
                <span>+1 234 567 890</span>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="purpal" />
                <span>Your City, Country</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="purpal">Quick Links</h4>
              <ul className="footer-nav">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="purpal">Services</h4>
              <ul className="footer-nav">
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services">Mobile Apps</a>
                </li>
                <li>
                  <a href="#services">Consulting</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="purpal">Stay Connected</h4>
            <p className="text-gray">
              Follow me on social media and stay updated with my latest projects
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p className="text-gray">
              &copy; {currentYear} <span className="purpal">Your Name</span>.
              All rights reserved.
            </p>
          </div>
          <div className="footer-made-with">
            <p className="text-gray">
              Made with <FaHeart className="purpal heart-icon" /> using{" "}
              <span className="purpal">React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
