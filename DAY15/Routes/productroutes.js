const express = require("express");
const { getProducts, 
    createProduct, 
    replaceProduct, 
    checkId, 
    updateProduct, 
    delectProduct, 
    listProduct
} = require("../controllers/productcontroller");

const productRouter = express.Router();

productRouter.route("/").get(getProducts)
.post(createProduct);

productRouter.route("/:id").put(checkId,replaceProduct)
.patch(checkId,updateProduct)
.delete(delectProduct);

productRouter.route('/list').get(listProduct);

module.exports = productRouter;