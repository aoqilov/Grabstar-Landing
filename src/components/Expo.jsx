import React from "react";
import "../assets/style/component/expo.scss";
import exCubcImg from "../assets/img/exCubc.png";
import ex1Img from "../assets/img/ex1.svg";
import exLineSvg from "../assets/img/svg/exLine.svg";

const Expo = () => {
  return (
    <div>
      <div className="expo">
        <img src={exCubcImg} alt="" className="cubic" />
        <div className="expo__box">
          <div className="expo__cards">
            <div className="card intro">
              <h1 className="intro-title">Explore the Marketplace</h1>
              <p>
                We make it easy to work with professional, creative experts from
                around the world
              </p>
            </div>
            <div className="card ">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card">
              <img src={ex1Img} alt="" />
              <h1>Graphic Design</h1>
              <p>12,437 Jobs</p>
            </div>
            <div className="card exit">
              <h1>50+ Categories You can Expolere</h1>
              <img src={exLineSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expo;
