import express from 'express';
import customerRouter from './customer.js';
import customersRouter from './customers.js';
import newdashboardRouter from './newdashboard.js';
import contractRouter from './contract.js';
import supplierRouter from './supplier.js';
import blogRouter from "./blog.js"
const v1Router = express.Router();


v1Router.use('/customers',customersRouter);
v1Router.use('/customer',customerRouter);
v1Router.use("/newdashboard",newdashboardRouter);
v1Router.use("/contract",contractRouter);
v1Router.use("/supplier",supplierRouter);
v1Router.use("/blog",blogRouter);



export default v1Router;