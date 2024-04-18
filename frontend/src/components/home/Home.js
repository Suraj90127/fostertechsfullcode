import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { newsData } from "../../utils/NewsData";
import engineering from "../../assets/image/engineering.webp";
import Marquee from "../dummy/Marquee";
import triune from "../../assets/comlogo/triune.png";
import wood from "../../assets/comlogo/wood.png";
import multitex from "../../assets/comlogo/multitex.png";
import llyod from "../../assets/comlogo/llyod.png";
import micr from "../../assets/comlogo/micr.webp";
import triveni from "../../assets/comlogo/triveni-engineering.png";
import plants from "../../assets/image/plants.jpg";
import people from "../../assets/image/people.png";
import people2 from "../../assets/image/people2.png";
import waychooseus from "../../assets/image/waychooseus.png";
import retrofitting from "../../assets/image/retrofitting.webp";
import wastmangments from "../../assets/image/wastmangments.webp";
import fabrication from "../../assets/image/fabrication.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdEngineering } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const row2 = [triune, wood, multitex, llyod, micr, triveni];
  const row1 = [triune, wood, multitex, llyod, micr, triveni];

  const leaderData = [
    {
      name: "Divey Mahajan",
      role: "Chief Executive Officer",
      dec: "Project Management, Petrochemical, Upstream Onshore and Offshore Oil & Gas, Downstream Onshore and Offshore Oil & Gas, Power Plants, Water Treatment, Infrastructure, Civil Structure.",
      img: people2,
      link: "ll",
    },
    {
      name: "Divey Mahajan",
      role: "Chief Executive Officer",
      dec: "Project Management, Petrochemical, Upstream Onshore and Offshore Oil & Gas, Downstream Onshore and Offshore Oil & Gas, Power Plants, Water Treatment, Infrastructure, Civil Structure.",
      img: people2,
      link: "ll",
    },
    {
      name: "Divey Mahajan",
      role: "Chief Executive Officer",
      dec: "Project Management, Petrochemical, Upstream Onshore and Offshore Oil & Gas, Downstream Onshore and Offshore Oil & Gas, Power Plants, Water Treatment, Infrastructure, Civil Structure.",
      img: people,
      link: "ll",
    },
    {
      name: "Divey Mahajan",
      role: "Chief Executive Officer",
      dec: "Project Management, Petrochemical, Upstream Onshore and Offshore Oil & Gas, Downstream Onshore and Offshore Oil & Gas, Power Plants, Water Treatment, Infrastructure, Civil Structure.",
      img: people,
      link: "ll",
    },
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="">
          <div>
            <div>
              <div className="lg:w-[95%] bg-yellow-300 lg:mx-auto sm:mx-5   my-5 rounded-md ">
                <p className="text-center m-auto lg:text-[2rem] sm:text-lg sm:px-3  py-10 uppercase font-medium text-gray-500">
                  Expedient, Resourceful Faternity of Consultants
                </p>
              </div>
            </div>
            {/* background images */}

            {/* Related Insights */}
            <div className="w-[100%] bg-gray-100 ">
              <div className=" sm:grid-cols-1">
                {/* contant section */}
                <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                  <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-0 sm:mx-5">
                    {/* first section */}
                    <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-10">
                      <div className="lg:col-span-6 sm:col-span-12 about-us-image">
                        <img
                          src={plants}
                          alt=""
                          className="lg:w-[100%] lg:h-[100%] sm:h-[15rem] rounded-lg shadow-2xl"
                        />
                      </div>
                      <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0 about-us-contant">
                        <div>
                          <div className="heading  text-[25px] font-semibold">
                            <h2>About Us</h2>
                          </div>
                        </div>
                        <div className="contant">
                          <span>
                            <p className="py-5 text-sm md:text-sm lg:text-lg max-w-5xl font-[400] text-black">
                              Fostertech Pvt. Ltd, an Engineering and Project
                              Management Consultancy with its headquarter in New
                              Delhi, India, is a group of highly motivated,
                              qualified and experienced technocrats. Our team
                              has enormous experience in engineering and project
                              management of : Fostertechs Pvt. Ltd, an
                              ISO-9001:2016 certified company with its
                              headquarters in New Delhi, India, is a group of
                              highly motivated, qualified and experienced
                              technocrats. Our team has enormous experience in
                              engineering and project management of offshore .
                            </p>
                          </span>
                        </div>
                        <div className="button mt-5">
                          <Link to="/company/about-us">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-normal text-gray-900 rounded-lg group bg-gradient-to-br  from-black to-black group-hover:from-gray-500 group-hover:to-slate-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-blue-800">
                              <span className="relative text-lg px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                About Us
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whay choose us */}
            <div className=" sm:grid-cols-1 bg-gray-100">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8 ">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lgmx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-2 sm:grid-cols-1  items-start  gap-2 md:gap-5 lg:gap-10 xl:gap-14 md:px-10 sm:flex sm:flex-col-reverse">
                    <div className="mt-10">
                      <div>
                        <p className="text-blue-600 text-sm">Why choose us</p>
                        <div className="heading  text-[25px] font-semibold">
                          <h2>Spotlights</h2>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-xl md:text-lg lg:text-lg max-w-5xl font-[400] text-gray-700">
                            Get insights into key issues and how Wood is helping
                            create solutions by harnessing both expertise and
                            technology. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Esse, labore!
                          </p>
                        </span>
                      </div>

                      <div className="my-5">
                        <h2 className="text-lg font-medium">
                          Decarbonisation hub
                        </h2>
                        <h2 className="text-lg font-medium my-5">
                          Digitalisation hub
                        </h2>
                      </div>
                    </div>
                    <div className="">
                      <img src={waychooseus} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Businesses section */}
          <div>
            <div className="w-full  bg-gray-100">
              <div className="w-full  ">
                {/* text div */}
                <div className="flex flex-col align-middle items-center justify-center pt-12">
                  <div className="lg:text-[2.5rem] sm:text-xl font-[600] text-[#212121]">
                    <h2>OUR BUSINESS</h2>
                  </div>
                  <div className="text-[1.1em] lg:w-[60%] sm:w-[90%] font-normal text-[#161616] tracking-wide text-center mt-5">
                    <p>
                      With 35,000 professionals, across 60 countries, we are one
                      of the world’s leading consulting and engineering
                      companies operating across Energy and Materials markets.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 py-10 sm:px-5 lg:px-10 gap-5">
                  <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 ">
                    <div className="relative mainclass">
                      <div className="w-full">
                        <img
                          src={engineering}
                          alt="engineerin"
                          className="h-[20rem] rounded-sm w-full brightness-75"
                        />
                        <div className=" bg-[#181e14cc] py-2 text-center absolute bottom-0 buttom-contant w-full">
                          <h2 className="text-white text-3xl">Engineering</h2>
                        </div>
                      </div>
                      <div className="absolute top-10 left-14 hidden middel-class">
                        <span className="text-8xl ml-30 text-yellow-400 ">
                          <MdEngineering className="ml-10" />
                        </span>
                        {/* <img
                          src={engineering1}
                          alt=""
                          className="w-20 h-20 ml-10"
                        /> */}
                        <h2 className="text-white text-3xl my-4">
                          Engineering
                        </h2>
                        <Link to="/solution/engineering-genral">
                          <button className="px-10 py-2 text-lg font-normal bg-yellow-400 text-white">
                            Explor
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 ">
                    <div className="relative mainclass">
                      <div className="w-full">
                        <img
                          src={retrofitting}
                          alt="engineerin"
                          className="h-[20rem] rounded-sm w-full brightness-75"
                        />
                        <div className=" bg-[#181e14cc] py-2 text-center absolute bottom-0 buttom-contant w-full">
                          <h2 className="text-white text-3xl">Retrofitting</h2>
                        </div>
                      </div>
                      <div className="absolute top-10 left-14 hidden middel-class">
                        <span className="text-8xl ml-30 text-yellow-400 ">
                          <MdEngineering className="ml-10" />
                        </span>
                        {/* <img
                          src={engineering1}
                          alt=""
                          className="w-20 h-20 ml-10"
                        /> */}
                        <h2 className="text-white text-3xl my-4">
                          Retrofitting
                        </h2>
                        <Link to="/solution/rectrofitting-structural-audit">
                          <button className="px-10 py-2 text-lg font-normal bg-yellow-400 text-white">
                            Explor
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 ">
                    <div className="relative mainclass">
                      <div className="w-full">
                        <img
                          src={fabrication}
                          alt="engineerin"
                          className="h-[20rem] rounded-sm w-full brightness-75"
                        />
                        <div className=" bg-[#181e14cc] py-2 text-center absolute bottom-0 buttom-contant w-full">
                          <h2 className="text-white text-3xl">Fabrication</h2>
                        </div>
                      </div>
                      <div className="absolute top-10 left-14 hidden middel-class">
                        <span className="text-8xl ml-30 text-yellow-400 ">
                          <MdEngineering className="ml-10" />
                        </span>
                        {/* <img
                          src={engineering1}
                          alt=""
                          className="w-20 h-20 ml-10"
                        /> */}
                        <h2 className="text-white text-3xl my-4">Fabricatio</h2>
                        <Link to="/solution/fabrication-comapny-overview">
                          <button className="px-10 py-2 text-lg font-normal bg-yellow-400 text-white">
                            Explor
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 ">
                    <div className="relative mainclass">
                      <div className="w-full">
                        <img
                          src={wastmangments}
                          alt="engineerin"
                          className="h-[20rem] rounded-sm w-full brightness-75"
                        />
                        <div className=" bg-[#181e14cc] py-2 text-center absolute bottom-0 buttom-contant w-full">
                          <h2 className="text-white text-3xl">
                            {" "}
                            Waste Management
                          </h2>
                        </div>
                      </div>
                      <div className="absolute top-10 left-14 hidden middel-class">
                        <span className="text-8xl ml-30 text-yellow-400 ">
                          <MdEngineering className="ml-10" />
                        </span>
                        {/* <img
                          src={engineering1}
                          alt=""
                          className="w-20 h-20 ml-10"
                        /> */}
                        <h2 className="text-white text-3xl my-4">
                          Waste Management
                        </h2>
                        <Link to="/solution/wastemanagemet-inroduction">
                          <button className="px-10 py-2 text-lg font-normal bg-yellow-400 text-white">
                            Explor
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* marquee */}

          <div className="sm:hidden lg:block">
            <Marquee row1={row1} row2={row2} />
          </div>

          {/* extra experties */}

          <div>
            <div className="w-full relative ">
              <div className="row">
                <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B] py-5">
                    Leaders
                  </h2>
                </div>
                <Slider {...settings}>
                  {leaderData.map((ele) => (
                    <div className="">
                      <div className="lg:w-[90%] sm:w-[95%] main bg-yellow-200 mx-auto rounded-lg lg:py-10 ">
                        <div className="main md:grid md:grid-cols-12 sm:flex sm:flex-col sm:justify-center lg:gap-10 sm:gap-0   my-10">
                          <div className="lg:col-span-7 md:col-span-7 sm:col-span-12 py-10 lg:pl-20 sm:pl-0 sm:px-10 w-full sm:text-center md:text-start">
                            <div className="contant-section sm:mx-5 sm:w-full md:w-full">
                              <h2 className="lg:text-2xl sm:text-lg font-bold text-slate-700">
                                {ele.name}
                              </h2>
                              <p className="lg:my-10 sm:py-5 sm:text-sm lg:text-lg text-justify">
                                {ele.dec}
                              </p>
                              <div>
                                <Link to="/company/our-leaders">
                                  <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 "
                                  >
                                    More About
                                    <svg
                                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 10"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                      />
                                    </svg>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-5 md:col-span-5 sm:col-span-12 ">
                            <div className="image-section w-full sm:flex sm:flex-col sm:justify-center sm:items-center">
                              <img
                                src={ele.img}
                                alt=""
                                className="lg:h-[20rem] sm:h-[10rem]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <section class=" lg:pt-[30px] bg-gray-100 mt-5 sm:mx-5 lg:mx-0">
              <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
                <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                  Latest Expertise
                </h2>
              </div>
              <div class=" lg:mx-20 sm:mx-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10">
                {newsData?.map((data, i) => (
                  <div class="-mx-4 ">
                    <div class="w-full px-4">
                      <div className=" max-w-[370px] bg-white" key={i}>
                        <Link to={data.link}>
                          <div className="mb-4 overflow-hidden rounded">
                            <img
                              className="h-36 w-full"
                              src={data.img}
                              alt="image"
                            />
                          </div>
                          <div className="flex justify-between">
                            <h2 class=" mb-5 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-black hover:text-blue-500">
                              {data.name}
                            </h2>
                            <span className="border-{solid}-2 border-gray-950 mt-3 mr-5 arrow-icon hover:text-blue-500">
                              <FaArrowRightLong />
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <Link
                  to=""
                  className="hover:text-blue-400 text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-start text-[#002E5B] "
                >
                  <span className="">See All News</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
