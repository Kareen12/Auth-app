import React from "react";
import image from "../loginpgimg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      confirmPassword: data.get("confirmPassword"),
    };

    if (
      actualData.email &&
      actualData.password &&
      actualData.confirmPassword &&
      actualData.username &&
      actualData.password === actualData.confirmPassword
    ) {
      console.log(actualData);
      document.getElementById("signup-form").reset();
      toast.success("Signup Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/dashboard");
    } else if (actualData.password !== actualData.confirmPassword) {
      toast.error("Passwords do no match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side with the picture */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3 xl:w-3/4">
        <img className="object-cover w-full h-full" src={image} alt="signup" />
      </div>

      {/* Right side with the login form */}
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 mx-auto my-auto mr-20">
        <h1 className="text-3xl font-semibold mb-6 text-slate-800">Sign up</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Create username"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Create password"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </div>

          <button
            className="bg-[#f0c113] hover:bg-slate-800 hover:text-[#f0c113]
               text-slate-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Signup;
