import express from 'express';
import customerRouter from './customer.js';
import customersRouter from './customers.js';
import newdashboard from './newdashboard.js';
import contractRouter from './contract.js';
const v1Router = express.Router();


v1Router.use('/customers',customersRouter);
v1Router.use('/customer',customerRouter);
v1Router.use("/newdashboard",newdashboard);
v1Router.use("/contract",contractRouter)
export default v1Router;