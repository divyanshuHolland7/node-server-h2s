import express from 'express';

import customersRouter from './customers.js';
const v1Router = express.Router();


v1Router.use('/customers',customersRouter);




export default v1Router;