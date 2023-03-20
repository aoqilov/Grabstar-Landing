import React from "react";
import "../assets/style/component/review.scss";
// images
import reBoyImg from "../assets/img/reBoy.png";
import reGirlImg from "../assets/img/reGirl.png";
import reJorgeImg from "../assets/img/reJorge.png";
import reStarImg from "../assets/img/reStar.png";
import reLine from "../assets/img/reLine.png";

const Review = () => {
  return (
    <div>
      <div className="review">
        <img src={reLine} alt="" className="reline" />
        <div className="main__title">
          <h1 className="review-title">Check Out Recent Review</h1>
        </div>
        <div className="review__cardbox">
          <div className="cards">
            <div className="card">
              <div className="top__info">
                <img src={reBoyImg} alt="" />
                <div className="name-top">
                  <h2>James Conway</h2>
                  <p>Developer</p>
                </div>
              </div>
              <div className="midlle__info">
                <h1>Awesome Work!!</h1>
                <p>
                  This is unbelievable. He is too fast and he work with details.
                  I will hire him again.
                </p>
              </div>
              <div className="bottom__starbox">
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
              </div>
            </div>
            <div className="card">
              <div className="top__info">
                <img src={reJorgeImg} alt="" />
                <div className="name-top">
                  <h2>JJorge Mclaughli</h2>
                  <p>Digital Marketer</p>
                </div>
              </div>
              <div className="midlle__info">
                <h1>Perfection! Went above!</h1>
                <p>
                  This is unbelievable. He is too fast and he work with details.
                  I will hire him again.
                </p>
              </div>
              <div className="bottom__starbox">
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
              </div>
            </div>
            <div className="card">
              <div className="top__info">
                <img src={reGirlImg} alt="" />
                <div className="name-top">
                  <h2>Augustine Watkins</h2>
                  <p>UX/ UI Designer</p>
                </div>
              </div>
              <div className="midlle__info">
                <h1>Awesome UX/ UI designer</h1>
                <p>
                  This is unbelievable. He is too fast and he work with details.
                  I will hire him again.
                </p>
              </div>
              <div className="bottom__starbox">
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
                <img src={reStarImg} alt="ss" />
              </div>
            </div>
          </div>
          <div className="pagination__box">
            <div className="pag">
              <span className="crcle"></span>
              <span className="crcle active"></span>
              <span className="crcle"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
