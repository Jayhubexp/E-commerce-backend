import express from 'express'; 
import mongoose from 'mongoose';
import 'dotenv/config'; //to access .env file and its variables
import bycrypt from 'bcryptjs'; // for encrypting password

const app = express();
let port = 3000;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
app.use(express.json()); // to parse the incoming request with JSON payloads

mongoose.connect(process.env.DBOCATION, {
    autoIndex: true,
})

app.post('/signup', (req, res) => { //the function to handle the post request when route is /signup on the server
let {fullname, email, password} = req.body;
   if(fullname.length < 3){
      return res.status(403).json({error: "Name must be at least 3 characters"})
      }
    if(!email.length ){
        return res.status(403).json({error: "Email is required"})
    }
    if(!emailRegex.test(email)){
        return res.status(403).json({error: "Email is not valid"})
    }
    if(!passwordRegex.test(password)){
        return res.status(403).json({error: "Password should be 6 to 20 char set with at least one numeric digit, one uppercase and one lowercase letter"})
    }
    bycrypt.hash(password, 10, (err, hash) => {
        console.log(hash);
    }); //encrypting the password
    
   return res.status(200).json({message: "Okay"})
})


app.listen(port, () =>{
    console.log("Server is listening on " + port);
})