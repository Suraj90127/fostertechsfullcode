import React, { useEffect } from "react";
import solidmain1 from "../../../assets/image/solidmain.png";
import { MdOutlineFileDownload } from "react-icons/md";
import cdsolid from "../../../assets/image/C&Dwaste.png";
import cdsolid1 from "../../../assets/image/C&Dwaste1.png";
import cdsolid2 from "../../../assets/image/C&Dwaste2.png";
import cdsolid3 from "../../../assets/image/C&Dwaste3.png";
import cdsolid4 from "../../../assets/image/C&Dwaste4.png";
import cdsolid5 from "../../../assets/image/C&Dwaste5.png";
import wastebanner from "../../../assets/image/wastebanner.webp";
import cdwastebanner from "../../../assets/image/c&dwastebanner.webp";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CandDwaste = () => {
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
              className="lg:h-[30rem] sm:h-[10rem] w-full opacity-100 brightness-50"
              src={cdwastebanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-32 sm:left-10 text-white text-2xl tracking-wide">
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
              C&D Waste Management
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              C and D waste management - construction and demolition waste is
              extracted from renovation, construction, repair and demolition of
              house, large buildings, roads, bridges and dams
            </p>
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[28rem] md:left-[14rem] sm:left-[7rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn sm:mx-8 lg:w-[300px] sm:w-[220px]">
                <span>Waste Management</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-0 sm:left-5 mt-0 shadow-2xl  ">
                  <li>
                    <Link
                      to="/solution/wastemanagemet-inroduction"
                      className=" text-primary-gray-black text-lg my-2 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300 "
                    >
                      <div className="flex  text-black text-base px-2 py-0 hover:text-black">
                        <p>Introduction</p>
                      </div>
                    </Link>
                  </li>
                  <li className="hover:bg-red-500">
                    <Link
                      to="/solution/wastemanagemet-solid-waste"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex text-black text-sm px-2">
                        <p>Solid Waste</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/wastemanagemet-c&dwaste"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>C & D Waste</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/wastemanagemet-plastic-waste"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black text-base px-2">
                        <p>Plastic Waste</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/wastemanagemet-horticulture-wasre"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Horticulture Waste</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/wastemanagemet-slaughterhouse-waste"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Slaughterhouse Waste</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/solution/wastemanagemet-water-waste"
                      className=" text-primary-gray-black py-2 px-4 my-1 rounded-full flex justify-between bg-white items-center  border-2 border-primary-gray-blacks hover:bg-yellow-300"
                    >
                      <div className="flex  text-black px-2 text-base">
                        <p>Waste Water</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        {/* 1st Rounded hemmer text */}
        <div className="lg:flex sm:mx-0">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white">
                <div className="bg-white sm:grid-cols-1">
                  {/* contant section */}
                  <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-20 mt-10 ">
                      <div className="text-center lg:mb-10 sm:mb-5 ">
                        <h2 className="lg:text-5xl sm:text-2xl font-semibold text-[#243945]">
                          C&D Waste Management
                        </h2>
                      </div>
                      {/* first section */}
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:px-5 ">
                        <div className="lg:col-span-6 sm:col-span-12 sm:mt-0 lg:mt-10">
                          <div className=" w-full">
                            <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945]">
                              Processing/Disposal Construction & Demolition
                              (C&d) Waste Plant
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                            <div>
                              <div>
                                <p className="text-base py-3">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Velit itaque accusamus est?
                                  Saepe quaerat esse vitae. Libero molestias
                                  dicta similique id provident laudantium dolor
                                  ea exercitationem impedit? Dolorum, officiis
                                  recusandae.
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
                                    equidistantly with instrument perpendicular
                                    to surface of structural element.
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12">
                          <img className="h-[30rem]" src={cdsolid} alt="" />
                        </div>
                      </div>
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                        <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-10">
                          <img
                            className="lg:h-[30rem] sm:h-[20rem] w-full"
                            src={cdsolid1}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 ">
                          <img
                            className="lg:h-[30rem] sm:h-[20rem] w-full"
                            src={cdsolid2}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 ">
                          <img
                            className="lg:h-[30rem] sm:h-[20rem]  lg:w-[95%] sm:w-[90%] sm:mx-auto"
                            src={cdsolid3}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 ">
                          <img
                            className="lg:h-[30rem] sm:h-[20rem]  w-[85%] ml-10"
                            src={cdsolid4}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center sm:mx-5">
                          <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945] lg:mx-32 sm:mx-0">
                            PAVEMENT BLOCKS AND KERBSTONES FROM C&D WASTE
                          </h2>
                          {/* <p className="text-lg my-5 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi reiciendis accusantium perspiciatis at
                            possimus error eius iusto mollitia vero itaque sunt
                            eos illo odit earum voluptates voluptate iure nulla,
                          </p> */}
                        </div>
                        <div>
                          <img
                            className="w-full h-[30rem]"
                            src={cdsolid5}
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

export default CandDwaste;
