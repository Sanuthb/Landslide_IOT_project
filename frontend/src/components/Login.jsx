import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    if(email=="" && password==""){
      alert("Please enter both email and password")
      return 0;
    }

    if(email==""){
      alert("Please enter email")
      return 0;

    }
    if(password==""){
      alert("Please enter password")
      return 0;
    }
   
    const response = await axios.post("http://localhost:8000/api/v1/login", {
      email,
      password,
    });

    if (response.status === 200) {
      console.log("Login successful");
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } else {
      console.log("Login failed");
    }
    setemail("")
    setpassword("")
  };
  return (
    <div className="w-full h-screen bg-[#e7e5e8] flex items-center justify-center">
      <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-md shadow-gray-400 p-2 flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-xl">Welcome back ! Please Login</h1>
        <form
          action=""
          className="flex items-center justify-center gap-5 flex-col w-1/2 "
        >
          <input
            type="email"
            value={email}
            placeholder="Email"
            className={`border-[.1rem] border-b-gray-600 w-full outline-none p-1 text-lg`}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Passowrd"
            className=" border-[.1rem] border-b-gray-600 w-full outline-none p-1 text-lg"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="bg-[#22bfcc] w-fit px-3 py-2 rounded-md font-semibold text-white"
            onClick={handlesubmit}
          >
            Login
          </button>
        </form>
        <div>
          Don't have account?{" "}
          <button
            className="text-blue-500 underline"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
