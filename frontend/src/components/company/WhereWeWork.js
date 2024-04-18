import React, { useEffect, useState } from "react";
import companypro from "../../assets/image/companypro.jpg";
import pdf from "../../assets/pdf/Fast_Facts_2023.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import trading1 from "../../assets/image/trading1.jpg";

const WhereWeWork = () => {
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
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div>
        <div>
          <div>
            <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
              <img
                className="lg:h-96 sm:h-[10rem] w-full opacity-100"
                src={companypro}
                alt=""
              />
            </div>
            <div className="absolute lg:top-52 lg:left-32 sm:top-24 sm:left-10 text-white text-2xl tracking-wide">
              {/* <h2 className="font-normal">
                <Link to="/">
                  <span className="text-blue-400 hover:text-blue-700">
                    Home
                  </span>
                </Link>
                <span> / </span>
                <span>Where We Work</span>
              </h2> */}
              <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
                Where We Work
              </p>
              {/* <hr className="mt-10 " /> */}
            </div>
          </div>
        </div>
        <div>
          {/* text on slide section */}
          {/* <div>
            <div className="absolute z-20 text-red-500 top-64 left-20">
              <h2 className="text-2xl font-[600]  leading-6">Our business</h2>
              <p className="text-3xl font-bold my-5">
                Designing the future. Transforming the world.
              </p>
              <div className="pageLink mt-20 text-xl">
                <Link to="/">Home</Link>
                <span>/ </span>
                <Link to="/company/our-business">Company</Link>
              </div>
            </div>
          </div> */}
          {/* fast fact section */}
          {/* <div className="absolute lg:right-20 sm:mx-0 sm:left-5 lg:left-[65%] lg:bottom-10 sm:bottom-0 z-10 fast-facts my-8 py-10 px-8 lg:w-[22.5rem] sm:w-[20rem] h-[17rem] bg-white shadow-2xl ">
            <div className="contant">
              <h2 className="text-lg font-[400] text-[#161616] leading-6">
                Fast Facts
              </h2>
              <p className="text-2xl font-semibold my-5">
                One page Fast Facts on Wood
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
        </div>

        {/* Global major offices section */}

        <div className="w-[100%]  bg-white lg:my-10  mt-20">
          <div className="heading flex justify-center lg:text-5xl sm:text-2xl font-semibold tracking-wide sans-serif text-[#243945]">
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
                            src={trading1}
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
                                    <p className="mt-10"> Tel {item.contact}</p>
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
    </>
  );
};

export default WhereWeWork;
