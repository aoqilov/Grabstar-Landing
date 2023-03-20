import React from "react";

// images
import navlogoImg from "../assets/img/navlogo.png";
import navBurgerSvg from "../assets/img/navmenu.svg";
import heBackImg from "../assets/img/headerMain.png";
import heInstaImg from "../assets/img/Insta.png";
import he10Img from "../assets/img/10K.png";
import he15Img from "../assets/img/15K.png";
import heMesageImg from "../assets/img/Messenger.png";
// scss
import "../assets/style/component/header.scss";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav__logo">
            <img src={navlogoImg} alt="nav logo" />
          </div>
          <ul className="nav__menu">
            <li className="nav__link">Home</li>
            <li className="nav__link">Rate a Client</li>
            <li className="nav__link">Rate a Freelancer</li>
            <li className="nav__link">Log In</li>
            <p className="nav__account">Create Account</p>
          </ul>
          <div className="nav__burger">
            <img src={navBurgerSvg} alt="burger" />
          </div>
        </nav>
        <div className="main__double">
          <div className="header__info">
            <h1 className="info-title">
              90% Clients Hire Freelancer with Better Reviews
            </h1>
            <button id="btn-green">Create Profile</button>
          </div>
          <div className="header__images">
            <img className="headerBack" src={heBackImg} alt="" />

            <img src={he10Img} alt="i1" className="icon1" />
            <img src={he15Img} alt="i2" className="icon2" />
            <img src={heInstaImg} alt="i3" className="icon3" />
            <img src={heMesageImg} alt="i4" className="icon4" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
