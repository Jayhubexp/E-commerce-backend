import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
let port = 3000;

mongoose.connect(process.env.DBOCATION, {
    autoIndex: true,
})

app.listen(port, () =>{
    console.log("Server is listening on " + port);
})