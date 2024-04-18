import React, { useEffect } from "react";
import "./careers.css";
import Car from "../../assets/image/car.jpg";
import car2 from "../../assets/image/car-2.jpg";

const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
            {/* <hr className="mt-10 " /> */}
          </div>
        </div>
        <div className=" sm:grid-cols-1 bg-white ">
          {/* contant section */}
          <div className="flex flex-col items-center justify-center w-full py-10 gap-4 md:gap-6 lg:gap-8">
            <div className="md:flex flex-col gap-4 md:gap-6 lg:gap-8 lg:mx-10 sm:mx-5">
              {/* first section */}
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

        {/* career form */}

        <div className="bg-transparent form-section">
          <h1 className="py-10 font-bold text-black" id="title">
            Career Apply Form
          </h1>

          <div className="boxform">
            <form id="survey-form">
              {/* Name Name Name Name */}
              <div className="form-group">
                <label id="name-label" htmlFor="name">
                  Name{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              {/* Email Email Email Email */}
              <div className="form-group">
                <label id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="email@example.com"
                  required
                />
              </div>
              {/* Age Age Age Age Age */}
              <div className="form-group">
                <label id="number-label" htmlFor="number">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="number"
                  min={20}
                  max={25}
                  className="form-control"
                  placeholder="20 - 25"
                />
              </div>
              {/* Role Role Role Role */}
              <div className="form-group">
                <label id="role-label" htmlFor="dropdown">
                  What's your current role?
                </label>
                <select
                  id="dropdown"
                  name="role"
                  className="form-control"
                  required
                >
                  <option disabled selected value>
                    Select current role
                  </option>
                  <option value="student">Student</option>
                  <option value="job">Job Seeker</option>
                  <option value="learner">Full Time Job</option>
                  <option value="learner">Part Time Job</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {/* Experience Experience Experience Experience */}
              <div className="form-group">
                <label id="expert-label" htmlFor="user-recommend">
                  How experienced you are at this job?
                </label>
                <label>
                  {" "}
                  <input
                    name="user-recommend"
                    defaultValue="definitely"
                    type="radio"
                    className="input-radio"
                  />
                  Expert
                </label>
                <label>
                  {" "}
                  <input
                    name="user-recommend"
                    defaultValue="definitely"
                    type="radio"
                    className="input-radio"
                  />
                  Intermediate
                </label>
                <label>
                  {" "}
                  <input
                    name="user-recommend"
                    defaultValue="definitely"
                    type="radio"
                    className="input-radio"
                  />
                  Entry
                </label>
              </div>
              {/* Work Work Work Work */}

              {/* Describe Describe Describe Describe */}

              {/* File File File File*/}
              <div className="form-group">
                <label id="file" htmlFor="upload-file">
                  Upload Requirement File{" "}
                  <span className="clue">PDF file only</span>
                </label>
                <input
                  name="upload-file"
                  className="form-control"
                  type="file"
                  multiple
                  required
                />
              </div>
              {/* Submit Submit Submit Submit */}
              <div className="form-group">
                <button id="submit">Submit</button>
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
