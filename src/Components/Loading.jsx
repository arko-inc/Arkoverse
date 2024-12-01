import React from "react";
import './Loading.css';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      <h1 className="text-white text-2xl ml-4 font-space">
        Loading
        <span className="loading-container">
          {" "}
          <div className="loading-spinner">
            {" "}
            <div className="spinner-circle"></div>{" "}
            <div className="spinner-circle"></div>{" "}
            <div className="spinner-circle"></div>{" "}
            <div className="spinner-circle"></div>{" "}
          </div>{" "}
        </span>
      </h1>
    </div>
  );
};
export default Loading;
