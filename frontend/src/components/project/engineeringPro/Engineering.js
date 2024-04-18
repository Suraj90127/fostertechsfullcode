import React, { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import project from "../../../assets/image/project.png";
import engpro1 from "../../../assets/image/engpro1.jpeg";
import engprobanner from "../../../assets/image/engprobanner.webp";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Engineeringpro = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const projectData = [
    {
      name: " MODEC",
      company: "Triune Pvt. Ltd (Engineering Consultant)",
      ScopeofWork:
        "Structural Design in SACS Detail drawings in Autocad and 3D modeling in E3d.",
      img: engpro1,
      Description:
        "The FPSO will be installed by MODEC offshore in a disconnectable yoke moored configuration at a design water depth of approximately 30 meters. The topsides facilities have the process capacities of 90kbpd oil, 80kbpd produced water, 75MMscfd gas and 120kbpd water injection. ",
      Duration: "Jan 2019-Feb 2020",
      Valueheading: " Value:",
      priceheading: " price:",
      Value:
        "Total Project Cost = App. $ 2 Billion Engineering Cost = App. $6Million",
      price:
        "Man-hours: 20000 WO Value : Rs. 13000000/-Addition Value: RS. 35,000,00",
      link: "/pp",
    },
    {
      name: " Qatar Offshore, operated by QatarEnergy.",
      company: "WOOD Group",
      ScopeofWork: "Decomissioning Structural Design in SACS",
      img: engpro1,
      Description:
        "Maydan Mahzam (MM) and Bul Hanine (BH) fields are two mature oil fields in Qatar Offshore, operated by QatarEnergy.  The two fields have been producing oil and associated gas for over 50 years with the production rates continuously declining.",
      Duration: "Nov 2023-March 2024",
      Valueheading: " ",
      priceheading: "",
      Value: "",
      price: "",
      link: "/pp",
    },
    {
      name: "Qatar Offshore, operated by QatarEnergy.",
      company: "WOOD Group",
      ScopeofWork: "Structural Design in SACS",
      img: engpro1,
      Description:
        "Maydan Mahzam (MM) and Bul Hanine (BH) fields are two mature oil fields in Qatar Offshore, operated by QatarEnergy.  The two fields have been producing oil and associated gas for over 50 years with the production rates continuously declining.",
      Duration: "August 2023-October 2023",
      Valueheading: " ",
      priceheading: "",
      Value: "",
      price: "",
      link: "/pp",
    },

    {
      name: "ONGC's Life Extension of Well Platform Project",
      company: "Triune Pvt. Ltd (Engineering Consultant)",
      ScopeofWork:
        "Structural Design in SACS Detail drawings in Autocad and 3D modeling in PDMS.",
      img: engpro1,
      Description:
        "Structural Work 2 Nos.  of Platform of (NS and SU) ONGC's Life Extension of Well Platform Project ",
      Duration: "March 2017-May 2017",
      Valueheading: "",
      priceheading: " price:",
      Value: "",
      price: "Man-hours: 3000 WO Value : Rs. 1500000/-",
      link: "/pp",
    },
    {
      name: "ONGC's Life Extension of Well Platform Project",
      company: "Triune Pvt. Ltd (Engineering Consultant)",
      ScopeofWork:
        "Structural Design in SACS Detail drawings in Autocad and 3D modeling in PDMS.",
      img: engpro1,
      Description:
        "Structural Work 2 Nos.  of Platform of (NS and SU) ONGC's Life Extension of Well Platform Project",
      Duration: "June 2017-July 2017",
      Valueheading: " Value:",
      priceheading: " price:",
      Value: "Engineering Cost = Rs. 20 Crore",
      price: "Man-hours: 2500 WO Value : Rs. 1300000/-",
      link: "/pp",
    },
    {
      name: "ONGC's Life Extension of Well Platform Project",
      company: "Triune Pvt. Ltd (Engineering Consultant)",
      ScopeofWork:
        "Structural Design in SACS Detail drawings in Autocad and 3D modeling in PDMS.",
      img: engpro1,
      Description:
        "Balance Structural Work 2 Nos.  of Platform of (N2 and SN7) ONGC's Life Extension of Well Platform Project",
      Duration: "August 2017-Sep 2017",
      Valueheading: " Value:",
      priceheading: " price:",
      Value: "Engineering Cost = Rs. 20 Crore",
      price: "Man-hours: 1000 WO Value : Rs. 600000/-",
      link: "/pp",
    },
    {
      name: "Cairns Petrofac Rageshwari Project",
      company: "Multitex Pvt. Ltd.(EPC Contractor)",
      ScopeofWork:
        "Structural Design in Staad Detail drawings in Autocad and 3D modeling in PDMS.",
      img: engpro1,
      Description:
        "Cairns Petrofac Rageshwari Project - TEG Regeneration Skid with Pipe supports - CSU Skid with Access Platform and Pipe Supports - HCDP skid with Equipment Mounted Platform. -Pipe Rack with Access Platform, Staircase and Ladder. ",
      Duration: "Oct 2018-June 2019",
      Valueheading: "",
      priceheading: " price:",
      Value: "",
      price: "Man-hours: 500 WO Value : Rs. 273000/-",
      link: "/pp",
    },
    {
      name: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      company: "TPL-GIL JV (EPC Contractor)",
      ScopeofWork:
        "Master Plan of DFCC Housing at Boraki. Architectural, Structural and MEP for  utility Buildings.",
      img: engpro1,
      Description: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      Duration: "March 2019-Ongoing",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 700 Crore",
      price: "WO Value: 580000/-",
      link: "/pp",
    },
    {
      name: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      company: "TPL-GIL JV (EPC Contractor)",
      ScopeofWork:
        "Architectural, Structural and MEP services for utility Buildings.",
      img: engpro1,
      Description: "Dedicated Freight Corridor Dadri-Khurja Package-302 ",
      Duration: "June 2018-Feb 2019",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 700 Crore",
      price: "WO Value: 615950/--",
      link: "/pp",
    },
    {
      name: "STP Mahsani, UP ",
      company: "Triveni Engineering Pvt. Ltd.",
      ScopeofWork:
        "Architectural, Structural and MEP services for utility Buildings.",
      img: engpro1,
      Description:
        "Architectural, Civil and Structural Consultancy Services for STP Mahsani, UP",
      Duration: "June 2018-Feb 2019",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 300 Crore",
      price: "WO Value: 200000/-",
      link: "/pp",
    },
    {
      name: "Design and Fabrication ",
      company: "Lloyd Insulation India Limited.",
      ScopeofWork:
        "AStructural Design in Staad Detail drawings in Autocad and Fabrication",
      img: engpro1,
      Description:
        "Design and Fabrication of 2  20kl MS Fire water tanks with inside FRP coating  for Maruti Suzuki India Limited, Gurugram",
      Duration: "Jan 2020-Ongoing",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 10 Crore",
      price: "WO Value: 945000/-",
      link: "/pp",
    },
    {
      name: "Design and Fabrication ",
      company: "Lloyd Insulation India Limited",
      ScopeofWork:
        "Structural Design in Staad Detail drawings in Autocad and Fabrication",
      img: engpro1,
      Description:
        "Design and Fabrication of 2  20kl MS Fire water tanks with inside Epoxy coating  for Maruti Suzuki India Limited, Gurugram",
      Duration: "August 2019-Dec 2019",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 5 Crore",
      price: "WO Value: 875000/-",
      link: "/pp",
    },
    {
      name: "Design and Fabrication ",
      company: "Lloyd Insulation India Limited",
      ScopeofWork:
        "Structural Design in Staad Detail drawings in Autocad and Fabrication",
      img: engpro1,
      Description:
        "Design and Fabrication of 5.4kl and 3.4kl MS ETP tanks with inside Epoxy coating  for Maruti Suzuki India Limited, Gurugram",
      Duration: "June 2018-Feb 2019",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 15 Crore",
      price: "WO Value: 450000/-",
      link: "/pp",
    },
    {
      name: "Slaughter house at Ludhiana.",
      company: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      img: engpro1,
      Description: "Engineering Consultancy for Slaughter house at Ludhiana.",
      Duration: "01-08-2018",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 30 Crore",
      price: "WO Value: 500000/-",
      link: "/pp",
    },
    {
      name: "Slaughter house at Bhilai",
      company: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      img: engpro1,
      Description: "Engineering Consultancy for Slaughter house at Bhilai",
      Duration: "01-07-2018",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 25 Crore",
      price: "WO Value: 450000/-",
      link: "/pp",
    },
    {
      name: "Slaughter house at Sikkim",
      company: "Micro Transmission System",
      ScopeofWork: "Structural Design in Staad Detail drawings in Autocad ",
      img: engpro1,
      Description: "Engineering Consultancy for Slaughter house at Sikkim.",
      Duration: "01-07-2017",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 35 Crore",
      price: "WO Value: 200000/-",
      link: "/pp",
    },
    {
      name: "C&D waste management at Thane, Maharashtra.",
      company: "Arcadis",
      ScopeofWork: "Preparation of Master Plan",
      img: engpro1,
      Description:
        "Engineering Consultancy for C&D waste management at Thane, Maharashtra.",
      Duration: "01-07-2017",
      Valueheading: "Value:",
      priceheading: " price:",
      Value: "Total Project Cost = Rs 15 Crore",
      price: "WO Value: 190000/-",
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
              src={engprobanner}
              alt=""
            />
          </div>
          <div className="absolute lg:top-32 lg:left-32 sm:top-20 sm:left-5 text-white text-2xl tracking-wide sm:mr-5">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
              {" "}
              Engineering Project
            </p>
            <p className="text-white lg:w-[50%] mt-10 lg:text-lg sm:text-base sm:hidden lg:block">
              Engineering systems involve applying scientific, fine, and
              practical knowledge to design, make, and maintain structures,
              systems, bias, and processes that address specific requirements or
              break problems. These systems can vary extensively in compass,
              ranging from designing a small electronic circuit to constructing
              massive structure systems like islands, heads, or towers.
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
        <div>
          {/* Latest project */}
          <div>
            <section class=" lg:pt-[30px] bg-gray-100 sm:pt-10">
              <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 ">
                <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                  Engineering Project
                </h2>
                <hr className="h-2 w-10  rounded-full bg-yellow-400 " />
                <p className=" lg:mx-20 lg:text-lg sm:text-base sm:mx-5 text-justify">
                  Engineering systems involve applying scientific, fine, and
                  practical knowledge to design, make, and maintain structures,
                  systems, bias, and processes that address specific
                  requirements or break problems. These systems can vary
                  extensively in compass, ranging from designing a small
                  electronic circuit to constructing massive structure systems
                  like islands, heads, or towers.
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
                          <Link to="" className="absolute bottom-0 right-0">
                            <button className=" text-white bg-blue-600  px-4 py-2 rounded-l-md ">
                              {" "}
                              {data.company}
                            </button>
                          </Link>
                          <div className="absolute bottom-10 text-white mx-2">
                            <p className="text-base">{data.Duration}</p>
                          </div>
                        </div>
                        <div className=" mx-5">
                          <h2 class=" mb-5 inline-block rounded py-1 text-base font-semibold text-black hover:text-blue-500">
                            {data.ScopeofWork}
                          </h2>
                          <p className="">{data.Description}</p>
                          <h6 className="text-lg font-bold my-2">
                            {" "}
                            {data.Valueheading}
                          </h6>
                          <p className="">{data.Value}</p>
                          <h6 className="text-lg font-bold my-2">
                            {" "}
                            {data.priceheading}
                          </h6>
                          <p className=" pb-2">{data.price}</p>
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

          {/* sample desine side bar  */}
          {/* <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
            <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-10">
              <div className="text-center mb-10 ">
                <h2 className="text-5xl font-semibold text-[#243945]">
                  Engineering project
                </h2>
                <p className="py-5 text-lg text-center text-gray-500  mx-28">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Harum repellendus natus nam unde, sequi repudiandae cum hic
                  ullam corrupti inventore.
                </p>
              </div>

              <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                <div className="lg:col-span-6 sm:col-span-12 ">
                  <img
                    className="w-[45rem] h-[30rem] company-overview"
                    src={engpro1}
                    alt=""
                  />
                </div>
                <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0 pt-10">
                  <div className=" w-full">
                    <h2 className="text-2xl font-semibold text-[#243945]">
                      Qatar Offshore, operated by QatarEnergy.
                    </h2>
                    <hr className="h-2 w-10 my-3 rounded-full bg-yellow-400" />
                    <div className="py-5">
                      <h2 className="text-lg font-semibold text-[#243945]">
                        Decomissioning Structural Design in SACS
                      </h2>
                      <p className="pt-2 text-lg  text-gray-500">
                        Maydan Mahzam (MM) and Bul Hanine (BH) fields are two
                        mature oil fields in Qatar Offshore, operated by
                        QatarEnergy. The two fields have been producing oil and
                        associated gas for over 50 years with the production
                        rates continuously declining.
                      </p>
                    </div>

                    <div>
                      <div className="">
                        <p className="text-lg font-medium">
                          Duration of Project
                        </p>
                        <p>Nov 2023-March 2024</p>
                      </div>
                      <div className="my-5">
                        <p className="text-lg font-medium">Project Value</p>
                        <p>
                          {" "}
                          Total Project Cost = App. $ 2 Billion Engineering Cost
                          = App. $6Million
                        </p>
                      </div>
                      <div className="">
                        <p className="text-lg font-medium">WO Value</p>
                        <p>
                          {" "}
                          Man-hours: 20000 WO Value : Rs. 13000000/- Addition
                          Value: RS. 35,000,00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Engineeringpro;
