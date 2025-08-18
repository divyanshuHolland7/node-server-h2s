import express from "express";
import {
chatReplyCustomer,
updateTaskCustomer,
createTaskCustomer,
getChatCustomer,
getAllTasksCustomer,
getAllArticlesCustomer,
getCategoriesCustomer,
getAvailableParkingCustomer,
getAvailableStoragesCustomer,
verifyShortStayCustomer,
cancelBookingCustomer,
verifySurveyCustomer,
TFARegisterCustomer,
twoFAUnregisterCustomer,
twoFAVerifyCustomer,
TFAGoogleImageCustomer,
hasActiveCustomer,
TFASecretCustomer,
saveRatingCustomer,
taskByIdCustomer,
CustomerDetailsById,
CustomerProfilePic,
saveCustomerProfilepic,
getAllNotificationCustomer,
getOrdersCustomer,
downloadInvoiceCustomer,
getPreviousTenantTask
} from "../../controllers/customerController.js"


const customerRouter = express.Router();

customerRouter.get("/:id",CustomerDetailsById);
customerRouter.get("/notifications/me",getAllNotificationCustomer);
customerRouter.get("/orders",getOrdersCustomer);
customerRouter.get("/invoicepdf/:orderId",downloadInvoiceCustomer);
customerRouter.post("/savecustomerprofilepic",saveCustomerProfilepic);
customerRouter.get("/getcustomerprofilepic",CustomerProfilePic);
customerRouter.put("/taskmanager/message/:task_id",chatReplyCustomer);
customerRouter.get("/taskmanager/:task_id",taskByIdCustomer);
customerRouter.post("/taskmanager/update",updateTaskCustomer);
customerRouter.post("/taskmanager/new",createTaskCustomer);
customerRouter.get("/taskmanager/chat/:task_id",getChatCustomer);
customerRouter.get("/taskmanager/me",getAllTasksCustomer);
customerRouter.get("/previoustenanttasks/me",getPreviousTenantTask);
customerRouter.get("/faq/articles",getAllArticlesCustomer);
customerRouter.get("/faq/categories",getCategoriesCustomer);
customerRouter.get("/parkingspots/me",getAvailableParkingCustomer);
customerRouter.get("/storagespots/me",getAvailableStoragesCustomer);
customerRouter.get("/shortstay/verify/:token",verifyShortStayCustomer);
customerRouter.post("/survey/verify/:token",verifySurveyCustomer);
customerRouter.get("/bookingcancel/:sku",cancelBookingCustomer);
customerRouter.post("/register/twofa",TFARegisterCustomer);
customerRouter.post("/twofa/unregister",twoFAUnregisterCustomer);
customerRouter.post("/verify/twofa",twoFAVerifyCustomer);
customerRouter.post("/verify/twofa",twoFAVerifyCustomer);
customerRouter.post("/twofa/googleurl",TFAGoogleImageCustomer);
customerRouter.get("/twofa/secret",TFASecretCustomer);
customerRouter.get("/twofa/status",hasActiveCustomer);
customerRouter.post("/survey/save",saveRatingCustomer);
export default customerRouter