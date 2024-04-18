import React, { useEffect, useState } from "react";

import structurlauditbanner from "../../../assets/image/structuralauditbanner.webp";
import structuralaudit1 from "../../../assets/image/stracturalaudit.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const StructuralAudit = () => {
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
              className="lg:h-[35rem] sm:h-[15rem] w-full opacity-100 brightness-75"
              src={structurlauditbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-52 sm:left-10 text-black text-2xl tracking-wide sm:hidden lg:block">
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
            <p className="mt-10 text-4xl font-bold ">Structural Audit</p>
            <p className="text-white lg:w-[50%] mt-10 text-lg sm:hidden lg:block">
              Structural audit is a preliminary technical survey of building to
              assess its general health as a civil engineer structure. It is an
              overall health and performance check up of building.
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
            Structural Audit
          </h2>
          {/* <hr className="h-2 w-10 mt-2 rounded-full bg-yellow-400 mr-52" /> */}
          <p className="text-lg w-[90%] mt-10 text-center">
            Structural audit is a preliminary technical survey of building to
            assess its general health as a civil engineer structure. It is an
            overall health and performance check up of building.
          </p>
        </div>

        <div className="lg:flex ">
          <div className=" w-full ">
            <div className=" flex">
              <div className="w-[100%]  bg-white my-10">
                <div className="bg-white sm:grid-cols-1">
                  {/* contant section */}
                  <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                    <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-10">
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
                              Structural Audit
                            </h2>
                            <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                            <p className="my-5 text-lg text-black">
                              Structural Audit is an overall health and
                              performance check up of a building like a doctor
                              examines a patient and advise the methods to avoid
                              sudden collapse of building.
                            </p>
                            <div>
                              <div>
                                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                                  Services Offered for Structural Audit
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
                                    Visual Inspection,
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
                                    Preparation of architectural and as-built
                                    drawings,
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
                                    Performing Non-Destructive Testing (NDT),
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
                                    Load carrying capacity calculations of
                                    structural members,
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
                                    Performing Earthquake, Push over and Static
                                    Structural Software analyses.
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
                                    Detail drawings and 3D Modeling.
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
                                    Preparation of Bill of Quantities (BOQ),
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
                                    Preparation of documents for Tender purpose,
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
                                    Providing Strengthening & Modification
                                    Solutions
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
                                    Providing Structural Stability Certificate
                                    on the basis of Structural Audit Report.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-10">
                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white underline w-full">
                          Structural Audit working Stages
                        </h2>
                        <ul className=" space-y-1 lg:mx-10 sm:mx-0 text-gray-500 list-inside dark:text-gray-400">
                          <h2 className="py-5 text-base font-normal text-gray-900 dark:text-white underline w-full">
                            STAGE 1 – Verification of Available Documents
                          </h2>
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
                            Study available as-built architectural, structural
                            drawings and design reports.
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
                            Preparation of as-built drawings in case not
                            available.
                          </li>
                        </ul>
                        <ul className=" space-y-1 lg:mx-10 sm:mx-0 text-gray-500 list-inside dark:text-gray-400">
                          <h2 className="py-5 text-base font-normal text-gray-900 dark:text-white underline w-full">
                            STAGE 2 – Verification of Available Documents
                          </h2>
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
                            To identify type of structure i.e. load bearing or
                            RCC framed type structure.
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
                            To identify different type of structural defects.
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
                            To identify any material deterioration.
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
                            To identify any signs of structural distress and
                            deformation.
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
                            To check for any foundation settlement.
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
                            To identify significant dampness and leekage
                            locations.
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
                            To identify any alteration and addition in the
                            structure, misuse which may result in overloading.
                          </li>
                        </ul>
                        <ul className=" space-y-1 lg:mx-10 sm:mx-0 text-gray-500 list-inside dark:text-gray-400">
                          <h2 className="py-5 text-base font-normal text-gray-900 dark:text-white underline w-full">
                            STAGE 3 – Verification of Available Documents
                          </h2>
                          <p>
                            In addition to visual inspection, the real strength
                            and quality of a concrete structure need to be
                            checked with non-destructive tests. These tests have
                            been put under four categories depending on the
                            purpose of test as under:
                          </p>
                          <div className="pt-5  flex flex-col justify-normal lg:w-[70%] sm:full lg:ml-40">
                            <table class="border-collapse border border-slate-400 ...">
                              <thead className="w-full">
                                <tr>
                                  <th class="border border-slate-300 p-2">
                                    Concrete Strength Checks
                                  </th>
                                  <th class="border border-slate-300 p-2">
                                    Chemical Analysis
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td class="border border-slate-300 p-3">
                                    Rebound Hammer Text
                                  </td>
                                  <td class="border border-slate-300 p-3">
                                    Carbornation Text
                                  </td>
                                </tr>
                                <tr>
                                  <td class="border border-slate-300 p-3">
                                    Ultrasonic Pulse Velocity Text
                                  </td>
                                  <td class="border border-slate-300 p-3">
                                    Chloride & Sulphate
                                  </td>
                                </tr>
                                <tr>
                                  <td class="border border-slate-300 p-3">
                                    Core Extraction and its evaluation
                                  </td>
                                </tr>
                              </tbody>
                              <thead className="w-full">
                                <tr>
                                  <th class="border border-slate-300 p-2">
                                    Corrosion Assessment Check
                                  </th>
                                  <th class="border border-slate-300 p-2">
                                    Homogeneity & Integrity Assessment
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td class="border border-slate-300 p-3">
                                    Cover Meter or Rebar locator
                                  </td>
                                  <td class="border border-slate-300 p-3">
                                    Ulttrasonic Pluse Velocity text
                                  </td>
                                </tr>
                                <tr>
                                  <td class="border border-slate-300 p-3">
                                    Half Cell Method
                                  </td>
                                  <td class="border border-slate-300 p-3"></td>
                                </tr>
                                <tr>
                                  <td class="border border-slate-300 p-3">
                                    Permeability
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </ul>
                        <ul className=" space-y-1 lg:mx-10 sm:mx-0 text-gray-500 list-inside dark:text-gray-400">
                          <h2 className="py-5 text-base font-normal text-gray-900 dark:text-white underline w-full">
                            STAGE 4 – ANALYSIS
                          </h2>
                          <p>
                            Based on Visual Inspection, as-built drawings and
                            NDT results, following structural analyses are
                            performed if required in case of framed structures
                            to satisfy present Indian code & Standards :
                          </p>
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
                            Static Analysis,
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
                            Seismic Analysis,
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
                            Push Over Analysis,
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
                            Miscellaneous Calculations as required.
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
    </>
  );
};

export default StructuralAudit;
