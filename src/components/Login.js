import React from "react";
import image from "../loginpgimg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  // const [error, setError] = useState({
  //   status: false,
  //   msg: "",
  //   type: "",
  // });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/dashboard");
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
        <img
          className="object-cover w-full h-full"
          src={image} // Replace with the actual image URL
          alt="login"
        />
      </div>

      {/* Right side with the login form */}
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 mx-auto my-auto mr-20">
        <h1 className="text-3xl font-semibold mb-6 text-slate-800">Login</h1>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="email"
              placeholder="Enter your username/Email"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            {/* <label htmlFor="remember" className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <span className="text-sm">Remember me</span>
              </label> */}

            <NavLink to="/Forgotpass" className="text-blue-500 text-sm">
              Forgot Password?
            </NavLink>
          </div>

          <button
            className="bg-[#f0c113] text-slate-800 py-2 px-4 hover:bg-slate-800 
            hover:text-[#f0c113]
              rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
