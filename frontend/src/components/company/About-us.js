import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import pdf from "../../assets/pdf/Fast_Facts_2023.pdf";
import { Link } from "react-router-dom";
// import Video from "../video/Video";
import offices from "../../assets/image/offices.webp";
import companypro from "../../assets/image/companypro.jpg";
import profile from "../../assets/image/profile.jpg";
import history from "../../assets/image/history.jpg";
import vission from "../../assets/image/vission.jpg";

const Ourbusiness = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const data = [
    {
      id: 1,
      title: "Abu Dhabi",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "Australia | Melbourne",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "llll",
    },
    {
      id: 1,
      title: "Australia | Perth",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/pppp",
    },
    {
      id: 1,
      title: "Canada | Calgary",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "Chile | Santiago",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "Italy | Milan",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "UK | Reading",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "USA | Houston",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
    {
      id: 1,
      title: "USA | Houston",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      city: "Khalidiya",
      subcity: "Abu Dhabi",
      ratingnum: "3000",
      country: "UAE",
      contact: "+971 2 6519800",
      link: "/jjj",
    },
  ];

  const people = [
    {
      name: "Mr. Rakesh Kumar Gupta ",
      role: "Offshore Structural Department/(Senior Consultant)",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Faisel Tufel      ",
      role: "Lead Engineer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Divey Mahajan",
      role: " Lead Engineer ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mr. Sunil Kumar Prasad      ",
      role: "Drafting Lead ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Shadab Ahmad      ",
      role: "Senior Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ravi Singh ",
      role: "Engineer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mayyur Rao      ",
      role: "Engineer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "External    ",
      role: "Senior Engineer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "External  ",
      role: " Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Asif Ali      ",
      role: " Senior Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Maaz Beg      ",
      role: "Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Juned Malik      ",
      role: "Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "(External        ",
      role: "Senior Engineer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "External        ",
      role: "Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "2D Drafting      ",
      role: "Engineer   ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Md. Arshad    ",
      role: " Senior Designer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Praveen Singh      ",
      role: "  Designer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mathiazhgan Murugesan      ",
      role: "  Designer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Aryan Rawat      ",
      role: "  Designer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "3D Modelling      ",
      role: "  Designer      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Md. Arshad      ",
      role: "  Senior Modeller      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mathiazhgan Murugesan      ",
      role: "  Modeller      ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="relative w-full">
        <div>
          <div>
            <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
              <img
                className="lg:h-96 sm:h-[12rem] w-full opacity-100"
                src={companypro}
                alt=""
              />
            </div>
            <div className="absolute lg:top-52 lg:left-32 sm:top-0 sm:left-10 text-white text-2xl tracking-wide lg:flex sm:block gap-5">
              <p className="mt-10 text-4xl font-bold ">About us</p>
              {/* <hr className="mt-10 " /> */}
              <button
                class="bg-yellow-50  hover:bg-blue-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent 
                rounded flex flex-row mt-5 items-center"
              >
                <span>Download</span>
                <span className="text-xl ml-5">
                  <MdOutlineFileDownload />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* fast fact section */}
          {/* <div className="absolute   lg:top-60 lg:right-20 sm:mx-0   xl:bottom-[8rem] z-10 fast-facts my-8 py-10 px-8 lg:w-[22.5rem] sm:w-[20rem] h-[17rem] bg-white shadow-2xl ">
            <div className="contant">
              <h2 className="text-lg font-[400] text-[#161616] leading-6">
                Fast Facts
              </h2>
              <p className="text-2xl font-semibold my-5">
                One page Fast Facts on Fostertechs
              </p>
              <div className="ml-20 mt-10">
                <a href={pdf} target="_blank">
                  <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-transparent 
                rounded flex flex-row"
                  >
                    <span>Download</span>
                    <span className="text-xl ml-5">
                      <MdOutlineFileDownload />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* profile of company */}
          <div className="w-[100%]  bg-white lg:my-10 lg:mt-[80px] sm:mt-10">
            <div className="flex align-middle text-center justify-center">
              <h2 className="text-3xl font-bold text-[#243945] ">
                Company Profile
                <hr className="lg:mt-5 sm:mt-2 h-2 bg-gray-200" />
              </h2>
            </div>
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-2 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={profile}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-10 lg:mt-0">
                      <div className="heading  text-[25px] font-semibold">
                        <h2 className=" text-[#243945] ">Fostertechs</h2>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Fostertechs Pvt. Ltd, an Engineering and Project
                            Management Consultancy with its headquarter in New
                            Delhi, India, is a group of highly motivated,
                            qualified and experienced technocrats. Our team has
                            enormous experience in engineering and project
                            management of :
                          </p>
                        </span>
                        <p className="font-[500] text-lg text-[#243945] underline">
                          We have expertise in :
                        </p>
                        <div className="mt-5">
                          <ul className="list-disc ml-3 leading-loose text-base">
                            <li>
                              Basic Engineering, FEED, and Detailed Engineering.{" "}
                            </li>
                            <li>Project Management Consultancy (PMC). </li>
                            <li>
                              Engineering & Project Management consultancy
                              (EPMC).{" "}
                            </li>
                            <li>
                              Procurement Engineering & Associated Services.{" "}
                            </li>
                            <li>
                              {" "}
                              Construction Management & Commissioning Services.{" "}
                            </li>
                            <li>Retrofitting.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* History of company */}
          <div className="w-[100%]  bg-white my-10">
            <div className="flex align-middle text-center justify-center">
              <h2 className="text-3xl font-bold text-[#243945] ">
                Company History
                <hr className="mt-5 h-2 bg-yellow-300" />
              </h2>
            </div>
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5">
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-2 lg:mt-0">
                      <div className="heading  text-[25px] font-semibold">
                        <h2 className=" text-[#243945] ">
                          History of Fostertechs
                        </h2>
                      </div>
                      <div className="contant text-justify">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Fostertechs Pvt. Ltd, an ISO-9001:2016 certified
                            company with its headquarters in New Delhi, India,
                            is a group of highly motivated, qualified and
                            experienced technocrats. Our team has enormous
                            experience in engineering and project management of
                            offshore and onshore oil and gas structures, thermal
                            and gas based power plants, residential, commercial
                            infrastructure and retrofitting of industrial,
                            commercial, residential & heritage structures.
                          </p>
                          <p className=" text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            We have an extensive experience in Basic
                            Engineering, FEED, Detailed Engineering, Project
                            Management Consultancy (PMC), Engineering & Project
                            Management consultancy (EPMC), Procurement
                            Engineering & Associated Services, Construction
                            Management & Commissioning Services, and
                            retrofitting.
                          </p>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            Fostertechs is committed to provide sound
                            engineering, project management and construction
                            supervision services. It continually strives to
                            further enhance the quality of its services with
                            active participation from all employees and with
                            feedback from stakeholders thus enhancing the
                            Satisfaction of its client.
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem]"
                        src={history}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mission of company */}
          <div className="w-[100%]  bg-white my-10">
            <div className="flex align-middle text-center justify-center">
              <h2 className="lg:text-3xl sm:text-2xl font-bold text-[#243945] ">
                Company Mission & Vision
                <hr className="mt-5 h-2 bg-gray-200" />
              </h2>
            </div>
            <div className="bg-white sm:grid-cols-1">
              {/* contant section */}
              <div className="flex flex-col items-center justify-center w-full lg:py-10 sm:py-0 gap-4 md:gap-6 lg:gap-8">
                <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
                  {/* first section */}
                  <div className="lg:grid lg:grid-cols-12  items-start sm:gap-6 md:gap-5 lg:gap-10 xl:gap-14 md:px-5 sm:flex sm:flex-col-reverse">
                    <div className="lg:col-span-6 sm:col-span-12 shadow-lg">
                      <img
                        className="lg:h-[28rem] sm:h-[15rem] "
                        src={vission}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12 sm:mt-5 lg:mt-0">
                      <div className="heading  text-[25px] font-semibold">
                        <h2 className=" text-[#243945] ">
                          Mission of Fostertechs
                        </h2>
                      </div>
                      <div className="contant">
                        <span>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            To exceed the expectations of our clients in
                            providing the most capable, economic and creative
                            engineering and project management solution in the
                            country.
                          </p>
                          <p className=" text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            To be the leading Engineering and project management
                            company in Offshore and Onshore Oil & Gas, power
                            plants, industrial, residential and commercial
                            infrastructure.
                          </p>
                          <p className="py-5 text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            To provide self-reliance in engineering and
                            management services in the country
                          </p>
                          <p className=" text-sm md:text-sm lg:text-base max-w-5xl font-[400] text-gray text-justify">
                            To maintain our commitment towards our employees’
                            development, careers and their well-being.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our mission section */}
          <section>
            <div className="w-full bg-white flex flex-col align-middle items-center my-10">
              <div className="text-2xl text-[#002E5B] font-[600]">
                <h2>Our mission</h2>
              </div>
              <div className="text-[40px] sm:mx-5 font-[700] text-[#161616] tracking-wide text-center mt-5">
                <p>
                  Remarkable people, trusted by clients to design, build and
                  advance the world.
                </p>
              </div>
            </div>
          </section>

          {/* Global leader in consulting and engineering */}

          <section>
            <div className="w-full bg-[#FDE428]">
              <div className="lg:w-full sm:w-[95%] lg:py-10">
                {/* text div */}
                <div className="flex flex-col align-middle items-center justify-center ">
                  <div className="lg:text-[2.5rem] sm:text-2xl sm:mt-5 font-[600] text-[#212121] text-center">
                    <h2>Global leader in consulting and engineering</h2>
                  </div>
                  <div className="text-[1.5rem] font-[600] text-[#161616] tracking-wide sm:text-center mt-5">
                    <p>across energy and materials</p>
                  </div>
                </div>
                {/* number div */}
                <div className=" lg:w-full sm:w-[94%] grid lg:grid-cols-3 sm:grid-cols-1 mx-10 py-10 ">
                  <div className="first w-[80%] sm:text-center ">
                    <p className="text-black lg:text-[7rem] sm:text-[5rem] leading-[7rem] font-[500] ml-5">
                      100%+
                    </p>
                    <p className="text-center text-lg font-medium mt-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem sed nemo
                    </p>
                  </div>
                  <div className="second w-[80%] sm:text-center">
                    <p className="text-black lg:text-[7rem] sm:text-[5rem] leading-[7rem] font-[500] ml-5">
                      5,000
                    </p>
                    <p className="text-center text-lg font-medium mt-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem sed nemo
                    </p>
                  </div>
                  <div className="third w-[80%] sm:text-center">
                    <p className="text-black lg:text-[7rem] sm:text-[5rem] leading-[7rem] font-[500] ml-5">
                      2.86
                    </p>
                    <p className="text-center text-lg font-medium mt-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem sed nemo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* video section  */}
          <div className="video-section">
            <div>
              <div className="w-full mt-20 ">
                {/* <Video embedId="cLoXQb5M6oI" /> */}
              </div>
            </div>
          </div>

          {/* join our team */}
          <div>
            <div className="bg-white w-full flex flex-col justify-center align-middle items-center py-10">
              {/* <div className="">
                <h2 className="join-our-team px-5 mx-10 py-10 text-xl font-medium text-white bg-gray-700 hover:bg-slate-100 hover:text-black">
                  Join our team
                </h2>
              </div> */}
              <div className="w-full">
                <div className="bg-white w-full">
                  <div className=" row px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-full text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet our Teams
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit
                        odio vitae elementum enim vitae ullamcorper suspendisse.
                      </p>
                    </div>
                    <div className="w-[90%] m-auto my-20">
                      <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-1 lg:grid-cols-3  lg:col-span-3 sm:gap-y-16 xl:col-span-3 lg:ml-20"
                      >
                        {people.map((person) => (
                          <li key={person.name}>
                            <div className="flex items-center gap-x-6 ">
                              <img
                                className="h-16 w-16 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                              <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                  {person.name}
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">
                                  {person.role}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* unbloking Solution */}
          </div>

          {/* Global major offices section */}

          <div className="">
            <div className="heading flex justify-center text-5xl font-semibold tracking-wide sans-serif">
              <h2>Global major offices</h2>
            </div>
            <div className="w-full">
              <div>
                <div className="w-[100%]">
                  <div className=" sm:grid-cols-1">
                    {/* contant section */}
                    <div className="flex flex-col items-center justify-center w-full py-10 md:gap-6 lg:gap-8">
                      <div className="md:flex flex-col  w-full gap-4 md:gap-6 lg:gap-8">
                        {/* first section */}
                        <div className="grid lg:grid-cols-12  items-start   gap-2 md:gap-5 lg:gap-10 xl:gap-14 md:px-10">
                          <div className="col-span-6 bg-white">
                            <img
                              className="w-full h-[18rem]"
                              src={offices}
                              alt=""
                            />
                            <div className="px-10 py-5 tracking-wide	sans-serif border-l-8 border-black">
                              <h2 className="text-[2.2rem] font-[600] ">
                                Fostertechs, Headquarters
                              </h2>
                              <h5 className="text-lg font-medium py-3">
                                Sir Ian Wood House,
                              </h5>
                              <div className="text-lg sans-serif">
                                <p>Hareness Road, Altens</p>
                                <p>Aberdeen, AB12 3LE</p>
                                <p>United Kingdom</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 bg-white">
                            <div className="wrapper">
                              <div className="accordion w-full ">
                                {data.map((item, i) => (
                                  <div
                                    className={`item px-5 ${
                                      i === 0 ? "pt-5" : ""
                                    } hover:bg-gray-200 ${
                                      selected === i ? "bg-gray-200" : ""
                                    } border-b-2`}
                                  >
                                    <div
                                      className="title"
                                      onClick={() => toggle(i)}
                                    >
                                      <h2>{item.title}</h2>
                                      {/* <span>{selected === i ? "-" : "+"}</span> */}
                                      <span className={` text-lg`}>
                                        <ion-icon
                                          name={`${
                                            selected === i
                                              ? "chevron-up"
                                              : "chevron-down"
                                          }`}
                                        ></ion-icon>
                                      </span>
                                    </div>
                                    <div
                                      className={`
                                        ${
                                          selected === i
                                            ? "content show"
                                            : "content"
                                        } mt-5 text-black ml-5 text-xl inherit
                                      `}
                                    >
                                      {item.adress},
                                      <p className="text-xl text-[#292626] leading-relaxed inherit">
                                        {item.city}
                                        <br />
                                        {item.subcity}
                                        <br />
                                        {item.ratingnum}
                                        <br />
                                        {item.country}
                                      </p>
                                      <p className="mt-10">
                                        {" "}
                                        Tel {item.contact}
                                      </p>
                                      <Link to={item.link}>
                                        <div className=" w-[11rem] my-10">
                                          <h2 className="join-our-team tracking-wide px-5 mx-10 py-10 text-xl font-medium text-white bg-gray-700 hover:bg-slate-100 hover:text-black">
                                            Directions
                                          </h2>
                                        </div>
                                      </Link>
                                    </div>
                                    <div></div>
                                  </div>
                                ))}
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

export default Ourbusiness;
