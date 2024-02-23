import express from 'express';
import mongoose from 'mongoose';

const app = express();
let port = 3000;

mongoose.connect('mongodb+srv://samcodes:<databnetwork>@cluster0.byqhoah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.listen(port, () =>{
    console.log("Server is listening on " + port);
})