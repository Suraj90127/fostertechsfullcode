import React, { useEffect } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GiOffshorePlatform } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import logo from "../../../assets/image/logo_up.png";
import { Link } from "react-router-dom";
import offbanner from "../../../assets/image/offbanner.jpg";
import onshare1 from "../../../assets/image/onshare1.jpg";
import onshorebanner from "../../../assets/image/onshorebanner.webp";
import { IoIosArrowDown } from "react-icons/io";
const OilGase2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[35rem] sm:h-[20rem] w-full opacity-100 brightness-50"
              src={onshorebanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 sm:top-36 lg:left-32 mx-5 text-white text-2xl tracking-wide ">
            {/* <h2 className="font-normal flex">
              <Link to="/">
                <span className="text-blue-400 hover:text-blue-700">Home</span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <Link to="/solution/energy-oil-gase-1">
                <span className="text-blue-400 hover:text-blue-700">
                  Oil & Ges
                </span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <span>Upstream (Onshore) Projects</span>
            </h2> */}
            <p className="lg:mt-10 sm:mt-5 lg:text-4xl sm:text-2xl lg:font-bold sm:font-medium ">
              Upstream (Onshore) Projects
            </p>
            <p className="my-5 text-lg lg:w-[50%]">
              Complete range of Onshore facilities - Production, Processing,
              Storage, Transportation & Terminals.
            </p>

            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[30rem] md:left-[14rem] sm:left-[7rem] xl:[46rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn sm:mx-8 lg:w-[300px] sm:w-[180px]  lg:mx-0 ">
                <span>Engineering</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-0 mt-0 shadow-2xl  ">
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
                            src={onshare1}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-5 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="text-3xl font-semibold text-[#243945]">
                              Onshore Projects
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                            <p className="text-lg font-[Poppins] leading-8 my-3">
                              The Company’s capabilities and expertise cover the
                              structural/civil design of all onshore projects.
                            </p>
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
                                  In-service Analysis & Design of RCC/Structural
                                  Steel Facilities
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
                                  Dynamic Analysis & Design of RCC/Structural
                                  Steel Facilities
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
                                  Welded and Bolted Connection Design
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
                                  Modification & Revamping of Existing Projects
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* second  Floating Production & Storage Facilities (FPSO & MOPU)*/}

                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                      {/* first section */}
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse ">
                        <div className="lg:col-span-5 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="text-3xl font-semibold text-[#243945]">
                              Downstream (Onshore) Projects
                            </h2>
                            <hr className="h-2 w-10 my-5 rounded-full bg-yellow-400" />
                            <p className="text-lg font-[Poppins] leading-8 my-3">
                              The Company’s capabilities and expertise cover the
                              structural/civil design of all onshore projects.
                            </p>
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
                                  Pipe rack structures
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
                                  Piping systems
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
                                  Site grading plans including drainage system
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
                                  Project facilities including various kind of
                                  Steel and RCC structures
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
                                  Storage and water tank structures
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
                                  Equipment Foundations
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
                                  Fabrication drawings
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
                                  Revamping Projects etc
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-7 sm:col-span-12">
                          <img
                            className="w-[40rem] lg:h-[23rem] sm:h-[15rem]"
                            src={onshare1}
                            alt=""
                          />
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

export default OilGase2;
