const { response } = require("express");
const productModel = require("../models/productModel.js");

const checkId = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const product = await productModel.findById(id);
        if(!product){
            res.status(404);
            res.json({
                status: "fail",
                message: "Product not found",
            });
            return;
        }
        next();
    }catch(err){
        console.log(err);
        if(err.name === 'CastError'){
            res.send(400);
            res.json({
                status: "fail",
                message: "Invalid product id",
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
        });
    }
};

const getProducts = async (req, res) => {
    const products = await productModel.find({}).limit(10);
    res.send({
        status: "success",
        data: {
            products,
        },
    });
};

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.status(201);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { new: true });
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

const updateProduct =async (req,res)=>{
   try{
    const {id} = req.params;
    const body = req.body;
    body.updateAt = Date.now()
    const newProduct = await productModel.findByIdAndUpdate({_id: id}, body,{
        new: true,
    });
    res.status(200);
    res.json({
        status: "success",
        data:{
            product: newProduct,
        },
    });
   }
   catch(err){
    console.log(err);
    res.status(500);
    res.json({
        status: "fail",
        message: "Internal Server Error",
        info: err,
    });
   }
};
const delectProduct = async (req,res)=>{
    try{
     const {id} = req.params;
     await productModel.findByIdAndUpdate(id);
     res.status(200);
     res.json({
         status: "success",
         data:{
             product: null,
         },
     });
    }
    catch(err){
     res.status(500);
     res.json({
         status: "fail",
         message: "Internal Server Error",
         info: err,
     });
    }
 };

const listProduct = async(req,res)=>{
   const {limit = 10,...filters} = req.query;
   const pizzasQuery = productModel.find(filters);
   const limitedPizzas = await pizzasQuery.limit(limit);
   res.json({
    status: "success",
    data:{
        pizzas: limitedPizzas,
    },
   });
}
module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    updateProduct,
    checkId,
    delectProduct,
    listProduct,
};