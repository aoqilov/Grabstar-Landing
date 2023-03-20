import React from "react";
import "./../assets/style/component/hiretop.scss";
import hiCrcle from "../assets/img/hi15.png";
import hiEsher from "../assets/img/heEsher.png";
import hiLesli from "../assets/img/heLesli.png";
import hiNicola from "../assets/img/heNicola.png";
import hiWood from "../assets/img/heWood.png";
import hiStar from "../assets/img/hiStar.png";
import hiLine from "../assets/img/hiLine.png";

const Hiretop = () => {
  return (
    <div>
      <div className="hire">
        <section>
          <img src={hiLine} alt="" className="hilineImg" />
          <div className="devsbox">
            <div className="imgbox__crcle">
              <img src={hiCrcle} alt="das" />
              <div className="dev one">
                <img src={hiLesli} alt="sad" />
                <div className="info-dev">
                  <span></span>
                  <div className="dev-name">
                    <h3>Nicolas Serrano</h3>
                    <p>UI/UX Designer</p>
                  </div>
                  <div className="dev-rate">
                    <img src={hiStar} alt="" />
                    <h5>5.0</h5>
                  </div>
                </div>
              </div>
              <div className="dev two">
                <img src={hiNicola} alt="sad" />
                <div className="info-dev">
                  <span></span>
                  <div className="dev-name">
                    <h3>Nicolas Serrano</h3>
                    <p>UI/UX Designer</p>
                  </div>
                  <div className="dev-rate">
                    <img src={hiStar} alt="" />
                    <h5>5.0</h5>
                  </div>
                </div>
              </div>
              <div className="dev three">
                <img src={hiWood} alt="sad" />
                <div className="info-dev">
                  <span></span>
                  <div className="dev-name">
                    <h3>Nicolas Serrano</h3>
                    <p>UI/UX Designer</p>
                  </div>
                  <div className="dev-rate">
                    <img src={hiStar} alt="" />
                    <h5>5.0</h5>
                  </div>
                </div>
              </div>
              <div className="dev four">
                <img src={hiEsher} alt="sad" />
                <div className="info-dev">
                  <span></span>
                  <div className="dev-name">
                    <h3>Nicolas Serrano</h3>
                    <p>UI/UX Designer</p>
                  </div>
                  <div className="dev-rate">
                    <img src={hiStar} alt="" />
                    <h5>5.0</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="devs__infobox">
            <h1>Hire Our Top Rated Freelancer</h1>
            <p>
              To get reviews on, encourage your client to spread the word about
              your service. Verify your business so your information is eligible
              to appear on Maps.
            </p>
            <button>Checkout Profile</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hiretop;
