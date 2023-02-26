const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productControllers");
const { isAutheticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/product/new").post(createProduct);

router
  .route("/admin/product/:id")
  .put( updateProduct)
  .delete(deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAutheticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAutheticatedUser, deleteReview);

module.exports = router;
