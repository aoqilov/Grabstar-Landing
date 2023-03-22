import React from "react";

const ExpoCard = ({ img, cardName, cardPtsh }) => {
  return (
    <>
      <div className="card-expo">
        <img src={img} alt="das" />
        <h1>{cardName}</h1>
        <p>{cardPtsh} Jobs</p>
      </div>
    </>
  );
};

export default ExpoCard;
