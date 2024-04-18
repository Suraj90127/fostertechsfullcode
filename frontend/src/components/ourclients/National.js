import React, { useEffect } from "react";
import recpro2 from "../../assets/image/recpro2.png";
import recpro13 from "../../assets/image/recpro13.png";
import larsen from "../../assets/comlogo/larsen-turbo-logo.jpeg";
import sree from "../../assets/comlogo/shree.png";
import simplex from "../../assets/comlogo/simplex.png";
import micr from "../../assets/comlogo/micr.webp";
import wog from "../../assets/comlogo/WOG.png";
import kk from "../../assets/comlogo/kk-construction.png";
import kashyapi from "../../assets/comlogo/kashyapi.png";
import llyod from "../../assets/comlogo/llyod.png";
import steel from "../../assets/comlogo/steel.png";
import mccopy from "../../assets/comlogo/mcCoy.png";
import grasin from "../../assets/comlogo/grasim.png";
import ourclientbanner from "../../assets/image/ourclientbanner.webp";
import International from "./International";

const National = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const clientData = [
    // fabrication
    {
      name: "Larsen and Tubro Ltd",
      ScopeofWork:
        "M/S Wonder  Cement plant at Nimbahera Subcontract for Larsen and Tubro Ltd ",
      photo: larsen,
      desc: "Structural Steel Fabrication, erection work of Cyclones,  Risers, Calciners, Chimney, TA/TD duct, , Hot air duct, Clinker cooler duct, etc.",

      link: "/pp",
    },
    {
      name: "Larsen and Tubro Ltd",

      photo: larsen,
      desc: "Structural Steel Fabrication, erection work of conveyor gallarey, Insert plates etc.",
    },
    {
      name: "Larsen and Tubro Ltd",

      photo: larsen,
      desc: "Structural Steel Fabrication, erection work of conveyor gallarey, Insert plates etc.",

      link: "/pp",
    },
    {
      name: "Hazi Baba ",

      photo: sree,
      desc: "Structural Steel Fabrication, erection work of Cyclones,  Risers, Calciners, Chimney, TA/TD duct, , Hot air duct, Clinker cooler duct, etc.",

      link: "/pp",
    },
    {
      name: "Simplex Infrastruxture Pvt. Ltd",
      photo: simplex,
      desc: "Structural Steel Fabrication of bolts and Insert plates etc.",

      link: "/pp",
    },
    {
      name: "Micro Transmission Systen Pvt. Ltd",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd., Noida ",
      photo: micr,
      desc: "Engineering, Fabrication and Erection of  Pre Engineered shed for covid hospital.",

      link: "/pp",
    },
    {
      name: "Micro Transmission Systen Pvt. Ltd",
      ScopeofWork: "M/s Micro Transmission Systen Pvt. Ltd., Noida",
      photo: micr,
      desc: "Engineering, Fabrication and Erection of  Pre Engineered Buildings at  Noida. Area app. 10000sqm.",

      link: "/pp",
    },
    {
      name: "WOG Group of Companies Pte. Ltd.",

      photo: wog,
      desc: "Engineering, Fabrication and Erection of  Pre Engineered shed (RO Skid+Dosing+DM) at  Hindustan Petroleum Corporation Limited, Bathinda.",

      link: "/pp",
    },
    {
      name: "K K Construction and Infra Pvt. Ltd .",

      photo: kk,
      desc: "Fabrication and Erection of  30m Garbage chute for 2 Buildings in Banaras Hindu university, Doctor’s residence by CPWD.",

      link: "/pp",
    },
    {
      name: "KM/s Kashyapi Infrastructue Pvt. Ltd.      ",

      photo: kk,
      desc: "Fabrication and Erection of  30m chute for 2 Buildings in Banaras Hindu university, Doctor’s residence by CPWD.",

      link: "/pp",
    },
    {
      name: "M/s Kashyapi Infrastructue Pvt. Ltd.      ",

      photo: kashyapi,
      desc: "Engineering, Fabrication and Erection of  Pre Engineered 100 KLD Sewage Treatment Plant for Rail Vikas Nigam in New Delhi.",

      link: "/pp",
    },
    {
      name: "M/s Stelarin Pvt. Ltd.      ",

      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
      desc: "Engineering, Fabrication and Erection of  Pre Engineered 20 KLD Sewage Treatment Plant for GCNEP, Bahadurgarh.",

      link: "/pp",
    },
    {
      name: "M/s Micro Transmission Systen Pvt. Ltd.      ",

      photo: micr,
      desc: "Engineering, Fabrication and Errection of  Pre Engineered Buildings at  Slaughter House , Ludhiana. Area app. 5000sqm",

      link: "/pp",
    },
    {
      name: "M/s Micro Transmission Systen Pvt. Ltd, Noida.",

      photo: micr,
      desc: "Engineering, Fabrication and Errection of  Pre Engineered Buildings at  Slaughter House ,  Bhilai. Area app. 4000sqm",

      link: "/pp",
    },
    {
      name: "M/s Llyod Insulation Limited Delhi.",

      photo: llyod,
      desc: "Engineering, Fabrication and Erection of  20KL Fire Water Tanks and ETP Tanks for  Maruti Plant ,  Manesar.",

      link: "/pp",
    },
    {
      name: "Brahmpuri Steel Ltd. ",

      photo: steel,
      desc: "Structural Steel Fabrication, erection ,alignment and painting works.",

      link: "/pp",
    },
    {
      name: "McCoy Architectural System Pvt. Ltd",

      photo: mccopy,
      desc: "Structural Steel Fabrication, erection ,alignment and painting works for TCS Mihan, nagpur. ",

      link: "/pp",
    },
    {
      name: "Grasim Chemical Industries Ltd",

      photo: grasin,
      desc: "Mini Boiler, Dismantling and re erection  , alignment , work.",

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
              className="lg:h-[30rem] sm:h-[12rem] w-full opacity-100 brightness-75"
              src={ourclientbanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-32 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 text-4xl font-bold ">Our National Clients</p>
          </div>
        </div>

        {/* Connect with our experts */}
        <div className="bg-gray-300">
          <section class=" pt-[30px] ">
            <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20">
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                Fabrication Clients
              </h2>
              <hr className="h-2 w-10 mt-2 rounded-full bg-yellow-400 mr-52" />
            </div>
          </section>
          {/* Clients section */}

          <div className="w-[95%] m-auto ">
            <div className="lg:mt-10 sm:mt-5">
              <div className="grid grid-cols-12">
                {clientData.map((item) => (
                  <div className="bg-white h-[400px] text-black rounded-xl lg:col-span-4 md:col-span-6 sm:col-span-12 mx-3 my-2">
                    <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                      <img
                        src={item.photo}
                        alt=""
                        className=" w-40 h-40 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                      <p className="text-lg text-gray-500 font-medium">
                        {item.name}
                      </p>
                      <p className="mt-3 text-center">{item.desc}</p>
                      {/* <div>Price: {item.price}</div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <International />
        </div>
      </div>
    </>
  );
};

export default National;
