import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import structurlauditbanner from "../../../assets/image/structuralauditbanner.jpg";
import structuralaudit1 from "../../../assets/image/stracturalaudit.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const PoststructuralAudit = () => {
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
              src={structurlauditbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-32 sm:left-10 text-white text-2xl tracking-wide ">
            {/* <h2 className="font-normal flex">
              <Link to="/">
                <span className="text-blue-400 hover:text-blue-700">Home</span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
              <Link to="">
                <span className="text-blue-400 hover:text-blue-700">
                  Rectrofitting
                </span>
              </Link>
              <span className="mt-2">
                <IoIosArrowForward />
              </span>
       
            </h2> */}
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              Post structural Audit
            </p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block sm:hidden lg:blocks">
              Post structural audit is a step that is taken after structural
              check up of overall performance of the defined sectors. When its
              general issues are identified then its measures are taken to
              maintain the overall progress of the designed structure.
            </p>
            {/* <p className="mt-10 text-4xl font-bold ">Structural Audit</p> */}
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>

        {/* dropdown section */}
        <div className=" left-5 h-full relative">
          <div className="dropdown-btn absolute lg:left-[30rem] md:left-[14rem] sm:left-[9rem]">
            <div className="container fixed top-28">
              {/* Btn*/}
              <button className="btn lg:w-[300px] sm:w-[180px]">
                <span>Retrofitting</span>
                <span className="text-xl material-icons">
                  <IoIosArrowDown />
                </span>
                <ul className="dropdown top-15 mt-5 shadow-2xl sm:w-[77%] lg:w-[30%] ">
                  <li className="hover:bg-red-500">
                    <Link
                      to="/solution/rectrofitting-structural-audit"
                      className="  "
                    >
                      <span className=" text-base hover:text-red-500">
                        Structural Audit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solution/rectrofitting-post-structural-audit">
                      <span className=" text-base hover:text-red-500">
                        Post Structural Audit
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solution/rectrofitting-strengthening-measures">
                      <span className=" text-base hover:text-red-500">
                        Strengthening Measures
                      </span>
                    </Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 lg:my-10 sm:mt-10">
          <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
            Post structural Audit
          </h2>
          {/* <hr className="h-2 w-10 mt-2 rounded-full bg-yellow-400 mr-52" /> */}
          <p className="text-lg w-[90%] mt-10 text-center">
            Post structural audit is a step that is taken after structural check
            up of overall performance of the defined sectors. When its general
            issues are identified then its measures are taken to maintain the
            overall progress of the designed structure.
          </p>
        </div>
        <div className="lg:flex ">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white my-10">
                <div className="bg-white sm:grid-cols-1">
                  {/* contant section */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                      {/* first section */}
                      <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                        <div className="lg:col-span-6 sm:col-span-12">
                          <img
                            className="lg:h-[30rem] sm:h-[15rem]"
                            src={structuralaudit1}
                            alt=""
                          />
                        </div>
                        <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                          <div className=" w-full">
                            <h2 className="text-3xl font-semibold text-[#243945]">
                              Post Structural Audit
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                            <p className="my-5 text-lg text-black">
                              Based on Structural Audit report following shall
                              be concluded :
                            </p>
                            <div>
                              <div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Repair Works for
                                </h2>
                                <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
                                    The restoration of lost sectional or
                                    monolithic properties of damaged members,
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
                                    The restoration of structural surfaces to a
                                    satisfactory operational standard.
                                  </li>
                                </ul>
                                <h2 className="my-3 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Strengthening and Retrofitting required due to
                                </h2>
                                <ul className=" space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
                                    Change of usage which may cause over-stress
                                    in the structural member.
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
                                    Serious materials and structural
                                    deteriorations which cause structural
                                    members to be no longer able to carry the
                                    present loading.
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
                                    To enhance the seismic resistance capacity
                                    in case structure not designed for due to
                                    change in Indian Seismic Codes and
                                    Standards.
                                  </li>
                                </ul>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PoststructuralAudit;
