import React from "react";

const HiredevsCard = ({ order, img, devName, devJob, rating, imgStar }) => {
  return (
    <div className={`dev ${order}`}>
      <div className="dev-imgbox">
        <img src={img} alt="sad" />
      </div>
      <div className="infobox-dev">
        <span></span>
        <div className="text__dev">
          <h5>{devName}</h5>
          <div className="text-rate">
            <p>{devJob}</p>
            <div className="rate-box">
              <img src={imgStar} alt="sa" />
              <p className="rate">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiredevsCard;
