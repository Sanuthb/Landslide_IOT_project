import express from "express";
import { Signin } from "../Controllers/Signin.js";

const SigninRoute = express.Router();

SigninRoute.post("/signin", Signin);

export default SigninRoute;
