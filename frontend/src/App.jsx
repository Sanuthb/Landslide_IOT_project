import React from "react";
import Topnavbar from "./components/Topnavbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-[#e7e5e8]">
      <Topnavbar />
      <div className="flex w-full">
        <Sidebar />
        <Hero/>
      </div>
    </div>
  );
};

export default App;
