// const express = require("express");

// const productRouter = require("./routes/productRoutes.js");

// const app = express();
// app.use(express.json());

// app.use("/products", productRouter);

// app.listen(2000);


//-----------------------------------------------------------------------------\

const express = require('express');
var morgan = require("morgan");
const productRourter = require("./routes/productRoutes.js");

const app = express();

//internal middleware
app.use(express.json());

//custom middleware
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});

//external middleware
app.use(morgan("dev"));
app.use("/products", productRourter);
app.listen(2000);