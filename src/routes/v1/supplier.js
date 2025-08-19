import express from "express"
import {
viewTaskSupplier,
taskUpdateSupplier,
chatTaskSupplier,
sendMsgSupplier,
deadlineUpdateSupplier

} from"../../controllers/supplierController.js"


const supplierRouter = express.Router();


supplierRouter.get("/task/view/:token",viewTaskSupplier);
supplierRouter.get("/task/chat/:token",chatTaskSupplier);
supplierRouter.put("/task/update/:token",taskUpdateSupplier);
supplierRouter.put("/task/message/:token",sendMsgSupplier);
supplierRouter.put("/task/update-deadline/:token",deadlineUpdateSupplier);


export default supplierRouter;