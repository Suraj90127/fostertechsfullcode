import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import servicedep from "../../../assets/image/servicesdpa.jpg";
import product1 from "../../../assets/image/product1.png";
import product2 from "../../../assets/image/product2.png";
import product3 from "../../../assets/image/product3.png";
import product4 from "../../../assets/image/product4.png";
import product5 from "../../../assets/image/product5.png";
import product6 from "../../../assets/image/product6.png";
import product7 from "../../../assets/image/product7.png";
import product8 from "../../../assets/image/product8.png";
import product9 from "../../../assets/image/product9.png";
import product10 from "../../../assets/image/product10.png";
import product11 from "../../../assets/image/product11.png";

const Producttools = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const product = [
    { name: "Lathe Machine Job Work", img: product1 },
    { name: "Insert Plates    ", img: product2 },
    { name: "Pre Engineered Buildings.", img: product3 },
    {
      name: "Foundation Bolt Fabrication & Threading ",
      img: product4,
    },
    { name: "Insert Plates   ", img: product5 },
    { name: "U Bolt Fabrication & Threading ", img: product6 },
    { name: "Walk Way Chali Hollow Section     .", img: product7 },
    { name: "Ms/Ss Handrail Work    .", img: product8 },
    { name: "Grating", img: product9 },
    { name: "Edge Angle ", img: product10 },
    { name: "Fire Water Tanks", img: product11 },
  ];
  return (
    <>
      <div>
        {/* Banner section */}

        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[12rem] w-full opacity-100"
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
              Our Service Product
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

        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8 bg-gray-300">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center">
              <h2 className="lg:text-5xl sm:text-3xl font-semibold text-[#243945]">
                Company Product Overview
              </h2>
              <p className="py-5 text-[16px] text-center text-gray-500  mx-28 ">
                FFPL is part of Fostertechs Groupa fully-equipped facility
                extending over 2,000 m2 is developed In Kharkhoda industrial
                area . The factory is equipped with modern and advance
                technological facility for the manufacturing structures with
                capacity of 2000 metric tons per year.
              </p>
            </div>
            {/*  Services Plantss: */}

            <div className="product bg-gray-300 p-10">
              <div className="grid grid-cols-12 gap-10">
                {product.map((item) => (
                  <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 lg:mx-0 sm:mx-10">
                    <div className="bg-white  w-full h-[20rem] p-5 hover:shadow-2xl sm:flex sm:flex-col justify-center items-center">
                      <div>
                        <img src={item.img} alt="" className="w-52 h-52 " />
                      </div>
                      <div className="my-5">
                        <h5 className="text-lg font-medium text-[#243945]">
                          {item.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-span-3">
                  <div className="bg-white w-full h-[20rem] p-5">
                    <div>
                      <img src={product2} alt="" className="w-52 h-52" />
                    </div>
                    <div className="my-10">
                      <h5 className="text-lg font-medium text-[#243945]">
                        Lorem, ipsum dolor.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="bg-white w-full h-[20rem] p-5">
                    <div>
                      <img src={product3} alt="" className="w-52 h-52" />
                    </div>
                    <div className="my-10">
                      <h5 className="text-lg font-medium text-[#243945]">
                        Lorem, ipsum dolor.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="bg-white w-full h-[20rem] p-5">
                    <div>
                      <img src={product4} alt="" className="w-52 h-52" />
                    </div>
                    <div className="my-10">
                      <h5 className="text-lg font-medium text-[#243945]">
                        Lorem, ipsum dolor.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="bg-white w-full h-[20rem] p-5">
                    <div>
                      <img src={product5} alt="" className="w-52 h-52" />
                    </div>
                    <div className="my-10">
                      <h5 className="text-lg font-medium text-[#243945]">
                        Lorem, ipsum dolor.
                      </h5>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producttools;
