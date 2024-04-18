import React from "react";
import "./dashboard.css";
import logo from "../../assets/image/logo_up.png";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

const Dashboard = () => {
  const user = [
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
    {
      name: "Rjsurya",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corporis. with rjsurya",
      link: "",
    },
  ];
  return (
    <div>
      <div className="mt-28">
        <div className="container-main lg:grid lg:grid-cols-12 sm:block">
          <div className="sidebar bg-yellow-300">
            <div className="logo">
              <img className="w-20" src={logo} alt="" />

              <span>Dashboard</span>
            </div>
            <ul>
              <li className="item mt-40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>home</title>
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                </svg>
                <span>Home</span>
              </li>
              <li className="item my-5">
                <FaTools />
                <span>Products</span>
              </li>
              <li className="item my-5">
                <FaUser />
                <span>Leaders</span>
              </li>
              <li className="item my-5">
                <GiTeamIdea />
                <span>Teams</span>
              </li>
              <li className="item my-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>career</title>
                  <path d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
                </svg>
                <span>Careers</span>
              </li>
            </ul>
          </div>
          <div className="header">
            <div className="top">
              <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>magnify</title>
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
                <input type="text" size={60} />
              </div>
              <div className="profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>bell-outline</title>
                  <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
                </svg>
                <img
                  className="avatar"
                  src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt
                />
                <h1>Morgan Oakey</h1>
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
                  <h1 className="title">Morgan Oakey (@morgan)</h1>
                </span>
              </div>
              <div className="button">
                <div className="btn cursor-pointer">New Add</div>
                {/* <div className="btn cursor-pointer">Upload</div> */}
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="projects">
              <h1 className="title">All User</h1>
              <div className="project-card grid grid-cols-12 gap-10">
                {user.map((user) => (
                  <div className="project-card-item lg:col-span-6 sm:col-span-12 sm:w-[70%] lg:w-full">
                    <div className="flex flex-col gap-5">
                      <span className="project-name">{user.name}</span>
                      <span className="project-desc">{user.about}</span>
                      <div className="project-item-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>star-plus-outline</title>
                          <path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>eye-plus</title>
                          <path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,17.94 13.08,17.38 13.24,16.84C12.83,16.94 12.42,17 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12C17,12.29 16.97,12.59 16.92,12.88C17.58,12.63 18.29,12.5 19,12.5C20.17,12.5 21.31,12.84 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>share-variant</title>
                          <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="announcements">
              <h1 className="title">Announcements</h1>
              <div className="announcements-container">
                <div className="item">
                  <span className="name">Site Maintenance</span>
                  <span className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <hr />
                  <br />
                </div>
                <div className="item">
                  <span className="name">Site Maintenance</span>
                  <span className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                  <hr />
                  <br />
                </div>
                <div className="item">
                  <span className="name">Site Maintenance</span>
                  <span className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="trending">
              <h1 className="title">Trending</h1>
              <div className="trending-container">
                <div className="trending-item">
                  <img
                    src="https://images.unsplash.com/photo-1692305416355-dd61ca199c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    alt
                    className="avatar"
                  />
                  <div className="trending-item-desc">
                    <span className="title">@tegan</span>
                    <span className="desc">World Peace Builder</span>
                  </div>
                </div>
                <div className="trending-item">
                  <img
                    src="https://images.unsplash.com/photo-1692305416355-dd61ca199c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    alt
                    className="avatar"
                  />
                  <div className="trending-item-desc">
                    <span className="title">@tegan</span>
                    <span className="desc"> Peace Builder</span>
                  </div>
                </div>
                <div className="trending-item">
                  <img
                    src="https://images.unsplash.com/photo-1692305416355-dd61ca199c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    alt
                    className="avatar"
                  />
                  <div className="trending-item-desc">
                    <span className="title">@tegan</span>
                    <span className="desc">World Peace Builder</span>
                  </div>
                </div>
                <div className="trending-item">
                  <img
                    src="https://images.unsplash.com/photo-1692305416355-dd61ca199c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    alt
                    className="avatar"
                  />
                  <div className="trending-item-desc">
                    <span className="title">@tegan</span>
                    <span className="desc">World Peace Builder</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
