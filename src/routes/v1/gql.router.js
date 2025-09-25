import express from "express";
import { createCart, addCustomPriceItem,getWebshopProducts, addVirtualProductToCart, truncateCart, AddNewBooking, getCustomerCart, setPaymentMethodController } from "../../controllers/gqlControllers/cartController.js";



export const gqlRouter = express.Router();

gqlRouter.post("/create", createCart);
gqlRouter.post("/add-custom-price", addCustomPriceItem);
gqlRouter.post("/webshop", getWebshopProducts);
gqlRouter.post("/add-virtual-product-cart",addVirtualProductToCart)
gqlRouter.post("/truncate-cart",truncateCart)
gqlRouter.post("/add-new-booking",AddNewBooking)
gqlRouter.post("/get-customer-cart",getCustomerCart)
gqlRouter.post("/set-payment", setPaymentMethodController);