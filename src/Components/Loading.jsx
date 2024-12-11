import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-t-white border-b-white border-black"></div>
      <h1 className="text-white text-2xl ml-4 font-mont font-conthrax">
        Loading
        <span className="loading-container">
          {" "}
          <div className="flex justify-center items-center w-[80px] h-[80px] relative">
            {" "}
            <div className="spinner-circle bg-white"></div>{" "}
            <div className="spinner-circle bg-[#1a1a1a]"></div>{" "}
            <div className="spinner-circle bg-[#1a1a1a]"></div>{" "}
            <div className="spinner-circle  bg-white"></div>{" "}
            
          </div>{" "}
        </span>
      </h1>
    </div>
  );
};
export default Loading;
