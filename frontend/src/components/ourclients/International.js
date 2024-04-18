import React, { useEffect } from "react";
import counter1 from "../../assets/image/counter-1.webp";
import counter2 from "../../assets/image/counter-2.webp";
import counter3 from "../../assets/image/counter-3.webp";
import "./clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import Marquee from "../dummy/Marquee";
import triune from "../../assets/comlogo/triune.png";
import tcp from "../../assets/comlogo/tcp.webp";
import wood from "../../assets/comlogo/wood.png";
import multitex from "../../assets/comlogo/multitex.png";
import llyod from "../../assets/comlogo/llyod.png";
import micr from "../../assets/comlogo/micr.webp";
import triveni from "../../assets/comlogo/triveni-engineering.png";

const International = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const clients = [
    {
      proname: "MODEC",
      name: "Triune Pvt. Ltd ",
      photo: triune,
      desc: "The FPSO will be installed by MODEC offshore in a disconnectable yoke moored configuration at a design water depth of approximately 30 meters. The topsides facilities have the process capacities of 90kbpd oil, 80kbpd produced water, 75MMscfd gas and 120kbpd water injection. ",

      link: "/pp",
    },
    {
      proname: "Qatar Offshore, operated by QatarEnergy.",
      name: "WOOD Group",

      photo: wood,
      desc: "Maydan Mahzam (MM) and Bul Hanine (BH) fields are two mature oil fields in Qatar Offshore, operated by QatarEnergy.  The two fields have been producing oil and associated gas for over 50 years with the production rates continuously declining.",

      link: "/pp",
    },
    {
      proname: "Qatar Offshore, operated by QatarEnergy.",
      name: "WOOD Group",

      photo: wood,
      desc: "Maydan Mahzam (MM) and Bul Hanine (BH) fields are two mature oil fields in Qatar Offshore, operated by QatarEnergy.  The two fields have been producing oil and associated gas for over 50 years with the production rates continuously declining.",

      link: "/pp",
    },

    {
      proname: "ONGC's Life Extension of Well Platform Project",
      name: "Triune Pvt. Ltd (Engineering Consultant)",

      photo: triune,
      desc: "Structural Work 2 Nos.  of Platform of (NS and SU) ONGC's Life Extension of Well Platform Project ",

      link: "/pp",
    },
    {
      proname: "ONGC's Life Extension of Well Platform Project",
      name: "Triune Pvt. Ltd (Engineering Consultant)",
      ScopeofWork:
        "Structural Design in SACS Detail drawings in Autocad and 3D modeling in PDMS.",
      photo: triune,
      desc: "Structural Work 2 Nos.  of Platform of (NS and SU) ONGC's Life Extension of Well Platform Project",
      Duration: "June 2017-July 2017",
      Valueheading: " Value:",
      priceheading: " price:",
      Value: "Engineering Cost = Rs. 20 Crore",
      price: "Man-hours: 2500 WO Value : Rs. 1300000/-",
      link: "/pp",
    },
    {
      proname: "ONGC's Life Extension of Well Platform Project",
      name: "Triune Pvt. Ltd (Engineering Consultant)",

      photo: triune,
      desc: "Balance Structural Work 2 Nos.  of Platform of (N2 and SN7) ONGC's Life Extension of Well Platform Project",

      link: "/pp",
    },
    {
      proname: "Cairns Petrofac Rageshwari Project",
      name: "Multitex Pvt. Ltd.(EPC Contractor)",

      photo: multitex,
      desc: "Cairns Petrofac Rageshwari Project - TEG Regeneration Skid with Pipe supports - CSU Skid with Access Platform and Pipe Supports - HCDP skid with Equipment Mounted Platform. -Pipe Rack with Access Platform, Staircase and Ladder. ",

      link: "/pp",
    },
    {
      proname: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      name: "TPL-GIL JV (EPC Contractor)",
      ScopeofWork:
        "Master Plan of DFCC Housing at Boraki. Architectural, Structural and MEP for  utility Buildings.",
      photo: tcp,
      desc: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",

      link: "/pp",
    },
    {
      proname: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      name: "TPL-GIL JV (EPC Contractor)",

      photo: tcp,
      desc: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",

      link: "/pp",
    },
    {
      proname: "STP Mahsani, UP ",
      name: "Triveni Engineering Pvt. Ltd.",

      photo: triune,
      desc: "Architectural, Civil and Structural Consultancy Services for STP Mahsani, UP",

      link: "/pp",
    },
    {
      proname: "Design and Fabrication ",
      name: "Lloyd Insulation India Limited.",

      photo: llyod,
      desc: "Design and Fabrication of 2  20kl MS Fire water tanks with inside FRP coating  for Maruti Suzuki India Limited, Gurugram",

      link: "/pp",
    },
    {
      proname: "Design and Fabrication ",
      name: "Lloyd Insulation India Limited",

      photo: llyod,
      desc: "Design and Fabrication of 2  20kl MS Fire water tanks with inside Epoxy coating  for Maruti Suzuki India Limited, Gurugram",

      link: "/pp",
    },
    {
      proname: "Design and Fabrication ",
      name: "Lloyd Insulation India Limited",
      ScopeofWork:
        "Structural Design in Staad Detail drawings in Autocad and Fabrication",
      photo: llyod,
      desc: "Design and Fabrication of 5.4kl and 3.4kl MS ETP tanks with inside Epoxy coating  for Maruti Suzuki India Limited, Gurugram",

      link: "/pp",
    },
    {
      proname: "Slaughter house at Ludhiana.",
      name: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      photo: micr,
      desc: "Engineering Consultancy for Slaughter house at Ludhiana.",

      link: "/pp",
    },
    {
      proname: "Slaughter house at Bhilai",
      name: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      photo: micr,
      desc: "Engineering Consultancy for Slaughter house at Bhilai",

      link: "/pp",
    },
    {
      proname: "Slaughter house at Sikkim",
      name: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      photo: micr,
      desc: "Engineering Consultancy for Slaughter house at Sikkim.",

      link: "/pp",
    },
    {
      proname: "C&D waste management at Thane, Maharashtra.",
      name: "Arcadis",
      ScopeofWork: "Preparation of Master Plan",
      photo: triveni,
      desc: "Engineering Consultancy for C&D waste management at Thane, Maharashtra.",

      link: "/pp",
    },
    {
      proname: "Sara Carroll",
      name: "Head of UI Design",
      desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
      photo: triveni,
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };
  const row2 = [triune, wood, multitex, llyod, micr, triveni];
  const row1 = [triune, wood, multitex, llyod, micr, triveni];

  return (
    <>
      <div className="bg-gray-300">
        {/* Banner section */}

        {/* <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-[30rem] sm:h-[12rem] w-full opacity-100 brightness-50"
              src={inerOurClient}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-40 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              Our International Clients
            </p>
           

            <div className=" mt-10">
           

              <div>
                <div className=" mt-10 flex">
                 
                </div>
              </div>
             
            </div>
          </div>
        </div> */}

        <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 lg:my-10 sm:mt-10">
          <h2 className="lg:text-3xl md:text-2xl sm:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
            International Engineering Clients
          </h2>
          <hr className="h-2 w-10 mt-2 rounded-full bg-yellow-400 mr-52" />
          {/* <p className="text-lg w-[90%] mt-10">
            We have many international clients that presents us a chance to work
            on broader range of projects and gives us access to more variety
            than ever. Different countries may have unique industry demands and
            business needs, which open doors to exciting and diverse project
            opportunities Working with a global client base enables us to expand
            project portfolios, showcase a broader range of capabilities, and
            increase our expertise. Ultimately, the new types of projects you
            take on can go a long way in attracting and retaining a more diverse
            client base.
          </p> */}
        </div>
        <div className="w-[95%] m-auto ">
          <div className="">
            <div className="grid grid-cols-12">
              {clients.map((item) => (
                <div className="bg-white h-[500px] text-black rounded-xl lg:col-span-4 sm:col-span-12 mx-3 my-2">
                  <div className="h-56 rounded-t-xl bg-indigo-300 flex justify-center items-center">
                    <img
                      src={item.photo}
                      alt=""
                      className="h-44 w-44 rounded-full"
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

        {/* counter section */}

        <div className="counter w-[100%] lg:h-[10rem] m-auto flex flex-col justify-center align-middle text-center mt-10">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 sm:col-span-12  font-[DM Serif Display] counter-class flex  justify-center">
              <div className="">
                <img src={counter1} alt="" className="h-16 w-16 mx-2" />
              </div>
              <div>
                <span className="text-5xl text-blue-500 font-medium">
                  <CountUp start={0} end={100} delay={5}>
                    +
                  </CountUp>
                  %
                </span>

                <h1 className="font-[600]">HAPPY CLIENTS</h1>
              </div>
            </div>
            <div className="lg:col-span-4 sm:col-span-12 sm:my-10 lg:my-0  font-[DM Serif Display] counter-class flex justify-center">
              <div>
                <img src={counter2} alt="" className="h-16 w-16 mx-2" />
              </div>
              <div>
                <span className="text-5xl text-blue-500 font-medium">
                  <CountUp start={0} end={100} delay={5}></CountUp>
                </span>

                <h1 className="font-[600]">FINISHED PROJECTS</h1>
              </div>
            </div>
            <div className="lg:col-span-4 sm:col-span-12  font-[DM Serif Display] counter-class flex justify-center">
              <div>
                <img src={counter3} alt="" className="h-16 w-16 mx-2" />
              </div>
              <div>
                <span className="text-5xl text-blue-500 font-medium">
                  <CountUp start={0} end={10} delay={5}>
                    +
                  </CountUp>
                </span>

                <h1 className="font-[600]">Working Projects</h1>
              </div>
            </div>
          </div>
        </div>

        <Marquee row1={row1} row2={row2} />
      </div>
    </>
  );
};

export default International;
