import express from 'express';
import verifyMagentoToken  from '../../middlewares/authMiddleware.js';
import { signIn,refreshToken,verifyToken } from '../../controllers/customerController.js';


const customersRouter = express.Router();


// customersRouter.post('/signup',validate(userSignupSchema),signUp);
customersRouter.post('/signin',signIn);
customersRouter.get("/refresh-token",verifyMagentoToken,refreshToken)
customersRouter.post("/verify-token",verifyToken)

export default customersRouter;