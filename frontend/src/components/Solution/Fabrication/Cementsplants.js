import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import servicedep from "../../../assets/image/servicesdpa.jpg";
import cementplantbanner from "../../../assets/image/cementplantbanner.webp";
import servicedep1 from "../../../assets/image/servicsdep1.jpg";
import { servicesdepartmentData } from "../../../utils/NewsData";

const Cementsplants = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        {/* Banner section */}

        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[13rem] w-full opacity-100 brightness-75"
              src={cementplantbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-40 sm:top-40 sm:left-10 text-white text-2xl tracking-wide">
            {/* <h2 className="font-normal flex">
              <Link to="/">
                <span className="text-blue-400 hover:text-blue-700">Home</span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <Link to="">
                <span className="text-blue-400 hover:text-blue-700">
                  Fabrication
                </span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <span>Introduction</span>
            </h2> */}
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              Cements Plants
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Renewable energy offers multitudinous environmental, profitable,
              and social benefits, including reducing hothouse gas emigrations,
              mollifying climate change, enhancing energy security, creating
              jobs, and promoting sustainable development
            </p>
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[28rem] md:left-[14rem] sm:left-[7rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn sm:mx-8 lg:w-[300px] sm:w-[180px] ">
                <span>Fabrication</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-0 sm:left-5 mt-0 shadow-2xl  ">
                  <li>
                    <Link
                      to="/solution/fabrication-comapny-overview"
                      className=" text-primary-gray-black text-lg my-2 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300 "
                    >
                      <div className="flex  text-black text-base px-2 py-0 hover:text-black">
                        <p>Introduction</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/fabrication-tools"
                      className=" text-primary-gray-black text-lg my-2 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300 "
                    >
                      <div className="flex  text-black text-base px-2 py-0 hover:text-black">
                        <p>Tools</p>
                      </div>
                    </Link>
                  </li>
                  <li className="hover:bg-red-500">
                    <Link
                      to="/solution/fabrication-product-tools"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex text-black text-sm px-2">
                        <p>Fabrication Products</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/fabrication-cements-plants"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>Cements Plants</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/fabrication-refinerines"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>Refineries</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/fabrication-other-industries"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Other industries</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        {/* cemets plants */}

        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex lg:w-full flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center mb-10 ">
              <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                CEMENTS PLANTS
              </h2>
              <p className="py-5 text-[16px] text-center text-gray-500 sm:mx-0 lg:mx-28">
                Our production group is a team of professionals who have
                multiyear experience in fabrication and erection of structural
                steel in Various industries as follows:
              </p>
            </div>
            {/*  Cements Plants: */}
            <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 lg:mx-20 sm:mx-0">
              <div className="lg:col-span-6 sm:col-span-12">
                <img
                  className="lg:w-[30rem] lg:h-[30rem] sm:h-[20rem] rounded-full"
                  src={servicedep1}
                  alt=""
                />
              </div>
              <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-16 ">
                <div className=" w-full">
                  <h2 className="text-3xl font-semibold text-[#243945]">
                    Cements Plants:
                  </h2>
                  <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                  <ol class="list-decimal space-y-1 text-gray-500 list-inside dark:text-gray-400 mb-10">
                    <li>
                      Preheater- Cyclones, Risers, Calciner, Chimney, Access
                      platforms etc.
                    </li>
                    <li>TAD duct</li>
                    <li>Silo roof structure</li>
                    <li>Hot air duct</li>
                    <li>Conveyor galleries and trussel towers</li>
                    <li>Insert plates and Bolts</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES DEPATMANT */}
        <div>
          <section class=" lg:pt-[30px] bg-gray-100 mt-5">
            <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                SERVICE DEPARTMENT
              </h2>
            </div>
            <div class="lg:w-[90%] lg:mx-24  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10">
              {servicesdepartmentData?.map((data, i) => (
                <div class="lg:-mx-4 sm:mx-4">
                  <div class="w-full px-4">
                    <div className=" max-w-[370px] bg-white" key={i}>
                      <Link to={data.link}>
                        <div className="mb-4 overflow-hidden rounded hover:opacity-50">
                          <img
                            className="h-64 w-full"
                            src={data.img}
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between">
                          <h2 class=" mb-5 inline-block rounded py-1 px-4 text-center text-sm font-semibold leading-loose text-black hover:text-blue-500">
                            {data.name}
                          </h2>
                          {/* <span className="border-{solid}-2 border-gray-950 mt-3 mr-5 arrow-icon hover:text-blue-500">
                            <FaArrowRightLong />
                          </span> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cementsplants;
