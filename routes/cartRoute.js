const express=require("express")
const { createCart, getCart } = require("../controllers/cartController")
const { isAutheticatedUser } = require("../middleware/auth")

const router=express.Router()

router.route("/cart/create").post(isAutheticatedUser,createCart)

router.route("/cart/me").get(isAutheticatedUser,getCart)

module.exports=router