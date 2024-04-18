import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import solidmain1 from "../../../assets/image/solidmain.png";
import solidwaste120 from "../../../assets/image/solidwaste120.png";
import wastebanner from "../../../assets/image/wastebanner.webp";
import cdwastebanner from "../../../assets/image/c&dwastebanner.webp";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Horticulturewaste = () => {
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
              className="lg:h-[30rem] sm:h-[12rem] w-full opacity-100 brightness-75"
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
              {" "}
              Horticulture Waste Management
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Horticulture waste management - these are waste that can be used
              in animals feed, composting, vermiculture and as substrate for
              microbial growth to decrease environmental pollution
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

        <div className="lg:flex ">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
                <div className="bg-white sm:grid-cols-1">
                  {/* Step 1st */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                      {/* <div className="text-center mb-10 ">
                        <h2 className="text-5xl font-semibold text-[#243945]">
                          Solid Waste
                        </h2>
                      </div> */}
                      <div className="">
                        <div className="text-center ">
                          <h2 className="lg:text-3xl sm:text-lg font-semibold text-[#243945]">
                            Vermi – Composting For Garden Waste
                          </h2>
                          <p className="text-lg my-5 text-gray-400 lg:mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full lg:h-[30rem] sm:h-[15rem]"
                            src={solidwaste120}
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

export default Horticulturewaste;
