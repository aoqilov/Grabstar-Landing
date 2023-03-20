import React from "react";
// header
import "../assets/style/component/home.scss";
import Collect from "../components/Collect";
import Expo from "../components/Expo";
import Feature from "../components/Feature";
// icons
import Header from "../components/Header";
import Hiretop from "../components/Hiretop";
import Partner from "../components/Partner";
import Review from "../components/Review";

const Home = () => {
  return (
    <div>
      <section className="main__box">
        <Header />
        <Partner />
        <Feature />
        <Expo />
        <Collect />
        <Hiretop />
        <Review />
      </section>
    </div>
  );
};

export default Home;
