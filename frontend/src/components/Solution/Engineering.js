import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import genral from "../../assets/image/genral-1.webp";
import ihgr from "../../assets/image/ihgr.webp";
import general3 from "../../assets/image/general3.webp";
import general4 from "../../assets/image/general4.webp";
import genral2 from "../../assets/image/genral-sec.jpg";

const Engineering = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const data = [
    {
      id: 1,
      title: "Feed Verification",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Preparation of General Arrangement Drawings ",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Preparation of Structural Drawings such as",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Preparation of Structural Steel & Fabrication Drawings",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Equipment Support & Foundations Details",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Connection Designs ",
      adress: "CI Tower Floors 13 & 14 Al Bateen Street",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Preparation of Weight Control Report & MTO",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "3D Modelling",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
    },
    {
      id: 1,
      title: "Miscellaneous Calculations",
      adress:
        "Feed verification typically refers to ensuring the accuracy and reliability of information before sharing it on social media or other platforms. When dealing with short content, such as tweets or brief posts, it's crucial to verify the information before sharing it to prevent the spread of misinformation. Here are some steps you can take:",

      img: "https://synergenog.com/wp-content/uploads/2023/11/21-1.webp",
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
        {/* top section  */}
        <div>
          <div>
            <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
              <img
                className="lg:h-[30rem] sm:h-[10rem] w-full opacity-100"
                src={general4}
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
                <span>Engineering</span>
              </h2> */}
              <p className="mt-10 lg:text-4xl sm:text-2xl font-bold ">
                Engineering
              </p>
              <hr className="mt-3 h-2 bg-yellow-500 rounded-full w-10" />
              {/* <hr className="mt-10 " /> */}
            </div>
          </div>
        </div>
        {/* Genral section */}
        {/* general */}

        <div className="lg:mt-20 sm:mt-10">
          <div className="heading flex justify-center text-5xl font-semibold tracking-wide sans-serif">
            <div>
              <h2>General</h2>
              <hr className="mt-3 h-2 bg-yellow-400 rounded-full w-12" />
            </div>
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
                        <div className="col-span-6 bg-white mt-5">
                          <img
                            className="w-full lg:h-[30rem] sm:h-[15rem]"
                            src={genral2}
                            alt=""
                          />
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
                                    <div className="my-10">
                                      <h2 className="tracking-wide px-5 mx-10 py-10 text-xl font-medium text-white">
                                        <img
                                          className=""
                                          src={item.img}
                                          alt=""
                                        />
                                      </h2>
                                    </div>
                                  </div>
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

export default Engineering;
