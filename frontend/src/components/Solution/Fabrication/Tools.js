import React, { useEffect } from "react";
import servicedep from "../../../assets/image/servicesdpa.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import servicedep1 from "../../../assets/image/servicsdep1.jpg";

import "./tools.css";

const Tools = () => {
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
              className="lg:h-[30rem] sm:h-[13rem] w-full opacity-100"
              src={servicedep}
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
              List Of Machineries <br /> And Tools & Tackles
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

        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center mb-10 ">
              <h2 className="lg:text-5xl sm:text-2xl font-semibold text-[#243945]">
                List Of Machineries And Tools & Tackles
              </h2>
              <p className="py-5 text-[16px] text-center text-gray-500  lg:mx-28 sm:mx-0">
                Machinery and tools encompass a wide range of equipment used
                across various engineering disciplines for construction,
                manufacturing, maintenance, and other applications.
              </p>
            </div>
            {/*  Services Plantss: */}

            <div>
              <table className="rwd-table">
                <tbody>
                  <tr>
                    <th>Tools</th>

                    <th>Nos</th>
                  </tr>

                  <tr>
                    <td data-th="Movie Title">Welding Rectifier– 400 Amps</td>
                    <td data-th="Genre">30 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">SAW Welding set </td>
                    <td data-th="Genre">01 no</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">Welding Transformers </td>
                    <td data-th="Genre">04 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">Argon Welding set</td>
                    <td data-th="Genre">03 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">CO2 Welding set </td>
                    <td data-th="Genre">10 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">
                      Drilling Machine & Core Cutter{" "}
                    </td>
                    <td data-th="Genre">02 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">Gas cutting set </td>
                    <td data-th="Genre">20 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">Grinding Machine (AG-7)</td>
                    <td data-th="Genre">12 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">GQ 4”Grinding Machine</td>
                    <td data-th="Genre">04 nos.</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">Other Hand Tools</td>
                    <td data-th="Genre"> Lot</td>
                  </tr>
                  <tr>
                    <td data-th="Movie Title">.15 MT Hydra</td>
                    <td data-th="Genre"> 01 nos</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Note: As per the site requirements, whenever required, we are
                capable to get additional tool & tackles & machineries
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES DEPATMANT */}
      </div>
    </>
  );
};

export default Tools;
