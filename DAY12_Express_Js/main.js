const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        status: "Pending...",
        message:"Server is Running...."
    });
}); 
app.listen(2000);