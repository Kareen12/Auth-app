import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Forgotpass = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    };

    if (
      actualData.email &&
      actualData.newPassword &&
      actualData.confirmPassword &&
      actualData.newPassword === actualData.confirmPassword
    ) {
      console.log(actualData);
      document.getElementById("reset-form").reset();
      toast.success("Reset Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/login");
    } else if (actualData.newPassword !== actualData.confirmPassword) {
      toast.error("Passwords do not match", {
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
    <div className=" flex flex-col items-center justify-center p-20 md:p-10 lg:p-20 gap-8">
      <h1 className=" text-2xl font-bold text-slate-800 ">RESET PASSWORD</h1>
      <form
        id="reset-form"
        onSubmit={submitHandler}
        className="w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-slate-800 text-sm font-bold mb-2"
          >
            Enter Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className=" p-2 w-full border rounded"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-slate-800 text-sm font-bold mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className=" p-2 w-full border rounded"
            placeholder="Enter your new password"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-slate-800 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border rounded"
            placeholder="Confirm your new password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#f0c113] text-slate-800 py-2 px-4 hover:bg-slate-800 hover:text-[#f0c113]
              rounded focus:outline-none focus:shadow-outline md:px-6 lg:px-8"
        >
          Reset Password
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Forgotpass;
