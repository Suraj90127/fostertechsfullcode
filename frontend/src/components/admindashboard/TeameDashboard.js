import React, { useEffect, useState } from "react";
import "./dashboard.css";
import logo from "../../assets/image/logo_up.png";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { Link } from "react-router-dom";
import { team } from "../../utils/TeamData";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";

const TeameDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [part, setPart] = useState("");
  const [about, setAbout] = useState("");
  const [teamDatas, setTeamDatas] = useState([]);

  const teamData = new FormData();
  teamData.append("name", name);
  teamData.append("part", part);
  teamData.append("about", about);
  teamData.append("image", image);

  const hendelSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const data = await axios.post(
        "http://localhost:4000/api/team",
        teamData,
        config
      );

      if (data) {
        // naviget("/login");
        setIsOpen(!isOpen);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    // setFormData(file);
    setImage(file);
    // console.log("file", file)
    // const reader = new FileReader();
    // reader?.readAsDataURL(file);

    // reader.onload = () => {
    //   setPreview(reader.result);
    // };
    // console.log("gggggggggggggg", file);
  };

  const fetchProduct = async () => {
    try {
      const data = await axios.get(
        "http://localhost:4000/api/team/get-all-team"
      );
      setTeamDatas(data?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [teamDatas]);

  const deleteTeam = async (id) => {
    // console.log("id", id);
    try {
      const deleteData = await axios.delete(
        `http://localhost:4000/api/team/delete-team/${id}`
      );
      // console.log("object", deleteData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {/* {console.log("kkkkkkkkkkkkkkkkkkkkkkkkk", teamDatas)} */}
      {isOpen && (
        <div className="absolute lg:top-14 sm:top-[4rem] left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-200 rounded-lg p-8 lg:w-[50%] sm:w-[90%] mx-4">
            <button
              className="absolute lg:top-20 sm:top-[2rem] sm:right-[15%] lg:right-[28%] text-black text-end text-3xl pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoCloseSharp />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Add Team</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Leader Name"
                />
              </div>
              <div className="type lg:ml-20 sm:ml-5">
                <div className="mb-4">
                  <input
                    type="text"
                    id="part"
                    name="part"
                    onChange={(e) => setPart(e.target.value)}
                    value={part}
                    className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="History Parts"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <textarea
                      className="w-full bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                      name="about"
                      id=""
                      cols="30"
                      rows="4"
                      onChange={(e) => setAbout(e.target.value)}
                      value={about}
                      placeholder="About Your"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <input
                      type="file"
                      className="w-full bg-white border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                      name="image"
                      accept="image/*"
                      onChange={handleImage}
                      placeholder="About Your"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  onClick={hendelSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-28">
        <div className="container-main lg:grid lg:grid-cols-12 sm:block">
          <div className="sidebar bg-yellow-300">
            <div className="logo">
              <img className="w-20" src={logo} alt="" />

              <span>Dashboard</span>
            </div>
            <ul>
              <Link to="/admin-dashboard">
                <li className="item mt-40">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>home</title>
                    <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                  </svg>
                  <span>Home</span>
                </li>
              </Link>
              <Link to="/product-dashboard">
                <li className="item my-5">
                  <FaTools />
                  <span>Products</span>
                </li>
              </Link>
              <Link to="/leader-dashboard">
                <li className="item my-5">
                  <FaUser />
                  <span>Leaders</span>
                </li>
              </Link>
              <Link to="/team-dashboard">
                <li className="item my-5">
                  <GiTeamIdea />
                  <span>Teams</span>
                </li>
              </Link>
              <Link to="/career-dashboard">
                <li className="item my-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>career</title>
                    <path d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
                  </svg>
                  <span>Careers</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="header lg:px-10 sm:px-0">
            <div className="top">
              <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>magnify</title>
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <input type="text" size={60} />
              </div>
            </div>
            <div className="d-main">
              <div className="user-info">
                <img
                  className="avatar"
                  src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt
                />
                <span>
                  <h1>Hi there,</h1>
                  <h1 className="title">Divey Mahajan</h1>
                </span>
              </div>
              <div className="button">
                <div
                  className="btn cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Add Team
                </div>
                {/* <div className="btn cursor-pointer">Upload</div> */}
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="projects">
              <h1 className="title">All Teams</h1>
              <div className="project-card grid grid-cols-12 gap-10">
                {teamDatas.map((t) => (
                  <div className="project-card-item lg:col-span-6 sm:col-span-12 sm:w-[70%] lg:w-full">
                    <div className="flex flex-col gap-5">
                      <span className="project-name">{t.name}</span>
                      <span className="project-desc">{t.part}</span>
                      <div className="project-item-button">
                        <div
                          className="bottom-0 cursor-pointer flex text-center items-center gap-3"
                          onClick={() => deleteTeam(t?._id)}
                        >
                          <span className="text-4xl text-yellow-500 ">
                            <AiOutlineDelete />
                          </span>
                          <span className="text-xl font-[600]">
                            Delete Team
                          </span>
                        </div>
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
  );
};

export default TeameDashboard;
