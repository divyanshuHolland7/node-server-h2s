import express from 'express';

import customersRouter from './customers.js';
import newdashboard from './newdashboard.js';
const v1Router = express.Router();


v1Router.use('/customers',customersRouter);
v1Router.use("/newdashboard",newdashboard);

export default v1Router;