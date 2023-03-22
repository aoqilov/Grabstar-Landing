import React from "react";
import "../assets/style/component/footer.scss";
// images
import foLogoImg from "../assets/img/foLogo.png";
import foInstaSvg from "../assets/img/svg/instagram 2.svg";
import foFacebook from "../assets/img/svg/Shape.svg";
import foTwiter from "../assets/img/svg/Shape-1.svg";
import foCubic from "../assets/img/exCubc.png";
import foTolqinImg from "../assets/img/foTolqin.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__box">
          <div className="footer-cubic">
            <img src={foCubic} alt="" />
          </div>
          <div className="footer-tolqin">
            <img src={foTolqinImg} alt="" />
          </div>
          <div className="footer-logo">
            <div className="logo-box">
              <img src={foLogoImg} alt="" />
            </div>
            <div className="logo-social">
              <div className="icon black">
                <img src={foInstaSvg} alt="" />
              </div>
              <div className="icon">
                <img src={foFacebook} alt="" />
              </div>
              <div className="icon">
                <img src={foTwiter} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <ul>
              About Us
              <li>Our Company</li>
              <li>Blog</li>
              <li>Blog</li>
              <li>Press Center</li>
              <li>Contact</li>
            </ul>
            <ul>
              comunity
              <li>Support Center</li>
              <li>Freelancer</li>
              <li>Reviews</li>
              <li> Log In</li>
              <li>Sign Up</li>
            </ul>
            <ul>
              Business
              <li>Grabstar</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Template</li>
              <li>Find Job</li>
            </ul>
          </div>
        </div>
        <div className="footer__down">
          <div className="top-line"></div>
          <div className="since">
            <p>Copyright 2010 - 2021 Ofspace</p>
            <p>Privacy Policy I Website Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
