import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import solidmain1 from "../../../assets/image/solidmain.png";
import offshore1 from "../../../assets/image/offshore1.jpg";
import wastebanner from "../../../assets/image/wastebanner.webp";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Solidwasteintroduction = () => {
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
              className="lg:h-[30rem] sm:h-[10rem] w-full opacity-100"
              src={wastebanner}
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
              {" "}
              Waste Management
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Solid Waste Collection, Transportation And Processing/disposal
              System For Msw According To Solid Waste Management Rules, 2016 And
              Other Rules.
            </p>
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[28rem] md:left-[14rem] sm:left-[7rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn sm:mx-8 lg:w-[300px] sm:w-[220px] ">
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

        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center mb-10 ">
              <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                Waste Management
              </h2>
              <p className="py-5 text-[16px] text-center text-gray-500  lg:mx-28 sm:mx-0">
                Fostertechs waste management services Pvt. Ltd (FWMS) is a waste
                management company with its headquarter in New Delhi. FWMS’s
                team having experience of 40+ years for management of:
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:px-0">
              <div className="lg:col-span-6 sm:col-span-12 ">
                <img
                  className="w-[45rem] h-[25rem] company-overview"
                  src={solidmain1}
                  alt=""
                />
              </div>
              <div className="lg:col-span-6 sm:col-span-12 lg:mt-0 pt-10">
                <div className=" w-full">
                  <h2 className="text-3xl font-semibold text-[#243945]">
                    Inroduction of Waste Management
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
                      Solid Waste,
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
                      Vegetable, fruit, flower, meat, poultry fish market waste.
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
                      Plastic Waste,
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
                      Construction and Demotion (C & D) Waste,
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
                      Horticulture Waste/Garden Waste
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
                      Waste Water Management
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
                      Management of Drainage System
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FFPL places particular emphasis on section */}
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-10">
            {/* first section */}
            <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse ">
              <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                <div className=" w-full">
                  <h2 className="text-3xl font-semibold text-[#243945]">
                    Orders of the Hon’ble ngt
                  </h2>
                  <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />

                  <div>
                    <p className="lg:text-lg sm:text-base">
                      As per orders of the Hon’ble NGT dated 17.07.2019,
                      19.11.2019 and 16.03.2020 in the matter of News items
                      published in “The Times of India” Authored by Jasjeev
                      Gandhiok & Paras Singh titled “Below mountains of trash
                      lie poison lakes” with Centre for Wildlife and Environment
                      Litigation versus Union of India & Ors. (OA No. 519/2019),
                      the Sanitary Landfill (Dumpsite) has to be
                      bio-mined/remediated in the entire country. After
                      Bio-mining/remediation of legacy waste (old dumpsite)
                      through Trommels various materials like inert/soil, C&D
                      waste and RDF are generated and the same are required to
                      be disposed/processed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 sm:col-span-12">
                <img
                  className="lg:w-[40rem] lg:h-[23rem]"
                  src={offshore1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="lg:mx-20 mt-10 sm:mx-5">
            <div className="text-center mb-10">
              <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                EXPERTISE
              </h2>
              {/* <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" /> 
               <p className="py-5 text-[16px] text-center text-gray-500  mx-28">
                Fostertechs waste management services Pvt. Ltd (FWMS) is a waste
                management company with its headquarter in New Delhi. FWMS’s
                team having experience of 40+ years for management of:
              </p> */}
            </div>
            <div>
              <p className="lg:text-[20px] sm:text-lg text-justify text-black lg:font-semibold">
                FWMS team has developed an extensive experience to manage the
                existing Sanitary Land Fill (Dump Sites) having any height for
                disposal of solid waste and Biomining of Legacy waste : Managing
                the Sanitary Land Fill:
              </p>

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
                  To prepare steps, slopes, embankments along with drainage
                  sytem for stability of site and fire control.
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
                  To prepare a spiral approach road along with open drainage
                  system with stabilized waste and C&D waste/Inert for easy
                  movement of refuse removal vehicles into SLF site.
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
                  To create space for disposal of solid waste
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
                  Provide a minimum 10 cm thick layer of C&D waste, inserts/soil
                  to cover dumped Solid waste at end of the day for minimize
                  foul smell, nuisance and fire control.
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
                  To arrange dust control generated by movement refuse removal
                  vehicles and disposal of solid waste.
                </li>
              </ul>
            </div>
            <div className="">
              <p className="lg:text-[20px] sm:text-lg text-justify text-black lg:font-semibold">
                Biomining of Legacy waste as per Guideline for Disposal of
                Legacy Waste (Old Municipal Solid Waste) of Central Pollution
                Control Board (CPCB) Feb. 2019 :
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
                  To select a proper space in exiting SLF site for deploying of
                  Trommel machines for Biomining of legacy waste in phases.
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
                  To carry out a survey for finding out land and Processing
                  facilities for disposal of ash, inert, Construction and
                  Demolition (C&D) Waste and Refuse Derived Fuel (RDF) generated
                  after Biomining of legacy waste.
                </li>
              </ul>
            </div>

            <div className="">
              <p className="lg:text-[20px] sm:text-lg text-justify text-black lg:font-semibold">
                FWMS team has developed an extensive system as per the Solid
                Waste Management Rules- 2016, Swachh Bharat Mission Municipal
                Solid Waste Management Manual 2016 and various orders of the
                Hon’ble Courts the for:
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
                  Segregation,of solid waste and domestic Hazardous waste at
                  source
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
                  Door to door collection of waste
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
                  Storage/Segregation of waste,
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
                  Development of Material Recovery Facility (MRF)
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
                  Transportation,
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
                  Processing/ disposal of Solid Waste, Plastic Waste, C&D Waste,
                  Horticulture/Garden Waste etc through various scientific
                  procedures e.g. Waste to Energy plant, Compost plant and Bio
                  methanation plant.
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
                  Development of Engineered/scientific landfill site for
                  disposal of residue/inert generated after processing of solid
                  waste at waste to energy plant and compost plant etc.
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
                  Providing consultancy for Managing the Municipal Solid waste
                  (Collection, Transportation, Segregation and Processing),
                  Sanitary Land Fills, and Biomining of Solid Waste.
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
                  Identification and allocation of suitable land to the local
                  bodies for setting up of processing and disposal facilities
                  for solid waste.
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
                  Prepare a solid waste management plan as per state policy and
                  strategy on solid waste management.
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
                  Awareness of the public regarding the duties of waste
                  generators.
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
                  Establish a system to recognise organisations of waste pickers
                  or informal waste collectors and promote and establish a
                  system for integration of these authorised waste-pickers and
                  waste collectors to facilitate their participation in solid
                  waste management including door to door collection of waste
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
                  Providing consultancy to M/s. Antony Lara Enviro Solutions P
                  Ltd for Remediation of temporary dumpsite near Lakhnawali
                  village at greater Noida through effective bio mining and
                  mechanized means with complete reclamation of the dumpsite
                  land.
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
                  Providing consultancy to M/s United Facilities Pvt. Ltd for
                  waste segregating trommels, machinery required for feeding to
                  trommel from dumpsite to trommel site and for creating stacks
                  of bio-mined output i.e., inert, RDF and C&D waste for
                  bio-mining & bio-remediation work at Bhalswa, Ghazipur and
                  Okhla dumpsites.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solidwasteintroduction;
