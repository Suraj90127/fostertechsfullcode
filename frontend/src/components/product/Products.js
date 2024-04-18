import React, { useEffect, useState } from "react";
import productbnner from "../../assets/image/productbanner.png";
import { IoCloseSharp } from "react-icons/io5";
import { products } from "../../utils/ProductData";
import button1 from "../../assets/product/button1.webp";
import button2 from "../../assets/product/button2.webp";
import button3 from "../../assets/product/button3.webp";
import button4 from "../../assets/product/button4.webp";
import productpdf1 from "../../assets/product/productpdf1.pdf";
import CAIR_MANUAL_VALVE_CATALOGUE from "../../assets/product/CAIR_MANUAL_VALVE_CATALOGUE.pdf";
import Water_Catelogue from "../../assets/product/Water_Catelogue.pdf";
import Cair_Valve_Automation_Accessories_Catelogue_compressed from "../../assets/product/Cair_Valve_Automation_Accessories_Catelogue_compressed.pdf";

import "./producstyle.css";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const emailAddress = "example@example.com";
  const [details, setDetails] = useState([]);
  const [menu, setMenu] = useState(false);
  const detailsPage = (product) => {
    setDetails([{ ...product }]);
    setMenu(true);
  };

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const ProductData = [
    {
      brand: "Vodka",
      name: "Rozzita",
      flavour: "Chocolate Flavour",
      url: "/chocolate-flavour-rozzita-vodka",
      img: productbnner,
      p1: "Kaya Spirits introduces its classiest version of whisky, Old Professor Gold Reserve Whisky. The aged whisky made from the best of grains has a pure and unique flavor with a scintillating aroma that pleases the taste buds as well as the senses of its consumers.",
      p2: "is much more than the regular and ordinary whiskies.Further, its unique taste gives you a refreshing smooth flavor which will linger in your mouth for long so that you can enjoy the whisky slowly",
    },
  ];

  return (
    <>
      <div className="relative">
        {/* Banner section */}
        <div>
          <div className=" bottom-0  w-full mt-20 bg-no-repeat opacity-80 careers">
            <div className="">
              <img src={productbnner} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto my-10">
          <div className="w-full">
            <div className="text-center flex justify-center items-center flex-col lg:text-4xl sm:text-xl text-slate-600 font-bold relative pb-[45px]">
              <h2>Our Product Range Consists Of</h2>
            </div>
            <p className="">
              We Take This Opportunity to Introduce Ourselves as One of the
              Leading Manufacturer & Supplier of Industrial Valves in our Brand
              Name:{" "}
              <span className="highlighted bg-yellow-300 text-black">
                CAIR EUROMATIC AUTOMATION PVT LTD. We have total in house
                production & the products we manufacture are GLOBE VALVES, GATE
                VALVES, CHECK VALVES, BUTTERFLY VALVES, BALL VALVES, NEEDLE
                VALVES, PNEUMATIC BALL VALVE. ALL TYPES OF MANUAL, MOTORIZED &
                PNEUMATIC VALVES.
              </span>{" "}
              Our product list contains Electrical Actuators, Limit Switches,
              Gear boxes & positioners as well.
            </p>
            <p className="my-5">
              We got trusted as a manufacturer of electrical actuators from{" "}
              <span className="highlighted bg-yellow-300 text-black">
                EIL, PDIL, MECON, CIDC, GWSSB, PHED, ONGC, IOCL, NTPC MJP, PMC,
                PCMC, APGENCO, CIDC, HPCL, SAKAR SANKUL, LODHA, SAIL duly
                APPROVED
              </span>{" "}
              . We have 3 different manufacturing units accommodate with all
              kind of production facilities which leads to control our
              manufacturing process time resulting fast delivery of material. We
              have been specializing in this business since 2002.
            </p>
            <p>
              We are working with different sectors like Power Plants, Steel
              Plants, Water Treatment Plants, Oil & Gas Projects, Sugar
              Industries, Food & Pharma Industries, Cement Industries, Paper &
              Pulp Industries.
            </p>
            <p className="mt-5">
              We would welcome the opportunity to work with you and add you to
              our ever growing list of satisfied clients, some of which include:
              <span className="highlighted bg-yellow-300 text-black">
                {" "}
                TATA POWER, MAHINDRA & MAHINDRA, JSW, ADITYA BIRLA, NTPC, GODREJ
                AGROVET, ATLAS COPCO, THERMAX, SASAN POWER, HCC, BARC etc.
              </span>
            </p>
          </div>
          <div>
            {products.map((item) => (
              <div>
                <h2 className="my-10 text-lg font-semibold text-yellow-500">
                  {item.head}
                </h2>
                <div className="">
                  {item.subdata.map((p, i) => (
                    <div className="w-full grid grid-cols-12 gap-6 rounded-lg relative my-10">
                      <div
                        key={i}
                        className="lg:col-span-9 sm:col-span-12 group transition-all duration-500 "
                      >
                        <div className="lg:ml-10 sm:ml-5 mt-10">
                          <ul className="lg:text-xl sm:text-sm font-semibold gap-10 leading-loose">
                            <li>{p.title1}</li>
                            <li>{p.title2}</li>
                            <li>{p.title3}</li>
                            <li>{p.title4}</li>
                            <li>{p.title5}</li>
                            <li>{p.title6}</li>
                            <li>{p.title7}</li>
                            <li>{p.title8}</li>
                            <li>{p.title9}</li>
                          </ul>
                        </div>
                        <div className="relative flex overflow-hidden text-center items-center justify-center"></div>
                      </div>
                      <div
                        // to={p.link}
                        key={i}
                        className="lg:col-span-3 sm:col-span-12 group transition-all duration-500 hover:shadow-md hover:-mt-3 rounded-lg bg-white border-t-2 shadow-2xl lg:py-10 sm:py-5 "
                        // onClick={() => detailsPage(p)}
                      >
                        <div className="relative flex overflow-hidden text-center items-center justify-center">
                          <img
                            className="sm:w-52 w-52 lg:h-52 sm:h-28 rounded-t-lg"
                            src={p.images}
                            alt="product image"
                          />
                        </div>
                        {/* <div className="pt-10 lg:text-lg sm:text-base lg:text-slate-600 px-5 ">
                          <h2 className="product-title">{p.title1}</h2>
                          <div className="flex justify-start items-center gap-3">
                            <span className="text-lg  font-bold">
                              {p.price}
                            </span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                  {/* model  */}

                  {menu ? (
                    <div className="prodet absolute z-20 top-0 left-10">
                      <div id="container" className="">
                        <div
                          className="mt-5 ml-5 text-2xl cursor-pointer"
                          onClick={() => setMenu(false)}
                        >
                          <IoCloseSharp />
                        </div>
                        <div className="product-details ">
                          <h1>Manufactured By Fostertech Pvt. Ltd</h1>;
                          <div>
                            <form className="w-full mx-auto bg-white py-5">
                              <div className="flex gap-10">
                                <div className="relative z-0 w-full mb-5  group">
                                  <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Full name
                                  </label>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                  <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Email address
                                  </label>
                                </div>
                              </div>

                              <div className="flex gap-10 my-5">
                                <div className="relative z-0 w-full mb-5 group">
                                  <input
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                  />
                                  <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Phone number
                                  </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                  <button
                                    type="submit"
                                    className=" bg-yellow-400 text-black hover:bg-blue-800 outline-none w-40 rounded-lg text-lg py-2 hover:text-white"
                                  >
                                    Bay Now
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div className="ml-10">
                              <span className="hint-star star gap-5 text-xl">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>
                                <button
                                  className="bg-yellow-400 text-black hover:bg-blue-800 outline-none w-40 rounded-lg text-lg py-2 hover:text-white"
                                  onClick={handleClick}
                                >
                                  Mail Now
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        {details.map((item) => (
                          <div className="product-image">
                            <img src={item.images} alt />
                            <div className="info">
                              <h2> Description</h2>
                              <ul>
                                <li>
                                  <strong>Height : </strong>5 Ft{" "}
                                </li>
                                <li>
                                  <strong>Shade : </strong>Olive green
                                </li>
                                <li>
                                  <strong>Decoration: </strong>balls and bells
                                </li>
                                <li>
                                  <strong>Material: </strong>Eco-Friendly
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
          <div className="flex flex-col cursor-pointer hover:brightness-75">
            <a href={productpdf1} target="_blank">
              <div className="hover:bg-gray-400 transition duration-150 ease-in-out border-2">
                <img className="w-full h-32" src={button1} alt="" />
                <button class="bg-gray-100  w-full font-normal text-gray-500 py-2 px-3 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Cair Folder Catalog.pdf</span>
                </button>
              </div>
            </a>
          </div>

          <div className="flex flex-col cursor-pointer hover:brightness-75">
            <a href={CAIR_MANUAL_VALVE_CATALOGUE} target="_blank">
              <div className="hover:bg-gray-400 transition duration-150 ease-in-out border-2">
                <img className="w-full h-32" src={button2} alt="" />
                <button class="bg-gray-100  w-full font-normal text-gray-500 py-2 px-3 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Cair Manual Valve</span>
                </button>
              </div>
            </a>
          </div>

          <div className="flex flex-col cursor-pointer hover:brightness-75">
            <a href={Water_Catelogue} target="_blank">
              <div className="hover:bg-gray-400 transition duration-150 ease-in-out border-2">
                <img className="w-full h-32" src={button3} alt="" />
                <button class="bg-gray-100  w-full font-normal text-gray-500 py-2 px-3 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Water Catalog.pdf</span>
                </button>
              </div>
            </a>
          </div>

          <div className="flex flex-col cursor-pointer hover:brightness-75">
            <a
              href={Cair_Valve_Automation_Accessories_Catelogue_compressed}
              target="_blank"
            >
              <div className="hover:bg-gray-400 transition duration-150 ease-in-out border-2">
                <img className="w-full h-32" src={button4} alt="" />
                <button class="bg-gray-100  w-full font-normal text-gray-500 py-2 px-3 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Cair Valve Automation</span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
