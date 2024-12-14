import React from "react";
import Topnavbar from "./components/Topnavbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";

const App = () => {
  const Dashboard = () => {
    return (
      <div className="bg-[#e7e5e8]">
        <Topnavbar />
        <div className="flex w-full">
          <Sidebar />
          <Hero />
        </div>
      </div>
    );
  };

  const token = localStorage.getItem('token');


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      {
        token && (
          <Route path="/dashboard" element={<Dashboard />} />
        )
      }
    </Routes>
  );
};

export default App;
