const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", function(request, response){
    response.send("Welcome to my E-commerce site");
})





app.listen(4000, () => console.log('Server is running on port 4000'));