import React, { useState } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topnavbar = () => {
  const navigate = useNavigate();
  const [iscliked, setclicked] = useState(false);
  const handleclick = () => {
    setclicked(!iscliked);
  };
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  }
  return (
    <>
      <div className="bg-[#4a4a4a] w-full flex items-center justify-between text-white relative">
        <div className="bg-[#24373a] px-5 py-2 w-[13rem]">
          <span className="text-xl">LandSlide IOT</span>
        </div>
        <button className="px-3 cursor-pointer" onClick={handleclick}>
          <User />
        </button>
      </div>
      {iscliked && (
        <div className="flex items-center gap-5 absolute right-0  bg-[#22bfcc] p-5 rounded-md">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <User size={24} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium">Profile</div>
            <button className="text-sm bg-white rounded-md p-2" onClick={handlelogout}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Topnavbar;
