import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-icons">
            <a href="https://www.linkedin.com/in/karina-lage/">
                <BsLinkedin/> 
            </a>
            <a href="https://github.com/kaalage">
                <BsGithub />  
            </a>
            <a href="https://br.pinterest.com/karinar_lage/">
                <BsPinterest />   
            </a>
            <a href="https://www.instagram.com/kaalage/">
                <BsInstagram />   
            </a>
        </div>
        <div className="copyright">
            <p>&copy; Karina Lage 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;