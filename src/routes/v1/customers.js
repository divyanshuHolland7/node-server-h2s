import express from 'express';
import verifyMagentoToken  from '../../middlewares/authMiddleware.js';
import { signIn,refreshToken,verifyToken } from '../../controllers/customerAuthController.js';
import { currentCustomer } from '../../controllers/customerController.js';


const customersRouter = express.Router();


// customersRouter.post('/signup',validate(userSignupSchema),signUp);
customersRouter.post('/signin',signIn);
customersRouter.get("/refresh-token",verifyMagentoToken,refreshToken);
customersRouter.post("/verify-token",verifyToken);
customersRouter.get("/me",currentCustomer);
export default customersRouter;