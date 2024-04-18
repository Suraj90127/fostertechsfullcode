import React, { useEffect } from "react";
import comapnybanner from "../../../assets/image/comapnybanner.webp";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import compay1 from "../../../assets/image/comany1.jpg";

const Introduction = () => {
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
              className="lg:h-[30rem] sm:h-[15rem] w-full opacity-100"
              src={comapnybanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-40 lg:left-[32rem] sm:w-[50%] sm:top-40 sm:left-5 text-white text-2xl tracking-wide">
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
            
            </h2> */}
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              Introduction
            </p>
            <p className="text-white lg:w-[100%] mt-10 text-lg sm:hidden lg:block">
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
          <div className="dropdown-btn absolute lg:left-[28rem] md:left-[20rem] sm:left-[7rem]">
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

        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center mb-10 ">
              <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                Company Overview
              </h2>
              <p className="py-5 text-[16px] text-center text-gray-500  lg:mx-28 sm:mx-0">
                FFPL is part of Fostertechs Group. Fostertechs is working in
                different vertical like engineering, Fabrication, Erection,
                Building retrofitting, Solid and waster waste mangement etc. The
                founders of Fostertechs, Divey Mahajan and Faisel Tufel have
                combined experience of mote than 40years in fabrication and
                project management of Industrial, Onshore and Offshore Oil & Gas
                projects
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-12  lg:items-start sm:items-center sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
              <div className="lg:col-span-6 sm:col-span-12 sm:flex sm:flex-col sm:justify-center items-center">
                <img
                  className="lg:w-[45rem] lg:h-[35rem] sm:w-[30rem] sm:[20rem] rounded-full company-overview"
                  src={compay1}
                  alt=""
                />
              </div>
              <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0 pt-10">
                <div className=" w-full">
                  <h2 className="text-3xl font-semibold text-[#243945]">
                    Company Overview
                  </h2>
                  <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                  <p className="py-5 text-[15px] text-justify text-gray-500">
                    FFPL take this opportunity to introduce ourselves as
                    Structural & Mechanical fabrication and erection engineers.
                  </p>
                  <p className=" text-[15px] text-justify text-gray-500">
                    In Greater Noida a fully-equipped facility extending over
                    5,000 m2 is developed. The factory is equipped with modern
                    and advance technological facility for the manufacturing
                    structures with capacity of 2000 metric tons per year.
                  </p>
                  <p className="py-5 text-[15px] text-justify text-gray-500">
                    The merit of our company is to offer a comprehensive service
                    (Design, Fabrication & Supply and Erection) in the field of
                    Hot Rolled Structural and Mechanical Engineering Services.
                    We can ensure timely project completion, end-to-end quality
                    management and budget control.
                  </p>
                  <p className="text-[15px] text-justify text-gray-500">
                    Our clients are ensured the highest levels of product
                    quality and workmanship including on-time completion. The
                    policy of the company, for the manufacture and construction
                    of the work and the services it provides, is clearly defined
                    and meets the requirement of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FFPL places particular emphasis on section */}
        </div>
        <div>
          <div className="lg:mx-20 sm:mx-5">
            <h2 className="text-3xl font-semibold text-[#243945]">
              FFPL places particular emphasis on:-
            </h2>
            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
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
                Operation and maintenance of a safe system of work.
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
                Consistent achievement of the specified quality.
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
                Economy of manufacture and construction activities.
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
                Provision of Training and Instruction planned to suit identified
                needs.
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
                Adherence to programs with best practices, and to comply with
                all applicable requirements.
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
                Continual improvement of the effectiveness of the QMS in all
                spheres, by establishing and reviewing quality objectives.
              </li>
            </ul>
            <div className="">
              <p className="text-[20px] text-justify text-black font-semibold">
                M/s Fostertechs having a partnership with skilled/unskiled
                manpower supply contractor to execute the work. Company has
                expertise for following activities:
              </p>
              <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400 my-5 mb-10">
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
                  Fabrication, Erection of piping, steel structural, tanks, PEB
                  Pre-Engineered Building & Maintenance of plants on Trunkey
                  basis.
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
                  Erection, commissioning and maintenance of Plant : Sewage
                  treatment plants, Biogas plants, Cement plants, Chemical
                  Plants etc.
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
                  Oil & Gas, Petroleum and Water pipe Lines (Underground & Above
                  ground), at various Oil refineries, Chemical plants.
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
                  Various sizes of system Valves, associated with pipelines as
                  mentioned above, including automated and semi-automated
                  systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
