import React from "react";
import "../assets/style/component/collect.scss";
// images
import colBoyImg from "../assets/img/colBoy.png";
import colFirstImg from "../assets/img/colFirst.png";
import colSecondImg from "../assets/img/colSecond.png";
import colRedImg from "../assets/img/colRed.png";
import colYellowImg from "../assets/img/colYellow.png";
import colStarImg from "../assets/img/colStar.png";
import colLogoImg from "../assets/img/colLogo.png";

const Collect = () => {
  return (
    <div>
      <div className="collect">
        <div className="collect__infobox">
          <h1 className="info-title">
            Collect Reviews from Your Existing Clients.
          </h1>
          <p className="info-text">
            To get reviews on, encourage your client to spread the word about
            your service. Verify your business so your information is eligible
            to appear on Maps.
          </p>
          <button>How it Works</button>
        </div>
        <div className="collect__imgbox">
          <img className="mainBoyimg" src={colBoyImg} alt="" />
          <div className="user__card">
            <div className="card__box">
              <div className="user-logo">
                <img src={colLogoImg} alt="" />
              </div>
              <div className="first-coment">
                <img src={colFirstImg} alt="" />
                <div className="name">
                  <h6>Review request by</h6>
                  <h3>Mike Monterio</h3>
                </div>
                <img src={colYellowImg} alt="" className="yellow" />
              </div>
              <div className="second-coment">
                <div className="coment-info">
                  <img src={colRedImg} alt="" className="red" />
                  <h4>Hi! Paul Pankiewicz,</h4>
                  <p>
                    Thank you for your collaboration! if you are happy with my
                    service, please take a minute to review it here.
                  </p>
                  <div className="star-box">
                    <img src={colStarImg} alt="" />
                    <img src={colStarImg} alt="" />
                    <img src={colStarImg} alt="" />
                    <img src={colStarImg} alt="" />
                    <img src={colStarImg} alt="" />
                  </div>
                  <img src={colSecondImg} alt="" className="secondboy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collect;
