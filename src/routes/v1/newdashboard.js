import express from "express";
import {
  fetchActiveContracts,
  getSettlementById,
  getContractById,
  getSettlementByContractId,
  fetchContracts,
  getMeterReading,
  getAllSettlement,
  getBuildings,
  savetenant,
  saveIntercom,
  saveGuarantor,
  savePhone,
  getAllSku,
  checkoutOverview,
  updateContactInfo,
  utensilPrefrence
} from "../../controllers/newDashboardController.js";

const newdashboardRouter = express.Router();
newdashboardRouter.get("/contracts", fetchContracts);
newdashboardRouter.get("/activecontract/me", fetchActiveContracts);
newdashboardRouter.get("/contract/:contractid", getContractById);
newdashboardRouter.get("/settlement/:settlementid", getSettlementById);
newdashboardRouter.get("/contract/settlement/:contractId", getSettlementByContractId);
newdashboardRouter.get("/meterreading-details/:contractId/:value", getMeterReading);
newdashboardRouter.get("/contract/servicecost/me", getAllSettlement);
newdashboardRouter.get("/contract/me", getBuildings);
newdashboardRouter.post("/tenant/:contract_id", savetenant);
newdashboardRouter.post("/tenant/updateintercomphone", saveIntercom);
newdashboardRouter.post("/guarantor/:contract_id", saveGuarantor);
newdashboardRouter.post("/tenant/savephone/:contract_id", savePhone);
newdashboardRouter.get("/webshopproducts/me", getAllSku);
newdashboardRouter.get("/checkoutoverview/:contract_id", checkoutOverview);
newdashboardRouter.post("/tenant/updatephonebytype/:contract_id/:type", updateContactInfo);
newdashboardRouter.post("/savecontractbasicutensils/:contract_id/:preference", utensilPrefrence);
export default newdashboardRouter;
