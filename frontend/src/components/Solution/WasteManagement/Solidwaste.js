import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward, IoMdRadio } from "react-icons/io";
import { Link } from "react-router-dom";
import servicedep from "../../../assets/image/servicesdpa.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import solidmain1 from "../../../assets/image/solidmain.png";
import solidwaste1 from "../../../assets/image/solidwaste1.jpg";
import solidwaste11 from "../../../assets/image/solidwaste1.1.png";
import solidwaste12 from "../../../assets/image/solidwaste1.2.png";
import solidwaste13 from "../../../assets/image/solidwaste1.3.png";
import solidwaste14 from "../../../assets/image/solidwaste1.4.png";
import solidwaste2 from "../../../assets/image/solidwaste2.png";
import solidwaste3 from "../../../assets/image/solidwaste3.png";
import solidwaste4 from "../../../assets/image/solidwaste4.png";
import solidwaste5 from "../../../assets/image/solidwaste5.png";
import solidwaste6 from "../../../assets/image/solidwaste6.png";
import solidwaste7 from "../../../assets/image/solidwaste7.png";
import solidwaste8 from "../../../assets/image/solidwaste8.png";
import solidwaste9 from "../../../assets/image/solidwaste9.png";
import solidwaste10 from "../../../assets/image/solidwaste10.png";
import solidwaste110 from "../../../assets/image/solidwaste11.png";
import solidwaste120 from "../../../assets/image/solidwaste120.png";
import solidwaste130 from "../../../assets/image/solidwaste130.png";
import solidwaste140 from "../../../assets/image/solidwaste140.png";
import solidwaste150 from "../../../assets/image/solidwaste150.png";
import solidwaste160 from "../../../assets/image/solidwaste160.png";
import solidwaste170 from "../../../assets/image/solidwaste170.png";
import solidwaste180 from "../../../assets/image/solidwaste180.png";
import solidwastebanner from "../../../assets/image/solidwastebanner.webp";
import wastebanner from "../../../assets/image/wastebanner.webp";
// import solidwasteppt from "../../../assets/pdf";
import Boxslide from "./Boxslide";

const Solidwaste = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const data = [
    {
      heading:
        "  Awareness of the public regarding the duties of waste generators",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis accusantium perspiciatis at possimus error eius iusto mollitia vero itaque sunt eos illo odit earum voluptates voluptate iure nulla, sapiente tempora doloremque explicabo? Doloribus magni assumenda vero deleniti doloremque quidem",
      img: solidwaste3,
    },
    {
      heading:
        "Awareness Campaign on streets for public regarding the duties of waste generators",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis accusantium perspiciatis at possimus error eius iusto mollitia vero itaque sunt eos illo odit earum voluptates voluptate iure nulla, sapiente tempora doloremque explicabo? Doloribus magni assumenda vero deleniti doloremque quidem optio quisquam, illo expedita. Mollitia quos harum dolorum repudiandae voluptatibus vitae laudantium culpa labore, architecto, cumque nisi eius alias vel",
      img: solidwaste4,
    },
    {
      heading:
        "Awareness Campaign In Societies For Resedents Regarding The Duties Of Waste Generators",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis accusantium perspiciatis at possimus error eius iusto mollitia vero itaque sunt eos illo odit earum voluptates voluptate iure nulla, sapiente tempora doloremque explicabo? Doloribus magni assumenda vero deleniti doloremque quidem optio quisquam, illo expedita. Mollitia quos harum dolorum repudiandae voluptatibus vitae laudantium culpa labore, architecto, cumque nisi eius alias vel",
      img: solidwaste5,
    },
    {
      heading: "Integrated Solid Waste Mangement (Iswm)as Per Swm Rules, 2016",
      contant:
        "Flowchart for household waste, collection, transportation and disposal through waste pickers.",
      img: solidwaste6,
    },
    {
      heading: "Door To Door Collection Of Solid Waste",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse odit cumque minus commodi excepturi quod impedit perspiciatis, omnis nisi enim, atque quae, sint deleniti dolorum quidem fugiat quos? Inventore.",
      img: solidwaste7,
    },
    {
      heading:
        "Establish A System For Setting Up Of Material Recovery Facilities",
      contant:
        "Material Recovery Facility And Pre-sorting Facility For Mixed Waste.",
      img: solidwaste8,
    },
    {
      heading: "Material Recovery Facility (Mrf)",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste9,
    },
    {
      heading: "Bio-methanation Plants For Decentralized (1 Tpd) Processing",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste10,
    },
    {
      heading: "Compost Plant",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste110,
    },
    {
      heading: "Vermi – Composting For Garden Waste",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste120,
    },
    {
      heading: "Flow Chart Of Waste To Energy Plant",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste130,
    },
    {
      heading:
        "Development Of Scientific/  Engineered Landfill Sites For Disposal Of Residue/ Ash/Inerts. ",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste140,
    },
    {
      heading: "Segregation At Dumpsite With Trommels",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste150,
    },
    {
      heading: "Segregated Material",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste160,
    },
    {
      heading:
        "Management Of Sanitary Landfill (Dumpsite) Having Any Height From Ground Level.",
      contant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores perferendis voluptatum nihil hic nulla magnam facere at sint eum illum.",
      img: solidwaste170,
    },
    // {
    //   heading:
    //     "Segregation Of Plastic Waste  According To Plastic Waste Management Rules, 2018 And Amended Rules, 2021 Through Waste Pickers. ",
    //   contant:
    //     "Classification Of Plastics Bureau Of Indian Standards (Bis) Classifies Plastic Into Seven Types.",
    //   img: solidwaste180,
    // },
  ];
  return (
    <>
      <div>
        {/* Banner section */}

        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[13rem] w-full opacity-100"
              src={solidwastebanner}
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
              Solid Waste Management
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

        <div className="lg:flex overflow-hidden ">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
                <div className="bg-white sm:grid-cols-1">
                  {/* Step 1st */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-0">
                      <div className="text-center lg:mb-10 sm:pb-0 ">
                        <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                          Solid Waste
                        </h2>
                      </div>
                      {/* first section */}

                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:px-10">
                        <div className="lg:col-span-6 sm:col-span-6 bg-gray-300 sm:hidden lg:block ">
                          <Boxslide></Boxslide>
                          {/* <img
                            className="h-[30rem]"
                            src={solidwaste11}
                            alt=""
                          /> */}
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945]">
                              {/* DETERMINING WATSE COMPOSITION */}
                              Determining Watse Composition
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                            <p className="my-10 text-lg text-black text-justify">
                              MSW composition and characteristics vary
                              considerably between different cities and daily,
                              seasonal & temporal fluctuations are usually
                              observed. FWMS team has expertise in determining
                              waste composition of Municipal solid waste (MSW)
                              by quartering and coning method. It is one of he
                              best techniques for determining the composition
                              and characteristics.
                            </p>
                            <div>
                              <div className="flex flex-wrap">
                                <img
                                  className="w-32 h-32"
                                  src={solidwaste11}
                                  alt=""
                                />
                                <img
                                  className="w-32 h-32"
                                  src={solidwaste12}
                                  alt=""
                                />
                                <img
                                  className="w-32 h-32"
                                  src={solidwaste13}
                                  alt=""
                                />
                                <img
                                  className="w-32 h-32"
                                  src={solidwaste14}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-20 sm:mx-5">
                        <div className="text-center my-10 ">
                          <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945]">
                            Following characteristics are studied to assess the
                            proportion of constituents
                          </h2>
                          {/* <p className="py-5 text-[16px] text-center text-gray-500  mx-28"></p> */}
                        </div>
                        <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                          <div className="lg:col-span-5 sm:col-span-12 sm:mt-10 lg:mt-0 sm:mx-5">
                            <div className=" w-full ">
                              <h2 className="text-xl font-semibold text-[#243945]">
                                {/* DETERMINING WATSE COMPOSITION */}
                                Physical Characteristics
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                              <ul className=" space-y-1  text-gray-500 list-inside dark:text-gray-400">
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
                                  Density of waste
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
                                  Moisture Content
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
                                  Calorific Value
                                </li>
                              </ul>
                            </div>
                            <div className=" w-full">
                              <h2 className="text-xl font-semibold text-[#243945] mt-5">
                                {/* DETERMINING WATSE COMPOSITION */}
                                Chemical Characteristics
                              </h2>
                              <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                              <ul className=" space-y-1  text-gray-500 list-inside dark:text-gray-400">
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
                                  Chemical characteristics includes pH, nitrogen
                                  , phosphorus and potassium
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
                                  Biochemical characteristics includes
                                  carbohydrates, proteins, natural fibre and
                                  biodegradable factors
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
                                  Toxity profile includes heavy metals,
                                  persistent organic pollutants, pesticides and
                                  insecticides.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lg:col-span-7 sm:col-span-12 ">
                            <img
                              className="lg:h-[30rem] sm:h-[20rem]"
                              src={solidwaste2}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      {/* secont step */}
                      <div>
                        {/* <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945] mx-32">
                            Awareness of the public regarding the duties of
                            waste generators
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi reiciendis accusantium perspiciatis at
                            possimus error eius iusto mollitia vero itaque sunt
                            eos illo odit earum voluptates voluptate iure nulla,
                            sapiente tempora doloremque explicabo? Doloribus
                            magni assumenda vero deleniti doloremque quidem
                            optio quisquam, illo expedita. Mollitia quos harum
                            dolorum repudiandae voluptatibus vitae laudantium
                            culpa labore, architecto, cumque nisi eius alias vel
                          </p>
                        </div>
                        <div>
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste3}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945] mx-32">
                            Awareness Campaign on streets for public regarding
                            the duties of waste generators
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi reiciendis accusantium perspiciatis at
                            possimus error eius iusto mollitia vero itaque sunt
                            eos illo odit earum voluptates voluptate iure nulla,
                            sapiente tempora doloremque explicabo? Doloribus
                            magni assumenda vero deleniti doloremque quidem
                            optio quisquam, illo expedita. Mollitia quos harum
                            dolorum repudiandae voluptatibus vitae laudantium
                            culpa labore, architecto, cumque nisi eius alias vel
                          </p>
                       
                        </div>
                        <div>
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste4}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945] mx-32">
                            Awareness Campaign In Societies For Resedents
                            Regarding The Duties Of Waste Generators
                          </h2>
                          <p className="text-lg my-5 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi reiciendis accusantium perspiciatis at
                            possimus error eius iusto mollitia vero itaque sunt
                            eos illo odit earum voluptates voluptate iure nulla,
                            sapiente tempora doloremque explicabo? Doloribus
                            magni assumenda vero deleniti doloremque quidem
                            optio quisquam, illo expedita. Mollitia quos harum
                            dolorum repudiandae voluptatibus vitae laudantium
                            culpa labore, architecto, cumque nisi eius alias vel
                          </p>
                        </div>
                        <div>
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste5}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Integrated Solid Waste Mangement (Iswm)as Per Swm
                            Rules, 2016
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Flowchart for household waste, collection,
                            transportation and disposal through waste pickers.
                          </p>
                        </div>
                        <div className="flex justify-center ml-20">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste6}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Door To Door Collection Of Solid Waste
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi esse odit cumque minus commodi excepturi
                            quod impedit perspiciatis, omnis nisi enim, atque
                            quae, sint deleniti dolorum quidem fugiat quos?
                            Inventore.
                          </p>
                        </div>
                        <div className="flex justify-center ml-20">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste7}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Establish A System For Setting Up Of Material
                            Recovery Facilities
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Material Recovery Facility And Pre-sorting Facility
                            For Mixed Waste.
                          </p>
                        </div>
                        <div className="flex justify-center ml-20">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste8}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Material Recovery Facility (Mrf)
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste9}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Bio-methanation Plants For Decentralized (1 Tpd)
                            Processing
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste10}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Vermi – Composting For Garden Waste
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste120}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Compost Plant
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste110}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <div className="text-center ">
                          <h2 className="text-3xl font-semibold text-[#243945]">
                            Flow Chart Of Waste To Energy Plant
                          </h2>
                          <p className="text-lg my-5 text-gray-400 mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolores perferendis voluptatum nihil hic nulla
                            magnam facere at sint eum illum.
                          </p>
                        </div>
                        <div className="flex justify-center ml-0">
                          <img
                            className="w-full h-[30rem]"
                            src={solidwaste130}
                            alt=""
                          />
                        </div>
                      </div> */}
                      </div>

                      <div className="mt-20">
                        {data.map((item) => (
                          <div>
                            <div className="text-center mt-10 sm:mx-5">
                              <h2 className="lg:text-3xl sm:text-xl font-semibold text-[#243945] lg:mx-32 sm:mx-0">
                                {item.heading}
                              </h2>
                              <p className="text-lg my-5 text-gray-400 lg:mx-20 sm:mx-0">
                                {item.contant}
                              </p>
                            </div>
                            <div className="flex justify-center ml-0">
                              <img
                                className="w-full lg:h-[30rem] sm:h-[20rem]"
                                src={item.img}
                                alt=""
                              />
                            </div>
                          </div>
                        ))}
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

export default Solidwaste;
