import express from "express";
import dotenv from "dotenv";
import SigninRoute from "./Routes/SiginRoute.js";
import LoginRouter from "./Routes/LoginRoute.js";
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173", 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true, 
}));
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/v1/',SigninRoute);
app.use('/api/v1/',LoginRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

