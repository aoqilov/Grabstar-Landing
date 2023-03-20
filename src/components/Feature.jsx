import React from "react";
import "../assets/style/component/feature.scss";
// images
import feBoyImg from "../assets/img/feBoy.png";
import feLIneImg from "../assets/img/feLine.png";

const Feature = () => {
  return (
    <div>
      <div className="feature">
        <div className="feature__imgbox">
          <img src={feBoyImg} alt="feboy" />
        </div>
        <div className="feature__infobox">
          <h1>Our amazing Features Helpfull for your Business</h1>
          <div className="info__cards">
            <div className="card">
              <h2>Collect Reviews </h2>
              <p>
                Best way to collect review. Invite your client and get review
                from client.
              </p>
            </div>
            <div className="card">
              <h2>Collect Reviews </h2>
              <p>
                Best way to collect review. Invite your client and get review
                from client.
              </p>
            </div>
            <div className="card">
              <h2>Collect Reviews </h2>
              <p>
                Best way to collect review. Invite your client and get review
                from client.
              </p>
            </div>
            <div className="card">
              <h2>Collect Reviews </h2>
              <p>
                Best way to collect review. Invite your client and get review
                from client.
              </p>
            </div>
            <div className="linebox">
              <img src={feLIneImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
