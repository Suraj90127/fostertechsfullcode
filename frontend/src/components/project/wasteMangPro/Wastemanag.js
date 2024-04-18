import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import project from "../../../assets/image/project.png";
import recpro13 from "../../../assets/image/recpro13.png";
import solidwastebanner from "../../../assets/image/solidwastebanner.webp";

import engprobanner from "../../../assets/image/engprobanner.webp";

const Wastemanag = () => {
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
              className="lg:h-[30rem] sm:h-[15rem] w-full opacity-100 brightness-50"
              src={solidwastebanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-32 lg:left-32 sm:top-20 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              Waste Management Project
            </p>
            <p className="text-white lg:w-[50%] mt-10 lg:text-lg sm:text-base sm:hidden lg:block">
              A waste operation design involves the planning, perpetration, and
              monitoring of strategies and practices aimed at efficiently
              handling, treating, and disposing of waste accoutrements while
              minimizing environmental impact and promoting sustainability.
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

        {/* project section */}
        {/* sample desine side bar  */}
        <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
            <div className="text-center mb-10 ">
              <h2 className="text-3xl font-semibold text-[#243945]">
                Ongoing Projects
              </h2>
              <p className="py-5 text-lg text-start text-gray-500  lg:mx-28">
                A waste operation design involves the planning, perpetration,
                and monitoring of strategies and practices aimed at efficiently
                handling, treating, and disposing of waste accoutrements while
                minimizing environmental impact and promoting sustainability.
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
              <div className="lg:col-span-6 sm:col-span-12 ">
                <img
                  className="h-[20rem] w-full company-overview"
                  src={recpro13}
                  alt=""
                />
              </div>
              <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                <div className=" w-full mt-20">
                  <h2 className="text-xl font-semibold text-[#243945]">
                    <span className="">
                      M/s. ANTONY LARA ENVIRO SOLUTIONS P LTD
                    </span>
                  </h2>
                  <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                  <div className="py-3">
                    <p className=" text-base  text-gray-500">
                      Remediation of temporary dumpsite near lakhnawali village
                      at greater Noida through effective bio mining and
                      mechanized means with complete reclamation of the dumpsite
                      land for M/s. ANTONY LARA ENVIRO SOLUTIONS P LTD
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
              <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0 h-full mt-20">
                <div className=" w-full mt-20">
                  <h2 className="text-xl font-semibold text-[#243945]">
                    M/s United Facilities and Logistics Private Limited.
                  </h2>
                  <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                  <div className="py-3">
                    <p className=" text-base  text-gray-500">
                      Work of waste segregating trommels, machinery required for
                      the feeding to trommel from dumpsite to trommel site and
                      creating stacks of bio-mined output i.e., inert, RDF and
                      C&D waste for bio-mining and bio-remediation work at
                      Bhalswa, Ghazipur and Okhla dumpsite for M/s United
                      Facilities and Logistics Private Limited.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 sm:col-span-12 lg:ml-5">
                <img
                  className="h-[20rem] w-full company-overview"
                  src={recpro13}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wastemanag;
