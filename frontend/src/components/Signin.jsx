import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate= useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [name,setname] = useState("");
    const handlesubmit = async (e) => {
        e.preventDefault(); 
        const response = await axios.post("http://localhost:8000/api/v1/signin",{
            email,
            name,   
            password
        }) 

        if(response.status === 201){
            console.log("sigin successful");
            navigate("/");
        }else{
            console.log("signin failed");
        }
        
    }
   return (
    <div className="w-full h-screen bg-[#e7e5e8] flex items-center justify-center">
      <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-md shadow-gray-400 p-5 flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-xl">New User Sign Up</h1>
        <form
          action=""
          className="flex items-center justify-center gap-5 flex-col w-1/2 "
        >
          <input
            type="email"
            value={email}
            placeholder="Email"
            className=" border-[.1rem] border-b-gray-600 w-full outline-none p-1 text-lg"
            onChange={(e)=>{setemail(e.target.value);}}
            required
          />
          <input
            type="text"
            value={name}
            placeholder="Name"
            className=" border-[.1rem] border-b-gray-600 w-full outline-none p-1 text-lg"
            onChange={(e)=>{setname(e.target.value);}}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Passowrd"
            className=" border-[.1rem] border-b-gray-600 w-full outline-none p-1 text-lg"
            onChange={(e)=>{setpassword(e.target.value);}}
            required
          />
          <button
            type="submit"
            className="bg-[#22bfcc] w-fit px-3 py-2 rounded-md font-semibold text-white"
            onClick={handlesubmit}
          >
            Sign up
          </button>
        </form>
        <div>Already have account? <button className="text-blue-500 underline" onClick={()=>{navigate("/")}}>Login</button></div>
      </div>
    </div>
  );
};

export default Signin;


