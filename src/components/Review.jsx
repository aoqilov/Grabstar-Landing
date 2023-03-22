import React from "react";
import "../assets/style/component/review.scss";
// images
import reBoyImg from "../assets/img/reBoy.png";
import reGirlImg from "../assets/img/reGirl.png";
import reJorgeImg from "../assets/img/reJorge.png";
import reLine from "../assets/img/reLine.png";
import ReviewCard from "./UI component/ReviewCard";

const Review = () => {
  const reviewCards = [
    {
      id: 1,
      userImg: reBoyImg,
      userName: "James Conway",
      userJob: "Developer",
      userComent: "Awesome Work!!",
      userText:
        "This is unbelievable. He is too fast and he work with details. Iwill hire him again.",
      star: Array(5).fill(0),
    },
    {
      id: 2,
      userImg: reGirlImg,
      userName: "Augustine Watkins",
      userJob: "UX/ UI Designer",
      userComent: "Awesome UX/ UI designer",
      userText:
        "Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail",
      star: Array(1).fill(0),
    },
    {
      id: 3,
      userImg: reJorgeImg,
      userName: "Jorge Mclaughlin",
      userJob: "Digital Marketer",
      userComent: "Perfection! Went above!",
      userText:
        "Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail",
      star: Array(3).fill(0),
    },
  ];

  return (
    <div>
      <div className="review">
        <img src={reLine} alt="" className="reline" />
        <div className="main__title">
          <h1 className="review-title">Check Out Recent Review</h1>
        </div>
        <div className="review__cardbox">
          <div className="cards">
            {reviewCards.map((elem) => {
              return (
                <ReviewCard
                  key={elem.id}
                  userImg={elem.userImg}
                  userName={elem.userName}
                  userJob={elem.userJob}
                  userComent={elem.userComent}
                  userText={elem.userText}
                  star={elem.star}
                />
              );
            })}
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
  );
};

export default Review;
