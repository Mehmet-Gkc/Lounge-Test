import React from 'react';
import Logo from '../../../public/images/Loungmelogo2.png';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a href="#airports">Airports</a>
        <a href="#benefits">Membership Benefits</a>
        <a href="#app">Get the App</a>
        <a href="#business">For Business</a>
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="Lounge Me Logo" />
      </div>
      <div className="footer-contact">
        TAV Operation Services
        <br />
        0809 273 59 50
      </div>
      <div className="social-media">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#instagram">Instagram</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer