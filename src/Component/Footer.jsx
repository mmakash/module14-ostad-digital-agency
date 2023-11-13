import React from "react";
import { AiFillFacebook, AiFillTwitterSquare,AiFillLinkedin,AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white">
        <nav>
          <header className="footer-title font-bold text-lg">Web Logo</header>
          <p>Some footer text about the<br/> Agency. Just a little description to<br/> help people understand you better</p>
          <div className="flex">
             <AiFillFacebook className="text-3xl"/>
             <AiFillTwitterSquare className="text-3xl"/>
             <AiFillLinkedin className="text-3xl"/>
             <AiFillInstagram className="text-3xl"/>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Quick Links</header>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
        </nav>
        <nav>
          <header className="footer-title">Address</header>
          <p>Design Agency Head Office. <br/>Airport Road<br/> United Arab Emirate</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
