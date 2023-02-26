const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Carts = require("../models/cartmodel");

// create product
exports.createCart = catchAsyncErrors(async (req, res, next) => {

  const { title, price, discounted_price, image_url, quantity } = req.body;

  

  const cart = await Carts.create({
    title,
    price,
    discounted_price,
    image_url,
    user: req.user._id,
    quantity
  });

  res.status(201).json({
    success: true,
    message: "Product aded successfully",
    cart,
  });
});

//get cart for logged in user
exports.getCart = catchAsyncErrors(async (req, res, next) => {
  const cart = await Carts.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    cart,
  });
});

//delete cart for logged in user
exports.deleteCart = catchAsyncErrors(async (req, res, next) => {
  const itemincart = await Carts.findById(req.params.id);

  console.log(itemincart);

  if (!itemincart) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await itemincart.remove();

  res.status(200).json({
    success: true,
  });
});
