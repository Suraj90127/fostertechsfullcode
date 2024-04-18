import React, { useEffect } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GiOffshorePlatform } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import logo from "../../../assets/image/logo_up.png";
import { Link } from "react-router-dom";
import mscbanner from "../../../assets/image/mscbanner.webp";
import msc1 from "../../../assets/image/msc1.jpg";
import buildingbanner from "../../../assets/image/buildingbanner.webp";

const MscBuildings = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers brightness-50">
            <img
              className="lg:h-[30rem] sm:h-[13rem] w-full opacity-100"
              src={mscbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-40 sm:left-10 text-white text-2xl tracking-wide">
            {/* <h2 className="font-normal flex">
              <Link to="/">
                <span className="text-blue-400 hover:text-blue-700">Home</span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <Link to="/solution/energy-oil-gase-1">
                <span className="text-blue-400 hover:text-blue-700">
                  Engineering
                </span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <span>PEB Project</span>
            </h2> */}
            <p className="my-5 lg:text-4xl sm:text-2xl font-bold ">
              Multi-Storey Commercial & Residential Projects
            </p>
            <p className="text-white lg:w-[50%] text-lg sm:hidden lg:block">
              Renewable energy offers multitudinous environmental, profitable,
              and social benefits, including reducing hothouse gas emigrations,
              mollifying climate change, enhancing energy security, creating
              jobs, and promoting sustainable development
            </p>
            {/* <p className="mt-10 text-4xl font-bold ">
              Multi-Storey Commercial & Residential Projects
            </p> */}
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>
        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[28rem] md:left-[14rem] sm:left-[7rem] lg:w-[300px] ">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn sm:mx-8 lg:w-[300px] sm:w-[180px]  lg:w-[300px] sm:w-[180px]">
                <span>Engineering</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-0 sm:left-5 mt-0 shadow-2xl  ">
                  <li>
                    <Link
                      to="/solution/energy-oil-gase-1"
                      className=" text-primary-gray-black text-lg my-2 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300 "
                    >
                      <div className="flex  text-black text-base px-2 py-0 hover:text-black">
                        <p>Upstream (Offshore) Projects</p>
                      </div>
                    </Link>
                  </li>
                  <li className="hover:bg-red-500">
                    <Link
                      to="/solution/energy-oil-gase-2"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex text-black text-sm px-2">
                        <p>Downstream (Onshore) Projects</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-renewal-energy"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>Renewal Energy</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-power-genration"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>Power Genration</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-water-treament"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Water Treatment</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-peb-project"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>PEB Industrial Sheds</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-msc-bulding"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Buildings</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-3d-modling"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>3D Modelings</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/energy-pmc-project"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Project Management Consultancy</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex ">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white my-10">
                <div className="bg-white sm:grid-cols-1">
                  {/* contant section */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                      {/* first section */}
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                        <div className="lg:col-span-7 sm:col-span-12">
                          <img
                            className="w-[40rem] lg:h-[23rem] sm:h-[15rem]"
                            src={msc1}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-5 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="lg:text-3xl sm:text-2xl font-semibold text-[#243945]">
                              Multi-Storey Commercial & Residential Projects
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                            <div>
                              <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Design & Analysis of Reactor Clarifier, CMB,
                                  Aerator Etc.
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Seismic Analysis of Water Retaining
                                  Structures,
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Design thru Finite Element Analysis.
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Central Monitoring Basin
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  RCC tanks
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Aerator
                                </li>
                                <li className="flex items-center">
                                  <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                  </svg>
                                  Pipe rack structure and pipe supports etc
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscBuildings;
