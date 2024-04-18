import React, { useEffect, useState, useRef } from "react";

import "./navbar.css";
import Logo from "../../assets/image/logo_up.png";
import { Link } from "react-router-dom";
import { Navlink } from "../../utils/NavDatas";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Nabvar = () => {
  const eleRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [visible, setVisible] = useState(true);
  const [role, setRole] = useState("admin");
  const handleChildDropdown = (ele) => {
    const closestUl = eleRef.current.closest("ul");
    console.log(closestUl);
  };

  const handelClick = () => {
    setVisible((visible) => !visible);
    // alert("hello");
  };

  setInterval((visible) => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(!visible);
    }
  }, 500);

  return (
    <>
      <div>
        <nav className="bg-white skk border-b-2 shadow-xl">
          <div className="flex items-center font-medium justify-around">
            <div className="lg:z-50 sm:z-0 p-5 lg:w-auto w-full flex justify-between">
              <Link to="/">
                <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
              </Link>
              <div
                className="text-3xl cursor-pointer lg:hidden z-[100]"
                onClick={() => setOpen(!open)}
              >
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            {/* Destop menu */}
            <ul className="lg:flex hidden font-[500] text-[1rem] font-serif items-center gap-8 leading-5 navmanu">
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              {Navlink?.map((link, i) => (
                <div>
                  <div className="px-1 text-left md:cursor-pointer group">
                    <Link to={link.link}>
                      <h2
                        className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                        onClick={() => {
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading("");
                          setSubHeading("");
                        }}
                      >
                        {link.name}
                        <span className="text-xl md:hidden inline">
                          <ion-icon
                            name={`${
                              heading === link.name
                                ? "chevron-up"
                                : "chevron-down"
                            }`}
                          ></ion-icon>
                        </span>
                        <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                          <ion-icon name="chevron-down"></ion-icon>
                        </span>
                      </h2>
                    </Link>
                    {link.submenu && (
                      <div className="project-menu ">
                        {i !== 2 ? (
                          <div
                            className={`${
                              visible ? "" : "hidden"
                            } absolute invisible group-hover:md:visible hover:md:visible hover:bg z-50 ${
                              i === 1 ? "w-full left-0" : ""
                            }
                         `}
                          >
                            <div
                              className={`bg-white p-5 grid gap-10  ${
                                i === 0 || i === 3 || i === 5 || i === 4
                                  ? "w-96 grid-cols-1 pt-10 px-10 mr-8"
                                  : ""
                              }
                            ${i === 1 ? "w-full grid-cols-4 pt-10 px-10" : ""}
                           
                           
                             ${i === 1 ? "pl-24 pt-10 " : ""} `}
                            >
                              {link?.sublinks?.map((mysublimks) => (
                                <div>
                                  <Link
                                    to={mysublimks.mainlink}
                                    className={`flex justify-between
                                      ${
                                        i === 3
                                          ? "align-middle  p-5 rounded-lg hover:bg-gray-100 text-blue-500"
                                          : "mr-16"
                                      }
                                    `}
                                  >
                                    <h2 className="text-lg font-medium">
                                      {mysublimks.Head}
                                      {i === 3 ? (
                                        <div className="text-gray-500 text-sm">
                                          <h4>{mysublimks.text}</h4>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </h2>
                                    <span className=" mt-1 text-2xl font-normal">
                                      <MdKeyboardDoubleArrowRight />
                                    </span>
                                  </Link>
                                  {i !== 3 ? <hr className="hrline" /> : ""}

                                  {mysublimks.sublink.map((slink, i) => (
                                    <li className="text-sm text-gray-600 my-2.5 ">
                                      <Link
                                        onClick={handelClick}
                                        to={slink.link}
                                        className={`hover:text-primary text-lg font-[300] ${
                                          i === 7 ? "leading-0" : "leading-8"
                                        } `}
                                      >
                                        {/* <img
                                          className={`${
                                            i === 2 ? "h-[20rem] w-full mt-5" : ""
                                          }`}
                                          src={mysublimks.img}
                                          alt=""
                                        /> */}
                                        {slink.name}
                                      </Link>
                                    </li>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`${
                              visible ? "" : "hidden"
                            }absolute invisible group-hover:md:visible hover:md:visible hover:bg z-50  w-[30%] `}
                          >
                            {/* onMouseOver={handleChildDropdown} */}
                            <div className="bg-white p-5   pt-10 px-10  border-r-4">
                              <ul className="project-menu-section">
                                {link?.sublinks?.map((mysublimks, i) => (
                                  <li className="" ref={eleRef}>
                                    <Link
                                      onClick={handelClick}
                                      to={mysublimks.mainlink}
                                      className="li-box flex align-middle justify-between px-5 my-4 rounded-lg hover:bg-gray-100 text-blue-500"
                                    >
                                      <span className="my-3">
                                        <h2 className="text-lg font-medium">
                                          {mysublimks.Head}
                                        </h2>
                                        <p className="text-gray-500">
                                          Lorem ipsum dolor sit project.
                                        </p>
                                      </span>
                                      <span className="mt-5 text-2xl font-normal">
                                        <MdKeyboardDoubleArrowRight />
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ul>

            {role == "admin" ? (
              <div className="px-1 text-left md:cursor-pointer sm:hidden lg:block group">
                <Link to="/admin-dashboard">
                  <h2 className="py-7 flex justify-between items-center md:pr-0 pr-5 group">
                    Dashboard
                    <span className="text-xl md:hidden inline">
                      <ion-icon
                        name={`${
                          heading === true ? "chevron-up" : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                    <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                      <ion-icon name="chevron-down"></ion-icon>
                    </span>
                  </h2>
                </Link>
              </div>
            ) : (
              ""
            )}
            <div>
              <Link to="/get-start">
                <button className="bg-yellow-400 text-black font-medium text-lg px-6 py-3 rounded-full lg:block hidden">
                  Contact Us
                </button>
              </Link>
            </div>
            {/* Mobile menu */}
            <ul
              className={`
                lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-10 pl-10 mt-16
                duration-500 ${open ? "right-0 z-50" : "right-[-100%]"}
        
              `}
            >
              {/* <li>
                <Link to="/" className="inline-block py-7">
                  Home
                </Link>
              </li> */}
              {Navlink.map((link) => (
                <div>
                  <li
                    className="py-5 flex justify-between "
                    onClick={() =>
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading("")
                    }
                  >
                    {link.name}
                    <span className="text-xl md:mt-1 md:ml-2 inline pr-10">
                      <ion-icon
                        name={`${
                          heading === link.name ? "chevron-up" : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </li>
                  <div
                    className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                  >
                    {/* sublinks */}
                    {link.sublinks.map((slinks) => (
                      <div>
                        <div>
                          <h2
                            onClick={() =>
                              subHeading !== slinks.Head
                                ? setSubHeading(slinks.Head)
                                : setSubHeading("")
                            }
                            className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                          >
                            <Link
                              to={slinks.mainlink}
                              onClick={() =>
                                slinks.mainlink ? setOpen(!open) : null
                              }
                            >
                              <span> {slinks.Head}</span>
                            </Link>
                            <span className="text-xl md:mt-1 md:ml-2 inline ">
                              <ion-icon
                                name={`${
                                  subHeading === slinks.Head
                                    ? "chevron-up"
                                    : "chevron-down"
                                }`}
                              ></ion-icon>
                            </span>
                          </h2>

                          <div
                            className={`${
                              subHeading === slinks.Head
                                ? "md:hidden"
                                : "hidden"
                            }`}
                          >
                            {slinks.sublink.map((slink) => (
                              <li
                                className="py-3 pl-14"
                                onClick={() => setOpen(!open)}
                              >
                                <Link to={slink.link}>{slink.name}</Link>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {role == "admin" ? (
                <div className="px-1 text-left md:cursor-pointer group">
                  <Link to="/admin-dashboard">
                    <h2 className="py-7 flex justify-between items-center md:pr-0 pr-5 group">
                      Dashboard
                      <span className="text-xl md:hidden inline">
                        <ion-icon
                          name={`${
                            heading === true ? "chevron-up" : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                      <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                        <ion-icon name="chevron-down"></ion-icon>
                      </span>
                    </h2>
                  </Link>
                </div>
              ) : (
                ""
              )}

              <div>
                <Link to="/get-start">
                  <button className="bg-purple-950 text-white px-6 py-3 rounded-full lg:hidden">
                    Contact Us
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nabvar;
