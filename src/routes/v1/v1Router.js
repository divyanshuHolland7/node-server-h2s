import express from "express";
import customerRouter from "./customer.js";
import customersRouter from "./customers.js";
import newdashboardRouter from "./newdashboard.js";
import contractRouter from "./contract.js";
import supplierRouter from "./supplier.js";
import blogRouter from "./blog.js";
import { 
getCountries,
getCountriesById
} from "../../controllers/Countries.js";
import { 
downloadSettlementFile
} from "../../controllers/settlement.js"
import { 
getAdminUser
} from "../../controllers/adminUser.js"
import { 
lotterySubscription,
lotteryUnSubscribe
} from "../../controllers/lottery.js"

import { 
addTenantRequest,
requestRemoveSecondTenant,
dutchCourse,
ticketAttachment,
hollyFitGround,
faqSearch,
getManualTable,
getMailingPrefrence,
savePrefrence,
availableBookDate,
downloadPrivacy,
deleteAccount,
notificaitonPopup,
updateNotification,
getComplaint,
saveComplaintForm,
getFeedbackData,
postFeedback,
validateBingoForm,
validateSnowForm,
inventoryDownload,
emailVerificationOtp,
verifyEmailOtp,
gallaryImage,
setPermissionEnter,
getPreviousChat
} from "../../controllers/tenantRequest.js"

import { 
updateInsurance,
insuranceById
} from "../../controllers/insurance.js"
import { gqlRouter } from "./gql.router.js";


const v1Router = express.Router();

v1Router.use("/customers", customersRouter);
v1Router.use("/customer", customerRouter);
v1Router.use("/newdashboard", newdashboardRouter);
v1Router.use("/contract", contractRouter);
v1Router.use("/supplier", supplierRouter);
v1Router.use("/blog", blogRouter);
v1Router.get("/directory/countries", getCountries);
v1Router.get("/directory/countries/:code", getCountriesById);
v1Router.get("/servicecost/reportpdf/:settlementid", downloadSettlementFile);
v1Router.get("/users/:userId", getAdminUser);
v1Router.get("/lottery/subscription", lotterySubscription);
v1Router.put("/lottery/unsubscribe", lotteryUnSubscribe);
v1Router.post("/tenant/addsecondtenantrequest", addTenantRequest);
v1Router.post("/tenant/removesecondtenantrequest", requestRemoveSecondTenant);
v1Router.put("/insurances/update/:arrange", updateInsurance);
v1Router.post("/insurance/apply/:contract_id",insuranceById);
v1Router.post("/applydutchcourse/:contract_id",dutchCourse);
v1Router.post("/request/hollyfitgroud",hollyFitGround);
v1Router.get("/ticket/attachment/:externalId",ticketAttachment);
v1Router.get("/faq/articlessearch",faqSearch);
v1Router.get("/manuals",getManualTable);
v1Router.get("/preference",getMailingPrefrence);
v1Router.put("/save-preference/:catId/:isActive",savePrefrence);
v1Router.get("/availablestartdate/:sku",availableBookDate);
v1Router.get("/myprivacy/download/me",downloadPrivacy);
v1Router.delete("/myprivacy/deleteaccount",deleteAccount);
v1Router.get("/customer-notifications/me",notificaitonPopup);
v1Router.get("/customer-notifications/update/:id",updateNotification);
v1Router.get("/complaint-form-details/:token",getComplaint)
v1Router.post("/complaint-form-save",saveComplaintForm);
v1Router.get("/satisfaction/rate/:rate/uid/:uid",getFeedbackData)
v1Router.get("/satisfaction/uid/:uid",postFeedback)
v1Router.get("/bingoform/me",validateBingoForm)
v1Router.get("/snowform/me",validateSnowForm)
v1Router.get("/inventoryitemdoc/:sku",inventoryDownload)
v1Router.post("/email/verify",emailVerificationOtp)
v1Router.post("/email/verify/confirm",verifyEmailOtp)
v1Router.get("/image-manager/:sku",gallaryImage)
v1Router.post("/set-permission-enter",setPermissionEnter)
v1Router.get("/previoustenant/taskmanager/chat/:task_id",getPreviousChat)


// graph-ql routes
v1Router.use("/graph-ql",gqlRouter)

export default v1Router;
