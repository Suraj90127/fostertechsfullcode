import React, { useEffect } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FaCloudDownloadAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
// import { Pagination, Autoplay } from "swiper/modules";

import gas from "../../assets/image/gas.jpg";
import slider from "../../assets/image/slider.jpg";
import plants from "../../assets/image/plants.jpg";
import refineries from "../../assets/image/refineries.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Sliders() {
  useEffect(() => {
    Aos.init({
      // duration: 1000,
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="lg:w-[97%] sm:w-full relative mx-auto lg:mt-24 sm:mt-20">
        <Slider {...settings}>
          <div className="relative">
            <img
              src={gas}
              alt="main banner"
              className="rounded-lg w-[100%] mx-auto lg:h-[30rem] sm:h-[20rem] brightness-75"
            />
            <div className="absolute  sm:text-center lg:text-start lg:top-24 lg:left-32 md:top-20 md:left-1/2 sm:bottom-5 sm:left-10 lg:w-[40%] md:w-[30rem] sm:w-[85%] lg:px-5">
              <h2
                className="lg:text-4xl sm:text-xl text-gray-100 font-bold tracking-[2px]"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                ENGINEERING SERVICES
              </h2>
              <p
                className="text-gray-100 lg:text-xl sm:text-sm lg:mt-10 sm:mt-5"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Fostertechs Pvt. Ltd, an Engineering and Project Management
                Consultancy with its headquarters in New Delhi, India, is a
                group of highly motivated, qualified and experienced
                technocrats.
              </p>
              <Link to="/solution/engineering-genral">
                <button
                  className="lg:py-5 sm:px-20 sm:py-2 px-32 sm:rounded-lg bg-blue-600 lg:mt-10 sm:mt-5  lg:text-xl sm:text-lg text-white rounded-sm shadow-2xl hover:bg-[#7dcff2] hover:text-black"
                  // data-aos="fade-up"
                >
                  <span>VIEW MORE</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={slider}
              alt="main banner"
              className="rounded-lg w-[100%] mx-auto lg:h-[30rem] sm:h-[20rem] brightness-100"
            />
            <div className="absolute sm:text-center lg:text-start lg:top-24 lg:left-32 md:top-20 md:left-20 sm:bottom-5 sm:left-10 lg:w-[40%] md:w-[30rem] sm:w-[85%]">
              <h2
                className="lg:text-4xl sm:text-xl text-gray-100 font-bold tracking-[2px]"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                FABRICATION SERVICES
              </h2>
              <p
                className="text-gray-100 lg:text-xl sm:text-sm lg:mt-10 sm:mt-5"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                Fabrication is the process used to manufacture steel works
                components. It helps in creating metal structures by cutting,
                banding and assembly process.
              </p>
              <Link to="/solution/fabrication-comapny-overview">
                <button className="lg:py-5 sm:px-20 sm:py-2 px-32 sm:rounded-lg bg-blue-600 lg:mt-10 sm:mt-5  lg:text-xl sm:text-lg text-white rounded-sm shadow-2xl hover:bg-[#7dcff2] hover:text-black">
                  VIEW MORE
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={plants}
              alt="main banner"
              className="rounded-lg w-[100%] mx-auto lg:h-[30rem] sm:h-[20rem] brightness-100"
            />
            <div className="absolute sm:text-center lg:text-start lg:top-24 lg:left-32 md:top-20 md:left-20 sm:bottom-5 sm:left-10 lg:w-[40%] md:w-[30rem] sm:w-[85%]">
              <h2
                className="lg:text-4xl sm:text-xl text-gray-100 font-bold tracking-[2px]"
                data-aos="fade-down"
              >
                RECTROFITTING SERVICES
              </h2>
              <p
                className="text-gray-100 lg:text-xl sm:text-sm lg:mt-10 sm:mt-5"
                data-aos="fade-right"
              >
                Retrofitting is an extension of new technology to geriatric
                systems. Retrofitting part Incumbent to Manufacture, when the
                design of a substantial assembly is changed or reversed
              </p>
              <Link to="/solution/rectrofitting-structural-audit">
                <button
                  className="lg:py-5 sm:px-20 sm:py-2 px-32 sm:rounded-lg bg-blue-600 lg:mt-10 sm:mt-5  lg:text-xl sm:text-lg text-white rounded-sm shadow-2xl hover:bg-[#7dcff2] hover:text-black"
                  // data-aos="fade-up"
                >
                  VIEW MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={refineries}
              alt="main banner"
              className="rounded-lg w-[100%] mx-auto lg:h-[30rem] sm:h-[20rem] brightness-100"
            />
            <div className="absolute sm:text-center lg:text-start lg:top-24 lg:left-32 md:top-20 md:left-20 sm:bottom-5 sm:left-10 lg:w-[40%] md:w-[30rem] sm:w-[85%]">
              <h2
                className="lg:text-4xl sm:text-xl text-gray-100 font-bold tracking-[2px]"
                data-aos="fade-down"
              >
                WASTE MANAGEMENT SERVICES
              </h2>
              <p
                className="text-gray-100 lg:text-xl sm:text-sm lg:mt-10 sm:mt-5"
                data-aos="fade-right"
              >
                Waste management is the process to demote the amount of unusable
                materials and to avertlg: potebaseial health and environmental
                hazards.
              </p>
              <Link to="/solution/wastemanagemet-inroduction">
                <button
                  className="lg:py-5 sm:px-20 sm:py-2 px-32 sm:rounded-lg bg-blue-600 lg:mt-10 sm:mt-5  lg:text-xl sm:text-lg text-white rounded-sm shadow-2xl hover:bg-[#7dcff2] hover:text-black"
                  // data-aos="fade-up"
                >
                  VIEW MORE
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
