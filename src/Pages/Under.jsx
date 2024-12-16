import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Under() {
  return (
    <>
      <div className="relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/30 via-black/60 to-gray-900/20 z-0"></div>
        <div className="flex flex-col items-center justify-center h-full z-10">
          <h2 className="font-nasa text-7xl text-white font-bold text-center mb-10  relative">Sorry 😐😐😐😐😐 This page is under construction</h2>
         
        </div>
      </div>
    </>
  );
}

export default Under;
