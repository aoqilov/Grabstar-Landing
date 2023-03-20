import React from "react";
import "../assets/style/component/partner.scss";
// images
import paDribbbleImg from "../assets/img/Dribbble.png";
import paBehanceImg from "../assets/img/Behance.png";
import paInstagramImg from "../assets/img/Instagram.png";
import paGithubImg from "../assets/img/Github.png";
import paStackImg from "../assets/img/Stackoverflow.png";

const Partner = () => {
  return (
    <div>
      <div className="partners">
        <img src={paDribbbleImg} alt="link" />
        <img src={paBehanceImg} alt="link" />
        <img src={paInstagramImg} alt="link" />
        <img src={paGithubImg} alt="link" />
        <img src={paStackImg} alt="link" />
      </div>
    </div>
  );
};

export default Partner;
