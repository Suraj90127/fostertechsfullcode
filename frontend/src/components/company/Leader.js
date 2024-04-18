import React, { useEffect } from "react";
import leader1 from "../../assets/image/leader1.jpg";
import trading1 from "../../assets/image/trading1.jpg";

const Leader = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[10rem] w-full opacity-100"
              src={leader1}
              alt=""
            />
          </div>
        </div>

        {/* leaders profile */}
        <div>
          <div className=" text-black flex justify-center  tracking-wide">
            <p className="mt-10 lg:text-4xl sm:text-[25px] font-semibold ">
              Executive leadership team
            </p>
            <hr className="mt-10 " />
          </div>
          {/* Divey Mahajan */}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] ">Divey Mahajan</h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Chief Executive Officer
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 15 Years{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Project Management, Petrochemical, Upstream Onshore
                            and Offshore Oil & Gas, Downstream Onshore and
                            Offshore Oil & Gas, Power Plants, Water Treatment,
                            Infrastructure, Civil Structure.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>Kellogg Brown & Root (KBR), Singapore, </li>
                            <li>McDermott Asia Pacific, Singapore, </li>
                            <li>NPCC, Abu Dhabi , </li>
                            <li>Samsung Heavy Industries, Noida, India, </li>
                            <li>
                              {" "}
                              Triune Energy Services Pvt. Ltd., Delhi, India,{" "}
                            </li>
                            <li>Desein Pvt Limited, Delhi, India,</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Faisel Tufel */}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 ">
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] "> Faisel Tufel</h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Managing Director
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 15 Years
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Project Management, Petrochemical, Upstream Onshore
                            and Offshore Oil & Gas, Downstream Onshore and
                            Offshore Oil & Gas, Power Plants, Water Treatment,
                            Infrastructure, Civil Structure.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>Kellogg Brown & Root (KBR), Singapore, </li>
                            <li>McDermott Asia Pacific, Singapore, </li>
                            <li>Samsung Heavy Industries, Noida, India,</li>
                            <li>Desein Pvt Limited, Delhi, India,</li>
                            <li>
                              {" "}
                              RDA Civil Engineering Systems Pvt. Ltd., Delhi,
                              India,
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:my-2 lg:my-0">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*   Tufel Ahmed */}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] ">Tufel Ahmed</h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Senior Consultant
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 45 Years{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Solid Waste Management Expertise, Handled Municipal
                            Corporation of Delhi major SLF sites, Compost
                            plants, Construction and demolition waste plants,
                            waste to energy plants, RDF cum power plants,
                            extraction of methane gas projects
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>
                              {" "}
                              Executive Engineer (SLF) – Municipal Corporation
                              of Delhi (MCD) - Period – 1 April 1975 till 3
                              April 2014,{" "}
                            </li>
                            <li>
                              {" "}
                              Executive Engineer (Consultant) – Municipal
                              Corporation of Delhi (MCD) - Period – 4 April 2014
                              till date,
                            </li>{" "}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Harpreet Jagdey */}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] "> Harpreet Jagdey</h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Director (Aberdeen Operations)
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 15 Years
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Project Management, Petrochemical, Upstream Onshore
                            and Offshore Oil & Gas, Downstream Onshore and
                            Offshore Oil & Gas, Power Plants, Water Treatment,
                            Infrastructure, Civil Structure.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>Wood Group PSN, </li>
                            <li>EnerMech, Aberdeen, </li>
                            <li>WSP Group, United Kingdom,</li>
                            <li>Stup Consultants, Delhi, India,</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rakesh Kumar Gupta*/}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] ">
                            Rakesh Kumar Gupta
                          </h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Director (Engineering)
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 37 Years{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Project Management, Petrochemical, Upstream Onshore
                            and Offshore Oil & Gas, Downstream Onshore and
                            Offshore Oil & Gas.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>Mott MacDonald, Abu Dhabi, </li>
                            <li>L&T Valdel, Faridabad, India, </li>
                            <li>
                              Triune Energy Services Pvt. Ltd., Delhi, India,{" "}
                            </li>
                            <li>Sngineers India Limited, Delhi, India, </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*    Amit Rai*/}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] ">
                            {" "}
                            Harish Chandra Negi
                          </h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Dy. Manager (Process)
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 13.5 Years
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Offshore Process Design & Development for offshore
                            projects including FPSO and fixed platforms.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>
                              Samsung Heavy Industries India Pvt. Ltd. (SHI).{" "}
                            </li>
                            <li>Triune Projects Pvt. Ltd</li>
                            <li>Engineers India Ltd. (EIL).</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rakesh Kumar Gupta*/}
          <div className="w-[100%]  bg-white lg:my-10 sm:my-0">
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12 sm:mb-10 lg:mb-0">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={trading1}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div>
                        <div className="heading  text-[25px] font-semibold">
                          <h2 className="text-[#243945] ">Amit Rai</h2>
                          <div className="mt-5 leading-loose">
                            <p className="font-[500] text-lg">
                              Consultant (Architecture)
                            </p>
                            <p className="font-[500] text-lg">
                              Total Experience- 10 Years{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Conceptual Study, Planning, Architectural Design,
                            Project Co-ordination of projects for Manufacturing
                            Units, Commercial, Residential, Infrastructure,
                            Chemical Plants, Pharmaceutical, Townships,
                            Multilevel Parking, Educational, Hospitals etc.
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          Part of Career History:
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>Hindustan Coca Cola Beverages,</li>
                            <li>Hero MotoCorp,</li>
                            <li>Wave Group,</li>
                            <li>Wave Group,</li>
                            {/* <li>Jubilant Group, </li>
                            <li>Hamdard Facilities, </li>
                            <li>Dabur Group,</li>
                            <li>Gujarat International Finance Tec-City,</li>
                            <li>NTPC</li> */}
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
    </>
  );
};

export default Leader;
