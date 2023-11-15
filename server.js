import express from "express";
import authRoute from "./routes/authRoute.js"
import cors from 'cors';
import connectDB from "./config/db.js";
import dotenv from 'dotenv'
import { fileURLToPath } from "url";
//configure env
dotenv.config();

//db config
connectDB();

//rest object
const app=express()

//middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to the API'); // Sending a simple message
    // Or, you can redirect to a different endpoint
    // res.redirect('/api/v1/auth');
});

//all routes
app.use('/api/v1/auth',authRoute);



const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});