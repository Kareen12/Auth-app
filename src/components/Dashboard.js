import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      currentPassword: data.get("currentPassword"),
      newPassword: data.get("newPassword"),
      confirmPassword: data.get("confirmPassword"),
    };

    if (
      actualData.currentPassword &&
      actualData.newPassword &&
      actualData.confirmPassword &&
      actualData.newPassword === actualData.confirmPassword
    ) {
      console.log(actualData);
      document.getElementById("changepass-form").reset();
      toast.success("Password changed Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (actualData.newPassword !== actualData.confirmPassword) {
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
    <>
      <div className="bg-gray-100 h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-1/4 lg:w-1/4 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Dashboard</h2>
          {/* Add other sidebar items/navigation links as needed */}
          <ul>
            <li className=" mb-2">User Profile</li>
            <li className="mb-2 ">Change Password</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 lg:w-3/4">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>

          {/* User Profile */}
          <div className="flex flex-col lg:flex-row items-center mb-4">
            <img
              src="https://placekitten.com/200/200"
              alt="User Profile"
              className="w-12 h-12 rounded-full mr-4 lg:mr-4"
            />
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-gray-500">@johndoe</p>
            </div>
          </div>

          {/* Change Password Form */}
          <form id="changepass-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="p-2 w-full border rounded"
                placeholder="Enter your current password"
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
                className="p-2 w-full border rounded"
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
                className="p-2 w-full border rounded"
                placeholder="Confirm your new password"
              />
            </div>

            <button
              type="submit"
              className="bg-[#f0c113] text-slate-800 py-2 px-4 hover:bg-slate-800 hover:text-[#f0c113]
              rounded focus:outline-none focus:shadow-outline"
            >
              Change Password
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
