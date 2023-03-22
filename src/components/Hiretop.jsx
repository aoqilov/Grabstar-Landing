import React from "react";
import "./../assets/style/component/hiretop.scss";
import hiCrcle from "../assets/img/hi15.png";
import hiEsher from "../assets/img/heEsher.png";
import hiLesli from "../assets/img/heLesli.png";
import hiNicola from "../assets/img/heNicola.png";
import hiWood from "../assets/img/heWood.png";
import hiStar from "../assets/img/hiSmallStar.png";
import hiLine from "../assets/img/hiLine.png";
import GreenBtn from "./UI component/GreenBtn";
import HiredevsCard from "./UI component/HiredevsCard";

const Hiretop = () => {
  const devs = [
    {
      id: 1,
      order: "one",
      img: hiLesli,
      name: "Leslie Alexander",
      job: "Content Writing",
      rating: "5.0",
    },
    {
      id: 2,
      order: "two",
      img: hiNicola,
      name: "Nicolas Serrano",
      job: "UI/UX Designer",
      rating: "5.0",
    },
    {
      id: 3,
      order: "three",
      img: hiWood,
      name: "Woodrow C. Greene",
      job: "Developer",
      rating: "5.0",
    },
    {
      id: 4,
      order: "four",
      img: hiEsher,
      name: "Esther Howard",
      job: "Graphic Designer",
      rating: "5.0",
    },
  ];

  return (
    <div>
      <div className="hire">
        <section>
          <img src={hiLine} alt="" className="hilineImg" />
          <div className="devsbox">
            <div className="imgbox__crcle">
              <img src={hiCrcle} alt="das" />

              {devs.map((elem) => {
                return (
                  <HiredevsCard
                    key={elem.id}
                    order={elem.order}
                    img={elem.img}
                    devName={elem.name}
                    devJob={elem.job}
                    imgStar={hiStar}
                    rating={elem.rating}
                  />
                );
              })}
            </div>
          </div>
          <div className="devs__infobox">
            <h1>Hire Our Top Rated Freelancer</h1>
            <p>
              To get reviews on, encourage your client to spread the word about
              your service. Verify your business so your information is eligible
              to appear on Maps.
            </p>
            <GreenBtn classNames={"checkout Profille"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hiretop;
