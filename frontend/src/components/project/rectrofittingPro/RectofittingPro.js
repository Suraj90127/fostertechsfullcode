import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

import project from "../../../assets/image/project.png";

import recpro2 from "../../../assets/image/recpro2.png";
import recpro3 from "../../../assets/image/recpro3.png";
import recpro4 from "../../../assets/image/recpro4.png";
import recpro5 from "../../../assets/image/recpro5.png";
import recpro6 from "../../../assets/image/recpro6.jpg";
import recpro7 from "../../../assets/image/recpro7.png";
import recpro8 from "../../../assets/image/recpro8.png";
import recpro9 from "../../../assets/image/recpro9.png";
import recpro10 from "../../../assets/image/recpro10.png";
import recpro11 from "../../../assets/image/recpro11.png";
import recpro12 from "../../../assets/image/recpro12.png";
import recpro13 from "../../../assets/image/recpro13.png";
import recpro14 from "../../../assets/image/recpro14.png";
import recpro15 from "../../../assets/image/recpro15.png";
import retrofittingbanner from "../../../assets/image/retrofittingbanner.webp";
import engprobanner from "../../../assets/image/engprobanner.webp";
import retrofittingprojectbanner from "../../../assets/image/retrofittingprojectbanner.webp";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const RectofittingPro = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const projectData = [
    {
      name: " Structural Audit of Heritage Buildings at Oberoi Maidens Hotel, Delhi. ",

      img: recpro2,
      Description:
        "The Oberoi Maidens Hotel, Delhi is a hotel property with Grade 1 heritage buildings located at Civil Lines, Delhi opened since 1903. The hotel property consists of majorly 3 no’s of heritage structures i.e.",

      link: "/pp",
    },
  ];
  return (
    <>
      <div>
        {/* Banner section */}

        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[15rem]  w-full opacity-100"
              src={retrofittingprojectbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-32 lg:left-32 sm:top-20 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              {" "}
              Rectofitting Project
            </p>
            <p className="text-white lg:w-[50%] mt-10 lg:text-lg sm:text-base sm:hidden lg:block">
              Retrofitting is the act of befitting new systems designed for high
              energy effectiveness and low energy consumption to structures
              preliminarily erected without them.
            </p>

            <div className="lg:mt-10 sm:mt-24">
              {/* <a href={solidwasteppt} target="_blank"> */}
              <button
                class="bg-yellow-200 sm:hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent 
                rounded flex flex-row"
              >
                <span>Download</span>
                <span className="text-xl ml-5">
                  <MdOutlineFileDownload />
                </span>
              </button>
              {/* </a> */}
            </div>
          </div>
        </div>

        {/* <div>
          <div className=" bottom-0 h-screen bg-[#1187f4] w-full mt-20 bg-no-repeat opacity-80 careers">
            <div className="flex flex-row p-20  absolute">
              <div className="right basis-1/2 mx-10">
                <h2 className="text-5xl font-bold my-10 text-white leading-normal font-['DM Serif Display, serif'] solid-heading">
                  Rectofitting <br />
                  Project
                </h2>
                <p className="text-lg text-gray-100">
                  Retrofitting is the act of befitting new systems designed for
                  high energy effectiveness and low energy consumption to
                  structures preliminarily erected without them.
                </p>
                <div>
                  <div className=" mt-10">
                 
                    <button
                      class="bg-yellow-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent 
                rounded flex flex-row"
                    >
                      <span>Download</span>
                      <span className="text-xl ml-5">
                        <MdOutlineFileDownload />
                      </span>
                    </button>
                  
                  </div>
                </div>
              </div>
              <div className="lift basis-1/2 mx-10">
                <div>
                  <img
                    className="bg-transparent rounded-lg h-[28rem]  "
                    src={project}
                    alt=""
                  />
                </div>
              </div>
            </div>

           
          </div>
        </div> */}

        {/* project section */}
        <div>
          {/* Latest project */}
          <div>
            <section class=" lg:pt-[30px] ">
              {/* <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 ">
                <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                  Engineering Project
                </h2>
                <hr className="h-2 w-10  rounded-full bg-yellow-400 " />
              </div> */}
              {/* <div class="  mx-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10 ">
                {projectData?.map((data, i) => (
                  <div class=" ">
                    <div class="w-full h-[100%] bg-white">
                      <div className=" bg-white" key={i}>
                        <Link to={data.link}>
                        <div className="mb-4 overflow-hidden relative">
                          <div className="absolute mx-2">
                            <p className="text-base text-white">{data.name}</p>
                          </div>
                          <img
                            className="w-full h-[15rem]"
                            src={data.img}
                            alt="image"
                          />
                          <Link to="" className="absolute  bottom-0 right-0">
                            <button className=" text-white bg-blue-600 px-4 py-2 rounded-l-md ">
                              {" "}
                              {data.company}
                            </button>
                          </Link>
                          <div className="absolute bottom-10 text-white mx-2">
                            <p className="text-base">{data.Duration}</p>
                          </div>
                        </div>
                        <div className=" mx-5">
                          <h2 class=" mb-5 inline-block rounded py-1 text-base font-semibold text-black hover:text-blue-500">
                            {data.ScopeofWork}
                          </h2>
                          <p className="">{data.Description}</p>
                          <h6 className="text-lg font-bold my-2">
                            {" "}
                            {data.Valueheading}
                          </h6>
                          <p className="">{data.Value}</p>
                          <h6 className="text-lg font-bold my-2">
                            {" "}
                            {data.priceheading}
                          </h6>
                          <p className=" pb-2">{data.price}</p>
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
                  <span className="">See All Projects</span>
                </Link>
              </div> */}

              {/* sample desine side bar  */}
              <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  <div className="text-center mb-10 ">
                    <h2 className="text-3xl font-semibold text-[#243945]">
                      Rectrofitting project
                    </h2>
                    <p className=" lg:w-[50%] sm:w-full mt-10 lg:text-lg sm:text-base">
                      Retrofitting is the act of befitting new systems designed
                      for high energy effectiveness and low energy consumption
                      to structures preliminarily erected without them.
                    </p>
                  </div>

                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[28rem] sm:h-[15rem] company-overview"
                        src={recpro3}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Heritage Buildings at Oberoi
                            Maidens Hotel, Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3">
                          <p className=" text-base  text-gray-500">
                            The Oberoi Maidens Hotel, Delhi is a hotel property
                            with Grade 1 heritage buildings located at Civil
                            Lines, Delhi opened since 1903. The hotel property
                            consists of majorly 3 no’s of heritage structures
                            i.e. :
                          </p>
                        </div>

                        <div>
                          <div className="">
                            <p className="text-lg font-medium">
                              1. Main Building
                            </p>
                            <p>
                              Main building is the oldest structure
                              accommodating mainly hotel reception, rooms and
                              offices, build-up mainly of stones, brick with
                              lime concrete. Building is a 2 storey U-shaped
                              structure with jack arch roof and partial flat
                              roof system.
                            </p>
                          </div>
                          <div className="my-5">
                            <p className="text-lg font-medium">
                              2. EIH Building
                            </p>
                            <p>
                              EIH building accommodating mainly rooms, structure
                              is build-up mainly of bricks and lime concrete.
                              Building is a 2 storey rectangular shaped
                              structure with jack arch roofs system only.
                            </p>
                          </div>
                          <div className="">
                            <p className="text-lg font-medium">
                              3. Project Building
                            </p>
                            <p>
                              Project building accommodates mainly offices,
                              structure is build-up mainly of bricks and lime
                              concrete. Building is a 2 storey U-shaped
                              structure with jack arch roofs system only.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] company-overview"
                        src={recpro2}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0 h-full">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          Structural Audit of LIC Jeevan Vihar Building, New
                          Delhi.
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3">
                          <p className=" text-base  text-gray-500">
                            LIC Jeevan Vihar Building constructed in Year 1954
                            having complete area of around 13,051 Sq.Mt,
                            building details are as:
                          </p>

                          <p className="my-5 text-lg">
                            Single Building - 1 Basement + 6 Storey’s building.
                          </p>
                          <p>
                            Scope of work is to perform structural audit of the
                            commercial complex as part of regular maintenance of
                            the structure.
                          </p>
                          <p>
                            Structural audit of the building is performed thru
                            site inspection and performing Non-destructive
                            testing/Material Testing/Structural analysis of the
                            structures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] company-overview"
                        src={recpro4}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Industrial Building at Noida,
                            Uttar Pradesh.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3">
                          <p className=" text-base  text-gray-500">
                            Industrial building constructed in Year 2001 having
                            complete area of around 1,260 Sq.Mt, building
                            details are as:
                          </p>
                          <p className="my-5 text-lg">
                            Single Building - 1 Basement + 2 Storey’s building.
                          </p>
                          <p>
                            Scope of work is to perform check the strength of
                            the structure with respect to the increased loading
                            due to change in industrial usage.
                          </p>
                          <p>
                            Structural audit of the building is performed thru
                            site inspection and performing Non-destructive
                            testing/Material Testing/Structural analysis of the
                            structures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[25rem] sm:h-[15rem] company-overview"
                        src={recpro5}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Delhi Public School, Mathura
                            Road, Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3">
                          <p className=" text-base  text-gray-500">
                            The school complex constructed around in Year
                            1957-1997 with complete area of 26, 550 Sq.Mt
                            approximately comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-10">
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
                                Nursery Block - Basement + Ground +2 Storey’s,
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
                                Main Building - Ground + 3 Storey’s,
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
                                Work Experience Block - Ground + 1 Storey’s,
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
                                Warden Residence/Clinic - Ground + 3 Storey’s,
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
                                Hostel Block 1, 2, 3 - Ground + 3 Storey’s,
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
                                Hostel Wing 4 - Ground + 3 Storey’s,
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
                                Staff Quarter - Ground + 3 Storey’s,
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
                                Principal Residence - Ground + 1 Storey’s
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[25rem] sm:h-[15rem] company-overview"
                        src={recpro6}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Delhi Public School, Vasant
                            Kunj, Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3">
                          <p className=" text-base  text-gray-500">
                            The school complex constructed around in Year
                            1994-1999 with complete area of 15, 900 Sq.Mt
                            approximately comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                A Block - Ground + 3 Storey’s.
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
                                B Block - Ground + 3 Storey’s.
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
                                C Block - Ground + 2 Storey’s.
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
                                D Block - Ground + 3 Storey’s.
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
                                E Block - Ground + 3 Storey’s.
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
                                F Hostel Block - Ground + 3 Storey’s.
                              </li>
                            </ul>
                            <p>
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:mt-10 sm:my-5 lg:my-0 ">
                    <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945]">
                      Completed Audit and Retrofitting Projects Brief
                    </h2>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[25rem] sm:h-[15rem] company-overview"
                        src={recpro7}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Life Extension of Well Platform Project – 1 of ONGC
                            for Triune Energy.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            With ageing of ONGC owned existing well head
                            platforms in the Mumbai high field, condition of
                            existing wellhead platform has deteriorated. ONGC
                            intends to carry-out revamping & modification works
                            at these well platforms.
                          </p>
                          <p className="my-5">
                            ONGC has engaged the services of Consortium of M/s.
                            AFCONS, M/s Triune Energy Services Pvt. Ltd. & M/s
                            HALANI as EPC Vendor for this project.
                          </p>
                          <p>
                            M/s Triune Energy Services Pvt. Ltd. (TESPL) is
                            responsible for providing Detail Engineering
                            services for this project and has offloaded the
                            structural engineering scope for following 6 no’s of
                            wellhead platforms :
                          </p>
                          <p className="my-5">N7, NS, N2, NO, SS & SU</p>
                          <p>
                            The scope of work includes performing in-service
                            analysis, preparation of structural drawings,
                            preparation of 3D PDMS model for revamping,
                            modification & strengthening works of 6 no’s
                            wellhead platforms at jacket walkway and topside.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[20rem] sm:h-[15rem] company-overview"
                        src={recpro8}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Ahlcon Public School, Mayur
                            Vihar, Delhi. .
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            The school complex constructed around in Year 1990
                            with complete area of 12, 000 Sq.Mt approximately
                            comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                A Block - 1 Basement + Ground + 3 Storey’s.
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
                                B Block - 1 Basement + Ground + 2 Storey’s
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
                                C Block - 1 Basement + Ground + 3 Storey’s.
                              </li>
                            </ul>
                            <p className="">
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[20rem] sm:h-[15rem] company-overview"
                        src={recpro9}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Ahlcon International School,
                            Mayur Vihar, Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            The school complex constructed around in Year 2007
                            with complete area of 6, 200 Sq.Mt approximately
                            comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                A Block - 1 Basement + Ground + 2 Storey’s.
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
                                B Block - 1 Basement + Ground + 2 Storey’s.
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
                                C Block - 1 Basement + Ground + 2 Storey’s.
                              </li>
                            </ul>
                            <p className="">
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[22rem] sm:h-[15rem] company-overview"
                        src={recpro10}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Rajhans Kutumb Apartment,
                            Indirapuram, Ghaziabad.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            The existing housing society complex with complete
                            area of around 49,728 Sq.Mt comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                B & E Block - 2 Basement + 12 Storey’s Tower.
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
                                C Block - 2 Basement + 9 Storey’s Tower.
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
                                D Block - 2 Basement + 10 Storey’s Tower.
                              </li>
                            </ul>
                            <p className="">
                              Scope of work is to perform structural audit of
                              the residential complex as part of regular
                              maintenance of the structure.
                            </p>
                            <p className="my-2">
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[22rem] sm:h-[15rem] company-overview"
                        src={recpro11}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Sukh Sagar Apartments at I.P
                            Extension, Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            The existing housing complex ‘Sukh sagar
                            Co-operative Group Housing Society’ was built during
                            1991 – 1993 period with complete area of around
                            14,400 Sq.Mt comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                A & B Block - 1 Stilt + 7 Storey’s Tower.
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
                                C Block - 2 Stilt + 7 Storey’s Tower.
                              </li>
                            </ul>
                            <p className="">
                              Scope of work is to perform structural audit of
                              the residential complex in association with
                              another consultant.
                            </p>
                            <p className="my-2">
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[22rem] sm:h-[15rem] company-overview"
                        src={recpro12}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Revamping Chemical facility at Jubilant Organosys
                            Ltd., Gajraula Plant.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            Client required to enhance the capacity of FC-III
                            factory building at Bhartia Gram at Gajraula, U.P
                            thru upgrading/relocating exisiting reactors and
                            other equipments in the facility. Structure composes
                            of both Structural Steel and Reinforced Concrete
                            materials.
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
                              <p>
                                The structure in-service strength analysis
                                encompasses the following basic design
                                conditions :
                              </p>
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
                                Gravity Loads + Equipment Loads
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
                                Gravity Loads + Equipment Loads + Seismic Forces
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[20rem] sm:h-[15rem] company-overview"
                        src={recpro13}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of the Indian Society of
                            International Law (ISIL) V.K Krishna Menon Bhawan
                            Building, New Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            ISIL Building constructed in Year 1989 having
                            complete area of around 4500 Sq.Mt, building details
                            are as:
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                1 Basement + Ground + 4 Storey’s (For Main
                                Building)
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
                                1 Basement + Ground + 1 Storey’s (For Auditorium
                                Building)
                              </li>
                            </ul>
                            <p className="">
                              Scope of work is to perform structural audit of
                              the complex as per NDMC compliance.
                            </p>
                            <p className="my-2">
                              Structural audit of the building will be performed
                              thru site inspection and performing
                              Non-destructive testing/Material
                              Testing/Structural analysis of the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 my-10">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem] lg:h-[22rem] sm:h-[15rem] company-overview"
                        src={recpro14}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            YWCA (Young Women Christian Association) at Ashoka
                            Road, New Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            The school complex constructed around in Year 1980
                            with complete area of 12, 000 Sq.Mt approximately
                            comprises of :
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                Guest House Building - Ground + 2 Storey’s.
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
                                Admin block - Ground + 2 Storey’s.
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
                                Hostel Block - Basement+ Ground + 3 Storey’s.
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
                                YWCA Institutional Building - Ground + 2
                                Storey’s
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
                                Shelter Home - Ground + 1 Storey’s
                              </li>
                            </ul>
                            <p className="">
                              Structural audit of the building is performed thru
                              site inspection and performing Non-destructive
                              testing/Material Testing/Structural analysis of
                              the structures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-4 sm:col-span-12 ">
                      <img
                        className="w-[45rem]  company-overview"
                        src={recpro15}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-8 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className=" w-full">
                        <h2 className="text-xl font-semibold text-[#243945]">
                          <span className="">
                            Structural Audit of Free Church , Sansad Marg, New
                            Delhi.
                          </span>
                        </h2>
                        <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                        <div className="py-3 text-gray-500">
                          <p className=" text-base  ">
                            Church Building is a purely masonry structure with a
                            central dome constructed in Year 1927 having
                            complete area of around 429 Sq.Mt, building details
                            are as:
                          </p>
                          <div>
                            <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5">
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
                                Ground Storey only.
                              </li>
                            </ul>
                            <p className="">
                              Scope of work is to perform structural audit of
                              the complex as per NDMC compliance.
                            </p>
                            <p>
                              Structural audit of the building will be performed
                              thru visual inspection only.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RectofittingPro;
