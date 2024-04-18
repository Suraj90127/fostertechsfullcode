import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import solidmain from "../../../assets/image/solidmain (2).png";
import solidmain1 from "../../../assets/image/solidmain.png";
import shaughter from "../../../assets/image/Slaughter.png";
import wastebanner from "../../../assets/image/wastebanner.webp";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Slaughterhousewaste = () => {
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
              className="lg:h-[30rem] sm:h-[12rem] w-full opacity-100"
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
              Slaughterhouse <br /> Waste Management
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Slaughtering of animals generates waste comprises of non edible
              offal such as large intestine, animal tissues, various glands and
              various body part etc.
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

        <div className="lg:mt-20 sm:mt-5">
          <div className="text-center ">
            <h2 className="lg:text-3xl sm:text-lg font-semibold text-[#243945] lg:mx-32 sm:mx-5">
              Management Of Solid Waste Generated From Slaughter House
            </h2>
            <p className="text-sm my-5 text-gray-400 lg:mx-20 sm:mx-5">
              Methods for solid waste generated from slaughter house of the
              following categories.
            </p>
          </div>
          <div>
            <img
              className="w-full lg:h-[30rem] sm:h-[22rem]"
              src={shaughter}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slaughterhousewaste;
