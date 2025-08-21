import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";


export const downloadSettlementFileService = async (headers,settlementid) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.DOWNLOAD_SETTLEMENT_FILE(settlementid), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in downloadSettlementFileService:", error);
    throw error;
  }
};  
