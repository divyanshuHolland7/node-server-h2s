import express from 'express';
import { fetchActiveContracts, getSettlementById,
    getContractById ,getSettlementByContractId,fetchContracts,getMeterReading
} from '../../controllers/newDashboardController.js';



const newdashboard = express.Router();
newdashboard.get("/contracts",fetchContracts)
newdashboard.get("/activecontract/me",fetchActiveContracts)
newdashboard.get("/contract/:contractid",getContractById)
newdashboard.get("/settlement/:settlementid", getSettlementById);
newdashboard.get("/contract/settlement/:contractId", getSettlementByContractId);
newdashboard.get("meterreading-details/:contractId/:value",getMeterReading)
export default newdashboard;