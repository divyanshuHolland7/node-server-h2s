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

const newdashboard = express.Router();
newdashboard.get("/contracts", fetchContracts);
newdashboard.get("/activecontract/me", fetchActiveContracts);
newdashboard.get("/contract/:contractid", getContractById);
newdashboard.get("/settlement/:settlementid", getSettlementById);
newdashboard.get("/contract/settlement/:contractId", getSettlementByContractId);
newdashboard.get("/meterreading-details/:contractId/:value", getMeterReading);
newdashboard.get("/contract/servicecost/me", getAllSettlement);
newdashboard.get("/contract/me", getBuildings);
newdashboard.post("/tenant/:contract_id", savetenant);
newdashboard.post("/tenant/updateintercomphone", saveIntercom);
newdashboard.post("/guarantor/:contract_id", saveGuarantor);
newdashboard.post("/tenant/savephone/:contract_id", savePhone);
newdashboard.get("/webshopproducts/me", getAllSku);
newdashboard.get("/checkoutoverview/:contract_id", checkoutOverview);
newdashboard.post("/tenant/updatephonebytype/:contract_id/:type", updateContactInfo);
newdashboard.post("/savecontractbasicutensils/:contract_id/:preference", utensilPrefrence);
export default newdashboard;
