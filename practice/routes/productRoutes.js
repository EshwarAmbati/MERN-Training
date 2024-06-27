const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    getDataMiddleware,
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);
productRouter.route("/")
    .get(getProducts)
    .post(createProduct);

productRouter.route("/:id")
    .put(replaceProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

module.exports = productRouter;