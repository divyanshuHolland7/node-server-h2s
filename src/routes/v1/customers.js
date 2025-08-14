import express from "express";
import verifyMagentoToken from "../../middlewares/authMiddleware.js";
import {
  signIn,
  refreshToken,
  verifyToken,
  forgotPasswordCustomer,
  createPasswordCustomer,
  verifyPasswordTokenCustomer,
  resetPasswordCustomer,
} from "../../controllers/customersAuthController.js";
import {
  currentCustomer,
  languageSwitchCustomer,
  registerCustomer,
  updateDOBCustomer,
  editBillingCustomer
} from "../../controllers/customersController.js";

const customersRouter = express.Router();


customersRouter.post("/signin", signIn);
customersRouter.get("/refresh-token", verifyMagentoToken, refreshToken);
customersRouter.post("/verify-token", verifyToken);
customersRouter.get("/me", currentCustomer);
customersRouter.post("/", registerCustomer);
customersRouter.post("/:id", languageSwitchCustomer);
customersRouter.post("/password", forgotPasswordCustomer);
customersRouter.post("/resetPassword", createPasswordCustomer);
customersRouter.get("/:customerId/password/resetLinkToken/:resetPasswordLinkToken", verifyPasswordTokenCustomer);
customersRouter.get("/me/password", resetPasswordCustomer);
customersRouter.get("/update-DOB/me", updateDOBCustomer);
customersRouter.get("/edit-billing/me", editBillingCustomer);
export default customersRouter;
