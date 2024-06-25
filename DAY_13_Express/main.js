const express = require('express');
const productRourter = require("./routes/produductRoutes.js");

const app = express();

//internal middleware
app.use(express.json());

//custom middleware
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});

//external middleware
app.use(morgan)