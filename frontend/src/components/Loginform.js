import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/image/logo_up.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";

const Loginform = () => {
  const naviget = useNavigate();
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputHendel = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const hendelSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:4000/api/user/admin-login",
        formData
      );
      // console.log("ff", data.data.user);
      if (data) {
        alert("Login successfully");
        setAuth({
          ...auth,
          user: data.data.user,
          token: data.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(data.data));
        naviget("/");
      }
    } catch (error) {
      alert("Error occurred: Password Wrong");
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-300 py-20">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                  onChange={inputHendel}
                  value={formData.email}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Register Email."
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={inputHendel}
                  value={formData.password}
                  autoComplete="current-password"
                  placeholder="Enter Current password."
                  required
                  className="block w-full rounded-md border-0 bg-white p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={hendelSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-10  text-lg font-semibold mt-5">
            <p className="text-slate-400 text-xl">Not a member?</p>
            <Link to="/signup">
              <span className="text-blue-400">Register Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
