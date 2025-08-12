import express from "express";
import {
  appointmentCheckin,
  appointmentCheckout,
  terminateContract,
  createAppointments,
  appointmentPreCheckout,
  downloadChekoutOverviewFile,
  uploadProofIBAN,
  updateIBAN,
  uploadAnnualProof,
  parkingRequest
} from "../../controllers/contractController.js";

const contractRouter = express.Router();
contractRouter.put("/appointments/:type/:contractid", createAppointments);
contractRouter.put("/appointments/checkin", appointmentCheckin);
contractRouter.put("/appointments/checkout", appointmentCheckout);
contractRouter.put("/appointments/precheckout", appointmentPreCheckout);
contractRouter.put("/terminate/:contractid", terminateContract);
contractRouter.get("/getfile/:contractid/:type", downloadChekoutOverviewFile);
contractRouter.put("/deregistrationproof/upload", uploadProofIBAN);
contractRouter.put("/updateiban", updateIBAN);
contractRouter.put("/annuaproof/upload", uploadAnnualProof);
contractRouter.put("/parkingrequest", parkingRequest);
export default contractRouter;
