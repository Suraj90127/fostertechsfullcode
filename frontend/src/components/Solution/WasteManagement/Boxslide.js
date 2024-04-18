import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import solidwaste11 from "../../../assets/image/solidwaste1.1.png";
import solidwaste12 from "../../../assets/image/solidwaste1.2.png";
import solidwaste13 from "../../../assets/image/solidwaste1.3.png";
import solidwaste14 from "../../../assets/image/solidwaste1.4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Boxslide() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="box-slide">
        <Swiper
          //   pagination={true}
          autoplay={true}
          loop={true}
          //   modules={[Pagination, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          //   autoplay={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <img className="bg-red-500 rounded-full" src={solidwaste11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={solidwaste12} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={solidwaste13} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={solidwaste14} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
