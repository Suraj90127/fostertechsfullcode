import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import project from "../../../assets/image/project.png";
import { Link } from "react-router-dom";
import fabpro1 from "../../../assets/image/fabpro1.jpeg";
import fabpro2 from "../../../assets/image/fabpro2.webp";
import engprobanner from "../../../assets/image/engprobanner.webp";
import fabricationprobanner from "../../../assets/image/fabricationprobanner.webp";

const Fabricationpro = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const projectData = [
    {
      name: "M/S Wonder  Cement plant ",
      company: "Larsen and Tubro Ltd",
      ScopeofWork:
        "M/S Wonder  Cement plant at Nimbahera Subcontract for Larsen and Tubro Ltd ",
      img: fabpro1,
      Description:
        "Structural Steel Fabrication, erection work of Cyclones,  Risers, Calciners, Chimney, TA/TD duct, , Hot air duct, Clinker cooler duct, etc. ",

      priceheading: " price:",

      price: "1200MT",
      link: "/pp",
    },
    {
      name: "Ultratech Cement plant  ",
      company: "Larsen and Tubro Ltd",
      ScopeofWork:
        "Ultratech Cement plant at Pali, Rajsthan Subcontract for Larsen and Tubro Ltd ",
      img: fabricationprobanner,
      Description:
        "Structural Steel Fabrication, erection work of conveyor gallarey, Insert plates etc.",
      priceheading: " price:",

      price: "150MT      ",
      link: "/pp",
    },
    {
      name: "Adani Cement plant ",
      company: "Larsen and Tubro Ltd",
      ScopeofWork:
        "Adani Cement plant at Katni, MP Subcontract for Larsen and Tubro Ltd        ",
      img: fabpro2,
      Description:
        "Structural Steel Fabrication, erection work of conveyor gallarey, Insert plates etc        ",
      priceheading: " price:",

      price: "200MT      ",
      link: "/pp",
    },
    {
      name: "Shree Cement plant ",
      company: "Hazi Baba ",
      ScopeofWork:
        "Shree Cement plant Baloda bazar,Chatisgarh  Subcontract for Hazi Baba ",
      img: fabpro1,
      Description:
        "Structural Steel Fabrication, erection work of Cyclones,  Risers, Calciners, Chimney, TA/TD duct, , Hot air duct, Clinker cooler duct, etc",
      priceheading: " price:",

      price: "1000MT",
      link: "/pp",
    },
    {
      name: "Ultratech Cement plant ",
      company: "Simplex Infrastruxture Pvt. Ltd",
      ScopeofWork:
        "Ultratech Cement plant at Kotputli, Rajsthan Subcontract for Simplex Infrastruxture Pvt. Ltd ",
      img: fabpro1,
      Description:
        "Structural Steel Fabrication of bolts and Insert plates etc.",
      priceheading: " price:",

      price: "1200MT",
      link: "/pp",
    },
    {
      name: " ",
      company: "Micro Transmission Systen Pvt. Ltd",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd., Noida ",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Erection of  Pre Engineered shed for covid hospital.         ",
      priceheading: " price:",

      price: "120MT      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "Micro Transmission Systen Pvt. Ltd",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd., Noida",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Erection of  Pre Engineered Buildings at  Noida. Area app. 10000sqm        ",
      priceheading: " price:",

      price: "150MT      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "WOG Group of Companies Pte. Ltd.",
      ScopeofWork: "M/s WOG Group of Companies Pte. Ltd., Gurugram ",
      img: fabricationprobanner,
      Description:
        "Engineering, Fabrication and Erection of  Pre Engineered shed (RO Skid+Dosing+DM) at  Hindustan Petroleum Corporation Limited, Bathinda.         ",
      priceheading: " price:",

      price: "25MT      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "K K Construction and Infra Pvt. Ltd .",
      ScopeofWork: "M/s K K Construction and Infra Pvt. Ltd      ",
      img: fabpro1,
      Description:
        "Fabrication and Erection of  30m Garbage chute for 2 Buildings in Banaras Hindu university, Doctor’s residence by CPWD. ",
      priceheading: " price:",

      price: "10Lakh ",
      link: "/pp",
    },
    {
      name: " ",
      company: "KM/s Kashyapi Infrastructue Pvt. Ltd.      ",
      ScopeofWork: "M/s Kashyapi Infrastructue Pvt. Ltd.      ",
      img: fabpro1,
      Description:
        "Fabrication and Erection of  30m chute for 2 Buildings in Banaras Hindu university, Doctor’s residence by CPWD.        ",
      priceheading: " price:",

      price: "10 Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "M/s Kashyapi Infrastructue Pvt. Ltd.      ",
      ScopeofWork: "M/s Kashyapi Infrastructue Pvt. Ltd.      ",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Erection of  Pre Engineered 100 KLD Sewage Treatment Plant for Rail Vikas Nigam in New Delhi        ",
      priceheading: " price:",

      price: "35Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "M/s Stelarin Pvt. Ltd.      ",
      ScopeofWork: "M/s Stelarin Pvt. Ltd.   ",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Erection of  Pre Engineered 20 KLD Sewage Treatment Plant for GCNEP, Bahadurgarh        ",
      priceheading: " price:",

      price: "10Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "M/s Micro Transmission Systen Pvt. Ltd.      ",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd., Noida      ",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Errection of  Pre Engineered Buildings at  Slaughter House , Ludhiana. Area app. 5000sqm        ",
      priceheading: " price:",

      price: "50Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "M/s Micro Transmission Systen Pvt. Ltd    ",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd, Noida      ",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Errection of  Pre Engineered Buildings at  Slaughter House ,  Bhilai. Area app. 4000sqm        ",
      priceheading: " price:",

      price: "40Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "M/s Llyod Insulation Limited  ",
      ScopeofWork: "M/s Llyod Insulation Limited, New Delhi",
      img: fabpro1,
      Description:
        "Engineering, Fabrication and Erection of  20KL Fire Water Tanks and ETP Tanks for  Maruti Plant ,  Manesar. ",
      priceheading: " price:",

      price: "10Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "Brahmpuri Steel Ltd. ",
      ScopeofWork:
        "BHEL Corporate office c/o Brahmpuri Steel Ltd.  ,Sec-16 , Noida       ",
      img: fabpro1,
      Description:
        "Structural Steel Fabrication, erection ,alignment and painting works.        ",
      priceheading: " price:",

      price: "60Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "McCoy Architectural System Pvt. Ltd",
      ScopeofWork: "McCoy Architectural System Pvt. Ltd, Mumbai ",
      img: fabpro1,
      Description:
        "Structural Steel Fabrication, erection ,alignment and painting works for TCS Mihan, nagpur",
      priceheading: " price:",

      price: "25Lakh      ",
      link: "/pp",
    },
    {
      name: " ",
      company: "Grasim Chemical Industries Ltd",
      ScopeofWork: "Grasim Chemical Industries Ltd.  District Ganjam Orrisa ",
      img: fabpro1,
      Description:
        "Mini Boiler, Dismantling and re erection  , alignment , work .  ",
      priceheading: " price:",

      price: "15Lakh      ",
      link: "/pp",
    },
  ];
  return (
    <>
      <div>
        {/* Banner section */}

        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[15rem] w-full opacity-100 brightness-50"
              src={fabricationprobanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-32 lg:left-32 sm:top-20 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              {" "}
              Fabrication Project
            </p>
            <p className="text-white lg:w-[50%] mt-10 lg:text-lg sm:text-base sm:hidden lg:block">
              A fabrication design involves the innovation of practice - formed
              factors, structures, or systems by assembling raw accoutrements
              orpre-existing factors through varied manufacturing processes.
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

        {/* <div>
          <div className=" bottom-0 h-screen bg-[#1187f4] w-full mt-20 bg-no-repeat opacity-80 careers">
            <div className="flex flex-row p-20  absolute">
              <div className="right basis-1/2 mx-10">
                <h2 className="text-5xl font-bold my-10 text-white leading-normal font-['DM Serif Display, serif'] solid-heading">
                  Fabrication <br />
                  Project
                </h2>
                <p
                  className="text-lg text-gray-1
                00"
                >
                  A fabrication design involves the innovation of practice -
                  formed factors, structures, or systems by assembling raw
                  accoutrements orpre-existing factors through varied
                  manufacturing processes.
                </p>
                <div>
                  <div className=" mt-10">
                    <button
                      class="bg-yellow-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent 
                rounded flex flex-row"
                    >
                      <span>Download</span>
                      <span className="text-xl ml-5">
                        <MdOutlineFileDownload />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lift basis-1/2 mx-10">
                <div>
                  <img
                    className="bg-transparent rounded-lg h-[28rem]  "
                    src={project}
                    alt=""
                  />
                </div>
              </div>
            </div>

          </div>
        </div> */}
        {/* project section */}
        <div>
          {/* Latest project */}
          <div>
            <section class=" lg:pt-[30px] bg-gray-100 pt-5">
              <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 ">
                <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                  Fabrication Project
                </h2>
                <hr className="h-2 w-10  rounded-full bg-yellow-400 " />
                <p className=" lg:mx-20 sm:mx-5 lg:text-lg sm:text-base">
                  A fabrication design involves the innovation of practice -
                  formed factors, structures, or systems by assembling raw
                  accoutrements orpre-existing factors through varied
                  manufacturing processes.
                </p>
              </div>
              <div class="lg:mx-10 sm:mx-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10 ">
                {projectData?.map((data, i) => (
                  <div class=" ">
                    <div class="w-full h-[100%] bg-white">
                      <div className=" bg-white" key={i}>
                        {/* <Link to={data.link}> */}
                        <div className="mb-4 overflow-hidden relative">
                          <div className="absolute mx-2">
                            <p className="text-base text-white">{data.name}</p>
                          </div>
                          <img
                            className="w-full h-[15rem]"
                            src={data.img}
                            alt="image"
                          />
                          <Link to="" className="absolute  bottom-0 right-0">
                            <button className=" text-white bg-blue-600 px-4 py-2 rounded-l-md ">
                              {" "}
                              {data.company}
                            </button>
                          </Link>
                        </div>
                        <div className=" mx-5">
                          <h2 class=" mb-5 inline-block rounded py-1 text-base font-semibold text-black hover:text-blue-500">
                            {data.ScopeofWork}
                          </h2>
                          <p className="">{data.Description}</p>

                          <p className="my-5 ">
                            <span className="text-lg font-bold">
                              {data.priceheading}
                            </span>
                            <span className="ml-20">{data.price}</span>
                          </p>
                        </div>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* <Link
                  to=""
                  className="hover:text-blue-400 text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-start text-[#002E5B] "
                >
                  <span className="">See All Projects</span>
                </Link> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fabricationpro;
