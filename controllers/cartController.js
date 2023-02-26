const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Cart = require("../models/cartmodel");

// create product
exports.createCart = catchAsyncErrors(async (req, res, next) => {
  const { title, price, discounted_price, image_url, quantity } = req.body;

  const cart = {
    title,
    price,
    discounted_price,
    image_url,
    user: req.user._id,
    quantity,
  };

  // const cart=await Cart.create(req.body)

  res.status(201).json({
    success: true,
    message: "Product aded successfully",
    cart,
  });
});

//get cart for logged in user
exports.getCart = catchAsyncErrors(async (req, res, next) => {
  
  const cart=await Cart.find({user:req.user._id})

  res.status(200).json({
    success: true,
    cart,
  });
});
