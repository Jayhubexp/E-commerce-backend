import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
let port = 3000;

app.use(express.json());

mongoose.connect(process.env.DBOCATION, {
    autoIndex: true,
})

app.post('/signup', (req, res) => {
let {fullname, email, password} = req.body;
   if(fullname.length < 3){
      return res.status(403).json({error: "Name must be at least 3 characters"})
      }
   return res.status(200).json({message: "Okay"})
})


app.listen(port, () =>{
    console.log("Server is listening on " + port);
})