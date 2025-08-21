import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {downloadSettlementFileService} from "../services/settlementService.js"



export const downloadSettlementFile = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {settlementid} = req.params;
    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
       if (!settlementid) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "settlementid is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await downloadSettlementFileService(headers,settlementid);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};; 