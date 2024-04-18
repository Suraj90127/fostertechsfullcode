import React from "react";

import Home from "../components/home/Home";
import Swiper from "../components/carousel/Swiper";

const HomePage = () => {
  return (
    <>
      <div>
        <Swiper />
        <Home />
      </div>
    </>
  );
};

export default HomePage;
