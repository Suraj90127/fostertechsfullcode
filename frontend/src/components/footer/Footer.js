import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo_up.png";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="">
      <footer className="relative  text-white">
        <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-[#243945]">
          <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 lg:px-20 sm:px-10 py-10">
            <div className="flex flex-col gap-5">
              <div className=" transition duration-150 ease-in-out text-white">
                <img className="w-38 h-20" src={Logo} alt="" />
              </div>

              <p>
                <span>
                  Fostertechs Pvt. Ltd, an ISO-9001:2016 certified company with
                  its headquarters in New Delhi, India, is a group of highly
                  motivated, qualified and experienced technocrats. Our team has
                  enormous experience in.
                </span>
                <Link to="/" className="text-blue-600">
                  Read More
                </Link>
              </p>
            </div>

            <div className="">
              <div className="flex flex-col gap-5">
                <Link to="/">
                  <div className="">
                    <h2 className="text-2xl">Information</h2>
                  </div>
                </Link>
              </div>
              <ul className="text-gray-400">
                <li className="text-[22px] list-none font-semibold text-pink-500 "></li>
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/solution/rectrofitting-structural-audit">
                    Structural Engineering
                  </Link>
                </li>

                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/solution/energy-oil-gase-1">
                    Mechanical Engineering
                  </Link>
                </li>
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/solution/energy-pmc-project">
                    Project Management Consultancy
                  </Link>
                </li>
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/solution/fabrication-product-tools">
                    Fabrication Process Engineering
                  </Link>
                </li>
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/solution/wastemanagemet-inroduction">
                    Waste Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col gap-5">
                <Link to="/">
                  <div className="">
                    <h2 className="text-2xl">Legal</h2>
                  </div>
                </Link>
              </div>
              <ul className="text-gray-400">
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="">Privacy Policy</Link>
                </li>
                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="">Terms & Condition</Link>
                </li>

                <li className="my-4 list-none hover:text-blue-500">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <div className="flex flex-col gap-5">
                <Link to="/get-start">
                  <div className="">
                    <h2 className="text-2xl">Contact Us</h2>
                  </div>
                </Link>
              </div>
              <div className="text-gray-400">
                <p className="text-[16px] my-4">
                  1, Brijpuri Extension, Parwana Road, New Delhi – 110051
                </p>
                <p className="text-[16px] my-4">
                  Phone: +91 98104 54656, <br /> 99992 68782{" "}
                </p>
                <p className="text-[16px] my-4 flex">
                  <span>
                    {" "}
                    info@fostertechs.com, <br />
                    fostertechs@gmail.com
                  </span>
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  to=""
                  className="text-white hover:text-pink-500 transform hover:scale-150 
                    transition-all duration-150 ease-in-out text-3xl"
                  href=""
                >
                  <FaGithub />
                </Link>
                <Link
                  to=""
                  className="text-white hover:text-pink-500 transform hover:scale-150
                     transition-all duration-150 ease-in-out text-3xl"
                  href=""
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to=""
                  className="text-white hover:text-pink-500 transform hover:scale-150
                     transition-all duration-150 ease-in-out text-3xl"
                  href=""
                >
                  <FaTwitter />
                </Link>
                <Link
                  to=""
                  className="text-white hover:text-pink-500 transform hover:scale-150
                     transition-all duration-150 ease-in-out text-3xl"
                  href=""
                >
                  <FaInstagram />
                </Link>
              </div>
              <Link to="/get-start" className="">
                <button className="bg-yellow-400 text-black font-medium text-lg px-6 py-3 rounded-full md:block hidden mt-5">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="py-10 border-t-2 border-gray-500">
            <h6 className="text-center">
              &copy; Copyright © {Year} Fostertechs. All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
