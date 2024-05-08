import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import logo from "../assets/image/logo_up.png";

const Signupform = () => {
  const navigate = useNavigate(); // Corrected variable name
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const inputHandle = (e) => {
    // Corrected function name
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // Corrected function name
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json", // Corrected Content-Type spelling
        },
      };

      const { data } = await axios.post(
        // Destructured data from the response
        "http://localhost:4000/api/user/register",
        formData,
        config
      );

      console.log("user data", data); // Logging the response data

      if (data) {
        alert("sign up successfully");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        navigate("/login"); // Navigating to login after successful registration
      }
    } catch (error) {
      console.error("Error occurred:", error); // Logging the error
    }
  };

  return (
    <div className="bg-slate-300 py-20">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {" "}
            {/* Changed action and added onSubmit */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter Your Name..."
                  required
                  className="block w-full rounded-md border-none outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  onChange={inputHandle} // Changed to inputHandle
                  value={formData.name}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  onChange={inputHandle} // Changed to inputHandle
                  value={formData.email}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number :
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  autoComplete="mobile"
                  placeholder="Enter Your Mobile Number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  onChange={inputHandle}
                  value={formData.mobile}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter Your Password"
                  required
                  className="block w-full rounded-md border-0 bg-white p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                  onChange={inputHandle} // Changed to inputHandle
                  value={formData.password}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign-up Now
              </button>
            </div>
            <div className="flex justify-center gap-10 text-lg ">
              <p className="text-slate-400 text-xl">Already Registered?</p>
              <Link to="/login">
                <span className="font-semibold text-blue-500">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signupform;
