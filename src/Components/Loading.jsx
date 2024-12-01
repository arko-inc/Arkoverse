import React from "react";
import './Loading.css';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-t-red-500 border-b-indigo-600 border-white"></div>
      <h1 className="text-white text-2xl ml-4 font-space">
        Loading
        <span className="loading-container">
          {" "}
          <div className="flex justify-center items-center w-[80px] h-[80px] relative">
            {" "}
            <div className="spinner-circle bg-indigo-800"></div>{" "}
            <div className="spinner-circle bg-red-600"></div>{" "}
            <div className="spinner-circle bg-indigo-900"></div>{" "}
            <div className="spinner-circle  bg-red-600"></div>{" "}
          </div>{" "}
        </span>
      </h1>
    </div>
  );
};
export default Loading;
