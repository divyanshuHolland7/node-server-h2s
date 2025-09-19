import express from "express";
import { createCart, addCustomPriceItem,getWebshopProducts } from "../../controllers/gqlControllers/cartController.js";



export const gqlRouter = express.Router();

gqlRouter.post("/create", createCart);
gqlRouter.post("/add-custom-price", addCustomPriceItem);
gqlRouter.post("/webshop", getWebshopProducts);