const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Cart = require("../models/cartmodel");

exports.createCart = catchAsyncErrors(async (req, res, next) => {
  const { products } = req.body; // assuming products is an array of products to add to the cart
  const cart = await Cart.findOne({ user: req.user._id }); // find the cart for the user

  if (cart) { // if the cart exists, update it with the new products
    cart.products.push(...products);
    await cart.save();
  } else { // if the cart doesn't exist, create a new one with the products
    await Cart.create({
      user: req.user._id,
      products: products,
    });
  }

  res.status(201).json({
    success: true,
    message: "Products added successfully to cart",
  });
});






// //get cart for logged in user
// exports.getCart=catchAsyncErrors(async(req,res,next)=>{
    
//   // const cart=await Cart.find({user:req.user})

//     res.status(200).json({
//         success: true,
//         cart,
//       });
// })