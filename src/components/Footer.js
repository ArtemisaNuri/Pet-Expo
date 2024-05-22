import React from 'react';
import './Footer.css';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import twitterIcon from '../images/twitter.png';
import emailIcon from '../images/mail.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <a href="https://www.facebook.com/petexpo" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/petexpo" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://twitter.com/petexpo" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="mailto:info@petexpo.com">
        <img src={emailIcon} alt="Email" />
      </a>
    </footer>
  );
};

export default Footer;
