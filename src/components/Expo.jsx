import React from "react";
import "../assets/style/component/expo.scss";
import exCubcImg from "../assets/img/exCubc.png";
import exLineSvg from "../assets/img/svg/exLine.svg";
import ExpoCard from "./UI component/ExpoCard";
// expocardimg
import ex1Img from "../assets/img/ex1.svg";
import ex2Img from "../assets/img/svg/ex2.svg";
import ex3Img from "../assets/img/svg/ex3.svg";
import ex4Img from "../assets/img/svg/ex4.svg";
import ex5Img from "../assets/img/svg/ex5.svg";
import ex6Img from "../assets/img/svg/ex6.svg";

const Expo = () => {
  const expoCardArray = [
    {
      id: 1,
      img: ex1Img,
      cardName: "Graphic Design",
      cardPtsh: "12,437",
    },
    {
      id: 2,
      img: ex2Img,
      cardName: "Digital Marketing",
      cardPtsh: "7234",
    },
    {
      id: 3,
      img: ex3Img,
      cardName: "Content Writing",
      cardPtsh: "8,231",
    },
    {
      id: 4,
      img: ex4Img,
      cardName: "Development",
      cardPtsh: "9875",
    },
    {
      id: 5,
      img: ex5Img,
      cardName: "Data Entry",
      cardPtsh: "8,310",
    },
    {
      id: 6,
      img: ex6Img,
      cardName: "Business",
      cardPtsh: "6,123",
    },
  ];

  return (
    <div>
      <div className="expo">
        <img src={exCubcImg} alt="" className="cubic" />
        <div className="expo__box">
          <div className="expo__cards">
            <div className="card-expo intro">
              <h1 className="intro-title">Explore the Marketplace</h1>
              <p>
                We make it easy to work with professional, creative experts from
                around the world
              </p>
            </div>
            {expoCardArray.map((elem) => {
              return (
                <ExpoCard
                  key={elem.id}
                  img={elem.img}
                  cardName={elem.cardName}
                  cardPtsh={elem.cardPtsh}
                />
              );
            })}

            <div className="card-expo exit">
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
