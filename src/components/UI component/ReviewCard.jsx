import React from "react";
import reImgStar from "../../assets/img/reStar.png";
import "../../assets/style/UI component/reviewCard.scss";

const ReviewCard = ({
  userImg,
  userName,
  userJob,
  userComent,
  userText,
  star,
}) => {
  return (
    <>
      <div className="card-review">
        <div className="top__info">
          <img src={userImg} alt="" />
          <div className="name-top">
            <h2>{userName}</h2>
            <p>{userJob}</p>
          </div>
        </div>
        <div className="midlle__info">
          <h1>{userComent}</h1>
          <p>{userText}</p>
        </div>
        <div className="bottom__starbox">
          {star.map((_, idx) => {
            return <img src={reImgStar} alt="as" key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
