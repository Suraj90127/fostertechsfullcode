import React, { useEffect, useState } from "react";
import Swiper from "../../../components/carousel/Swiper";
import { Link } from "react-router-dom";
import pdf from "../../../assets/pdf/Fast_Facts_2023.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import trading1 from "../../../assets/image/trading1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnergyMaterials } from "../../../utils/EnergyMetarials";
import { IoIosArrowForward } from "react-icons/io";
import Human from "../../../assets/image/human.jpg";
import { ourExpertData } from "../../../utils/OurExpertData";

const CarbanCaptr = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const newsData = [
    {
      name: " Lorem ipsum dolor sit amet.",
      img: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg",
      link: "/jj",
    },
    {
      name: " Lorem ipsum dolor sit amet.",
      img: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg",
      link: "/jj",
    },
    {
      name: " Lorem ipsum dolor sit amet.",
      img: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg",
      link: "/jj",
    },
  ];

  const [selected, setSelected] = useState(false);
  return (
    <>
      <div>
        <Swiper />
        {/* text on slide section */}
        <div>
          <div className="absolute z-20 text-red-500 top-64 left-20">
            <h2 className="text-2xl font-[600]  leading-6">Key Market</h2>
            <p className="text-3xl font-bold my-5">Oil & Gase - Upstream</p>
            <div className="pageLink mt-20 text-xl">
              <Link to="/">Home</Link>
              <span>/ </span>
              <Link to="/solution/energy-carban-capture">
                Solution / Energy
              </Link>
            </div>
          </div>
        </div>
        {/* fast fact section */}
        <div className="absolute right-20 bottom-0 z-10 fast-facts my-8 py-10 px-8 w-[22.5rem] h-[17rem] bg-white ">
          <div className="contant">
            <h2 className="text-lg font-[400] text-[#161616] leading-6">
              Viewpoint
            </h2>
            <p className="text-2xl font-semibold my-5">
              How to create a roadmap to decarbonising your asset portfolio
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
        </div>

        <div className="w-[100%] h-[25rem] bg-white my-10">
          <div className="bg-white sm:grid-cols-1">
            {/* contant section */}
            <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
              <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 ml-20 mr-20">
                {/* first section */}
                <div className="grid grid-cols-12  items-start  gap-2 md:gap-5 lg:gap-10 xl:gap-14 md:px-10">
                  <div className="col-span-6">
                    <div>
                      <div className="heading  text-[25px] font-semibold">
                        <h2>Area of Expertise</h2>
                      </div>
                    </div>
                    <div className="contant">
                      <span>
                        <p className="py-5 text-xs md:text-sm lg:text-lg max-w-5xl font-[400] text-gray-s text-justify">
                          Announcement of changes to the Executive Committee
                          with the appointment of two new executive leaders
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Commodi voluptatibus atque nulla voluptate
                          fugiat aliquam possimus enim eligendi qui quam dicta,
                          minus quo nemo, nobis porro harum rem vel itaque
                          doloremque corporis iusto accusantium aspernatur fuga
                          impedit. Harum pariatur, velit fugiat, quos nemo
                          molestiae veritatis suscipit illum molestias natus
                          saepe?
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6">
                    {/* <video src="https://www.youtube.com/watch?v=mm7A3BzqS60"></video> */}
                    <img src={trading1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Insights section */}

        <div>
          <section class=" lg:pt-[30px] bg-gray-200">
            <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                Related Insights
              </h2>
            </div>
            <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10">
              {newsData?.map((data, i) => (
                <div class="-mx-4 ">
                  <div class="w-full px-4">
                    <div className="mx-a mb-10 max-w-[370px] bg-white" key={i}>
                      <Link to={data.link}>
                        <div className="mb-4 overflow-hidden rounded">
                          <img
                            className="h-36 w-full"
                            src={data.img}
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between">
                          <h2 class=" mb-5 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-black hover:text-blue-500">
                            {data.name}
                          </h2>

                          <span className="border-{solid}-2 border-gray-950 mt-3 mr-5 arrow-icon hover:text-blue-500">
                            <FaArrowRightLong />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Related Expertise */}

        <div>
          <div className="w-full  bg-gray-100">
            <div className="w-full  ">
              {/* text div */}
              <div className="flex flex-col align-middle items-center justify-center py-12">
                <div className="text-[2.5rem] font-[600] text-[#212121]">
                  <h2>Related Expertise</h2>
                </div>
              </div>
              {/* number div */}

              <div>
                <div className="flex mx-10">
                  {EnergyMaterials.map((item, i) => (
                    <div
                      className="w-[100%] lg:grid-cols-1  md:grid-cols-2 sm:grid-cols-1 mx-5 gap-4 "
                      key={i}
                    >
                      {item?.data?.map((ele) => (
                        <div className="grid lg:grid-cols-1 left-side">
                          <Link to={ele.link}>
                            <div
                              className={`flex grig  w-[100%] bg-white h-20rem rounded-lg cursor-pointer my-1 px-5  shadow-lg justify-between`}
                            >
                              <span className="text-xl my-auto font-[450] py-4">
                                {ele.title}
                              </span>
                              <span className="my-auto text-xl">
                                <IoIosArrowForward />
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[25rem] bg-white my-10">
          <div className="bg-white sm:grid-cols-1">
            {/* contant section */}
            <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
              <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 ml-20 mr-20">
                {/* first section */}
                <div className="grid grid-cols-12  items-start  gap-2 md:gap-5 lg:gap-10 xl:gap-14 md:px-10">
                  <div className="col-span-6">
                    {/* <video src="https://www.youtube.com/watch?v=mm7A3BzqS60"></video> */}
                    <img src={trading1} alt="" />
                  </div>
                  <div className="col-span-6 lg:ml-10">
                    <div>
                      <p className="text-xl font-medium mb-3">Case Study</p>
                      <div className="heading  text-[25px] font-semibold">
                        <h2>Area of Expertise</h2>
                      </div>
                    </div>
                    <div className="contant">
                      <span>
                        <p className="py-5 text-xs md:text-sm lg:text-lg max-w-5xl font-[450] text-gray-s text-justify">
                          Announcement of changes to the Executive Committee
                          with the appointment of two new executive leaders
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          saepe?
                        </p>
                      </span>
                    </div>
                    <div className="mt-10">
                      <Link to="">
                        <button
                          type="button"
                          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium text-base px-5 py-2 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white rounded-lg "
                        >
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div>
          <section class=" lg:pt-[30px] bg-gray-100 mt-5">
            <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                Related News
              </h2>
            </div>
            <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10">
              {newsData?.map((data, i) => (
                <div class="-mx-4 ">
                  <div class="w-full px-4">
                    <div className=" max-w-[370px] bg-yellow-300" key={i}>
                      <Link to={data.link}>
                        <div className="mb-4 overflow-hidden rounded">
                          <img
                            className="h-36 w-full"
                            src={data.img}
                            alt="image"
                          />
                        </div>
                        <div className="flex justify-between">
                          <h2 class=" mb-5 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-black hover:text-blue-500">
                            {data.name}
                          </h2>
                          <span className="border-{solid}-2 border-gray-950 mt-3 mr-5 arrow-icon hover:text-blue-500">
                            <FaArrowRightLong />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Connect with our experts */}
        <div>
          <section class=" lg:pt-[30px] bg-gray-100 mt-5">
            <div className="flex flex-col items-center justify-center w-full px-0 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-4xl text-primary-matte-black font-[600] text-center text-[#002E5B]">
                Connect with our experts
              </h2>
            </div>
            <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 gap-10">
              {ourExpertData?.map((data, i) => (
                <div class="-mx-4 ">
                  <div class="w-full px-4">
                    <div
                      className="mx-a mb-10 max-w-[370px] bg-white flex flex-col text-center"
                      key={i}
                    >
                      <div className="flex mb-4 overflow-hidden rounded justify-center">
                        <img
                          className="rounded-full h-48 w-48 mt-10 border-8 border-yellow-300"
                          src={Human}
                          alt="image"
                        />
                      </div>
                      <div className="">
                        <h2 class=" inline-block rounded py-1 text-lg font-semibold leading-loose text-black ">
                          {data.name}
                        </h2>
                        <p>{data.bio}</p>
                      </div>
                      <div className="my-10 flex justify-between mx-7">
                        <Link to={data.profileLink}>
                          <button
                            type="button"
                            class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium text-base px-5 py-2 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white "
                          >
                            See Profile
                          </button>
                        </Link>
                        <Link to={data.linkedinLink}>
                          <button
                            type="button"
                            class="bg-[#002E5B] text-white hover:text-white border-2 border-[#002E5B] hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium text-base px-5 py-2 text-center me-2 mb-2  dark:text-blue-500 dark:hover:text-white "
                          >
                            Linkedin
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CarbanCaptr;
