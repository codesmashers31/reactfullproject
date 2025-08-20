import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userroutes from './routes/userroutes.js';
import authRoute from './routes/authRoute.js'
import connectDb from './config/db.js';

dotenv.config({ quiet: true });

const app = express();

app.use(cors());


const changeto_json = express.json()

app.use(changeto_json);

connectDb();

app.use("/upload",express.static("upload"))
app.use("/api/users",userroutes);
app.use("/api/auth",authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Leo factory Running on :http://localhost:/${PORT}`);
})
