require('dotenv').config();
require("./database/db.js")
const express = require("express");
const { userCollection } = require('./database/db.js');

const app = express();
app.use(express.json());


app.get('/user',async(req,res)=>{
    const user =  await userCollection.find().toArray();
    res.json({
        status : "success",
        data: {
            user: user,
        }
    })
    console.log(user)
})

app.post('/user',async(req,res)=>{
    const body = req.body;
    if(!body.name || !body.age){
        res.status(400);
        res.json({
            status : "fail",
            message : "Title and price are required",
        })
        return;
    }
    const result = await userCollection.insertOne(body);
    res.json({
        status : "success",
        data:{
            user : result,
        }
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})