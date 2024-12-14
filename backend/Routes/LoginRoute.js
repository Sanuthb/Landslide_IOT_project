import express from "express";
import login from "../Controllers/Login.js";


const LoginRouter=express.Router();

LoginRouter.post('/login',login)

export default LoginRouter