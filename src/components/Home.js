import React from "react";

const Home = () => {

  return (
    <div>
      <h1
        className="flex flex-col justify-center items-center h-screen font-bold gap-3 
      text-[27px] text-slate-800 sm:flex sm:flex-col text-center"
      >
        WELCOME TO THE SHOP
        <button className="bg-[#f0c113] text-white px-3 py-1 rounded text-[17px] mt-3 sm:mt-0">
          Shop Now
        </button>
      </h1>
    </div>
  );
};

export default Home;
