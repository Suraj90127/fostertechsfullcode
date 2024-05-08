import React, { useEffect, useState } from "react";
import "./careers.css";
import Car from "../../assets/image/car.jpg";
import car2 from "../../assets/image/car-2.jpg";
import group1 from "../../assets/image/Group1.png";
import group2 from "../../assets/image/Group2.png";
import group3 from "../../assets/image/Group3.png";
import group4 from "../../assets/image/Group4.png";
import group5 from "../../assets/image/Group5.png";
import axios from "axios";

const Career = () => {
  const [jobData, setJobData] = useState([]);
  const [pdf, setPdf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skills, setSkills] = useState("");
  const [exp, setExp] = useState("");

  const fetchJobsData = async () => {
    try {
      const data = await axios.get("http://localhost:4000/api/career/get-jobs");
      setJobData(data?.data?.jobs);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchJobsData();
  }, []);

  const hendelSubmit = async (e) => {
    e.preventDefault();
    const applyData = new FormData();
    applyData.append("name", name);
    applyData.append("email", email);
    applyData.append("mobile", mobile);
    applyData.append("skills", skills);
    applyData.append("exp", exp);
    applyData.append("pdf", pdf);

    console.log("name", name);
    console.log("applyDatajjjjjjjjjjjjjjjjjjjj:", applyData);

    try {
      // Now you can send applyData to your server
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setPdf(file);
  };
  useEffect(() => {}, [name, email]);
  return (
    <>
      <div className="career-form">
        <div>
          <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
            <img
              className="lg:h-96 sm:h-[10rem] opacity-100"
              src={Car}
              alt=""
            />
          </div>
          <div className="absolute lg:top-52 lg:left-32 sm:top-40 sm:left-10 text-black text-2xl tracking-wide">
            <p className="mt-10 lg:text-4xl sm:text-2xl font-bold border-b-4 pb-5 rounded-sm">
              Career.......
            </p>
          </div>
        </div>
        <div className=" sm:grid-cols-1 bg-white ">
          <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
            <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
              <div className="grid lg:grid-cols-2 sm:grid-cols-1  items-start  gap-2 md:gap-5 lg:gap-10 xl:gap-14 md:px-10">
                <div className="">
                  <div>
                    <div className="heading  text-4xl font-['Poppins'] font-bold">
                      <h2 className="tracking-[-0.06em] ">Join Us</h2>
                      <p className="border-b-8 w-10 mt-3 border-yellow-400 rounded-lg"></p>
                    </div>
                  </div>
                  <div className="contant flex flex-col">
                    <span>
                      <p className="py-5 text-xl md:text-sm lg:text-base max-w-5xl font-[400] text-gray-700">
                        Are you ready to bring the new to your career? You’ll
                        work alongside our clients—including 80% of the Fortune
                        500, and governments around the globe—and harness
                        groundbreaking new technologies as you improve the way
                        the world works and lives. You’ll be part of an
                        inclusive and diverse team, and you’ll receive the
                        training you need to help keep us—and you—greater than.
                      </p>
                    </span>
                    <div className="ml-40 mt-5">
                      <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-semibold text-gray-700 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img className="h-full" src={car2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" Our-Unmatched w-[90%] mx-auto my-10 ">
          <div className="heading lg:text-[35px] sm:text-[25px] font-[700] text-center">
            <h2 className=" leading-[2rem]">
              <span className="text-[#1571cc]">
                Explore Life at Fostertechs
              </span>
            </h2>
          </div>

          <h2 className="text-lg font-bold text-[#404040] mt-10">
            Explore Opportunities to Shape Your Future
          </h2>

          <div className="section-box">
            <div className="top-content mt-10">
              <div className="section grid grid-cols-12 mt-10 gap-5">
                {jobData.map((post) => (
                  <div className="lg:col-span-4 sm:col-span-12 border-[1px] rounded-xl px-5 py-10 flex flex-col gap-5 shadow-xl main-heder hover:bg-[#e8d967]">
                    <div className="icon">
                      <img className="w-20" src={group1} alt="" />
                    </div>
                    <h2 className="text-2xl font-semibold">{post.title}</h2>
                    <div className="requiements text-2xl">
                      <p>
                        <span className="text-lg font-semibold">Skills</span> :{" "}
                        <span className="text-lg">{post.skills}</span>
                      </p>
                      <p>
                        <span className="text-lg font-semibold">
                          Experience
                        </span>{" "}
                        : <span className="text-lg">{post.exp}</span>
                      </p>
                      <p>
                        <span className="text-lg font-semibold">
                          Qualification
                        </span>{" "}
                        : <span className="text-lg">{post.qua}</span>
                      </p>
                    </div>
                    <p className="text-gray-500 text-base">{post.des}</p>
                    <div className="ml-40 mt-5">
                      <button
                        type="button"
                        class="py-2.5 px-5 me-2 mb-2 text-lg font-semibold text-gray-700 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="bg-transparent form-section">
          <h1 className="py-10 font-bold text-black" id="title">
            Career Apply Form
          </h1>

          <div className="boxform">
            <form id="survey-form">
              <div className="form-group">
                <label id="name-label" htmlFor="name">
                  Name{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label id="email-label" htmlFor="email">
                  Phone No.
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Phone "
                  required
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </div>
              <div className="form-group">
                <label id="" htmlFor="text">
                  Skills
                </label>
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Skills"
                  required
                  onChange={(e) => setSkills(e.target.value)}
                  value={skills}
                />
              </div>
              <div className="form-group">
                <label id="email-label" htmlFor="text">
                  Total Experience
                </label>
                <input
                  type="text"
                  name="exp"
                  id="exp"
                  placeholder="Experience"
                  required
                  onChange={(e) => setExp(e.target.value)}
                  value={exp}
                />
              </div>
              <div className="form-group">
                <label id="file">
                  Upload Requirement File{" "}
                  <span className="clue">PDF file only</span>
                </label>
                <input
                  name="pdf"
                  type="file"
                  multiple
                  required
                  accept="*/pdf"
                  onChange={handleImage}
                />
              </div>
              <div className="form-group">
                <button id="submit" onClick={hendelSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <p className="text-black" id="thanks">
            Thanks For Completing This Form
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
