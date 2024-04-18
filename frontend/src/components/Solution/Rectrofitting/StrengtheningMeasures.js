import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import structurlauditbanner from "../../../assets/image/structuralauditbanner.jpg";
import strengthmesur from "../../../assets/image/strengthmesure.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import reboundbanner from "../../../assets/image/reboundhemmer.webp";
import ultrasonic from "../../../assets/image/ulrasonic.jpg";
import corecullting from "../../../assets/image/corecullting.jpg";
import rainforcement from "../../../assets/image/rainforcement.jpeg";
import halfcell from "../../../assets/image/halfcell.jpeg";

const StrengtheningMeasures = () => {
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
              className="h-[30rem] w-full opacity-100"
              src={structurlauditbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-40 sm:left-10 text-white text-2xl tracking-wide">
            <h2 className="font-normal flex">
              <Link to="/">
                <span className="text-blue-400 hover:text-blue-700">Home</span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <Link to="">
                <span className="text-blue-400 hover:text-blue-700">
                  Rectrofitting
                </span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              {/* <span>Structural Audit</span> */}
            </h2>
            <p className="mt-10 text-4xl font-bold ">Strengthening Measures</p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Renewable energy offers multitudinous environmental, profitable,
              and social benefits, including reducing hothouse gas emigrations,
              mollifying climate change, enhancing energy security, creating
              jobs, and promoting sustainable development
            </p>
            {/* <p className="mt-10 text-4xl font-bold ">Structural Audit</p> */}
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[30rem] md:left-[14rem] sm:left-[9rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn lg:w-[300px] sm:w-[180px]">
                <span>Retrofitting</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-15 mt-5 shadow-2xl sm:w-[77%] lg:w-[30%] ">
                  <li className="hover:bg-red-500">
                    <Link
                      to="/solution/rectrofitting-structural-audit"
                      className="  "
                    >
                      <span className=" text-base hover:text-red-500">
                        Structural Audit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solution/rectrofitting-post-structural-audit">
                      <span className=" text-base hover:text-red-500">
                        Post Structural Audit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solution/rectrofitting-strengthening-measures">
                      <span className=" text-base hover:text-red-500">
                        Strengthening Measures
                      </span>
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
              <div className="w-[100%]  bg-white">
                <div className="bg-white sm:grid-cols-1">
                  {/* contant section */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="text-center mb-10 ">
                      <h2 className="text-5xl font-semibold text-[#243945]">
                        Strengthening Measures
                      </h2>
                    </div>
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-10">
                      {/* first section */}
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                        <div className="lg:col-span-6 sm:col-span-12">
                          <img
                            className="h-[30rem]"
                            src={strengthmesur}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="text-3xl font-semibold text-[#243945]">
                              Strengtheninig Measures
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                            <div>
                              <div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Strengthening of structural members can done
                                  by following types of measures
                                </h2>
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
                                    Replacing poor quality or defective material
                                    with better quality material,
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
                                    By attaching additional high quality
                                    concrete,
                                  </li>
                                </ul>

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
                                  By providing additional steel or thin steel
                                  plates,
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
                                  By using various types of fiber reinforced
                                  polymer sheets (FRP Sheets),
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
                                  By the redistribution of the load such as by
                                  adding a steel supporting system and so on,
                                </li>
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

        {/* LIST OF EQUIPMENTS
         */}
        <div className="w-[99%]">
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-3xl font-semibold text-[#243945]">
              LIST OF EQUIPMENTS
            </h2>
          </div>

          {/* 1st Rounded hemmer text */}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Rebound Hammer Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    To Check the surfaces hardness of concrete
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Clip off paint and plaster, exposing the
                                      concrete surface on identified location.
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
                                      Place the hammer at 9 locations
                                      equidistantly with instrument
                                      perpendicular to surface of structural
                                      element.
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
                                      Record the reading as seen on the hammer
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p className="ext-gray-500 list-inside dark:text-gray-400">
                                    IS 13311 (Part 2) : 1992, <br /> IS 516,{" "}
                                    <br />
                                    IS 8900:1978
                                  </p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Surface hardness of concrete upto a depth of
                                  50mm, correlation of the hammer result as the
                                  comparessive text can be obtained with an
                                  variation of
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={reboundbanner}
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

          {/* 2st Ultrasonic Pluse Velocity Test (Concrete / Mortar)*/}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={ultrasonic}
                              alt=""
                            />
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Ultrasonic Pluse Velocity Test (Concrete /
                                Mortar)
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    To Check the Homogeneity of concrete, check
                                    the presence of cracks, voids or any other
                                    sort of deformities
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Chip off paint/plaster, exponsing the
                                      concrete surface appropriately at
                                      indentified location and amoothen the
                                      surface.
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
                                      Apply grese and place the probes on
                                      parallel surface in case of direct access.
                                      Probse are placed in line at suitable
                                      distances in case of indirect access.
                                      Record the reading in the machine , the
                                      reading observed in km/s.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>
                                    IS 13311 (Part 1 : 1992)
                                    <br />
                                    IS 8900:1978
                                  </p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Based on the reading obtained on the UPV
                                  machine the gradation of concrete can be
                                  classified. Gradation : Doubtful - Below 3.0
                                  km/s, Medium - 3.0 to 3.5 km/s Good - 3.5 to
                                  4.5 km/s Excellent - Above4.5 km/s
                                </p>
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

          {/* 3st  Core Culling and Compression Test */}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Core Culling and Compression Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    Assessment of actual / residual strength of
                                    core concrete , study of materials used in
                                    the concrete mix.
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Check for reinforcement with rebar locator
                                      on identified location and fix the core
                                      cutting machine on the member.
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
                                      Remove the core sample , filling the core
                                      void with rich mix mortar and bounding
                                      agent
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>
                                    IS 456 : 2000,
                                    <br />
                                    IS 516,
                                    <br />
                                    IS 1199
                                    <br />
                                    IS 8900:1978
                                  </p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Based on the Compression testing result the
                                  core strength is claculated and comparative
                                  cube strength is computed to get the residual
                                  strength of concrete
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={corecullting}
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
          {/* 4th Reinforcement Mapping Test */}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={rainforcement}
                              alt=""
                            />
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Reinforcement Mapping Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    Assessment of concrete cover provided for
                                    various structural members.
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Check the reinforcement using eddy current
                                      machine on identified location , repeat
                                      the process with calibrated cover plate.
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
                                      Check for reinforcement dimeter identified
                                      in the previous reading check for
                                      reinforcement of adjacent diameters to get
                                      approximately correct reinforcement.
                                      Repeat the procedure for distribution
                                      reinforcement in perpendicular dir
                                      direction.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>BS 1881. Part 204</p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Based on the reading in the machine and
                                  comparison of results for reinforcement
                                  mapping with and without cover plate the
                                  approximately correct reinforcement in the
                                  member can obtained.
                                </p>
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
          {/* 5th  Half Cell Potential Test*/}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Half Cell Potential Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    To assess the probability of corrosion in
                                    concrete
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Identify and mark the test location, Drill
                                      holes reaching upto the reinforcement.
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
                                      Connect the half cell instrument, record
                                      the reading on Mili voltmeter.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>ASTM-C-876:1991</p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Based on the readings obtained in the mili
                                  voltmeter the probability of corrosion can be
                                  classified as Over (-) 200mv: 10% Probability,
                                  (-)200mv to (-)350mv:50% Probability, Below
                                  (-) 350mv: 90% Probability
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={halfcell}
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

          {/* 6th Carbonation Test */}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={ultrasonic}
                              alt=""
                            />
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Carbonation Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    To assess the carbonation in concrete
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Identify and mark the test location, Drill
                                      hole reaching upto the reinforcement Spray
                                      the indicator chemical and insert the
                                      steel rod. Record the depth of colour
                                      change on the steel rod.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>ASTM-C-876:1991</p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  The unchanged colour length of the rod
                                  indicates the depth of carbonation.
                                </p>
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

          {/* 7th  Chemical Analysis of Concrete Sample*/}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Chemical Analysis of Concrete Sample
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    Determination of PH value, chloride and
                                    sulphide contents in the
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Our chemists have devised methods in
                                      concurrence with the chemical testing kit
                                      manufacturers which are used to determine
                                      the Ph Value, Chloride content and
                                      sulphide content of concrete.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>IS 456: 2000</p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Ph value is reported as the numerical value,
                                  Chloride and Suphide are reported as ppm in
                                  concrete.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={ultrasonic}
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

          {/* 8th Moisture Content Test */}
          <div className="lg:flex ">
            <div className=" w-full ">
              <div className=" flex">
                <div className="w-[100%]  bg-white">
                  <div className="bg-white sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-8">
                        {/* first section */}
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                          <div className="lg:col-span-6 sm:col-span-12">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={ultrasonic}
                              alt=""
                            />
                          </div>
                          <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                            <div className=" w-full">
                              <h2 className="text-3xl font-semibold text-[#243945]">
                                Moisture Content Test
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                              <div>
                                <div>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Objective
                                  </h2>
                                  <p className="text-base py-3">
                                    To determine the moisture content of wooden
                                    members.
                                  </p>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Methodology
                                  </h2>
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
                                      Theprongsof the moisture meterare inserted
                                      in the wooden member upto a depth of 2mm
                                      and held in position for 10 seconds until
                                      the reading stabilizes.
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
                                      Note the reading, the test can be repeated
                                      at regular intervals on the same sample.
                                    </li>
                                  </ul>
                                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                    Reference
                                  </h2>
                                  <p>IS 204: 1991, Part 1</p>
                                </div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Inference
                                </h2>
                                <p>
                                  Based on various readings taken on a sample
                                  the average-higher side of the readings is
                                  calculated and reported as percentage of
                                  moisture observed
                                </p>
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
      </div>
    </>
  );
};

export default StrengtheningMeasures;
