import React from "react";
import Logo from "../Assets/logo asiste (1).png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Categorias</span>
          <span>All</span>
          <span>Utilities</span>
          <span>Taxex</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>Resources</span>
          <span>User guides</span>
          <span>Plataform Status</span>
         
        </div>
        <div className="footer-section-columns">
          <span>Company</span>
          <span>Join us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
