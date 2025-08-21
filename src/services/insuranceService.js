import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";


export const updateInsuranceService = async (headers,arrange,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.put(endpoints.UPDATE_INSURANCE(arrange), postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new updateInsuranceService:", error);
    throw error;
  }
};  


export const insuranceByIdService = async (headers,contract_id,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.post(endpoints.INSURANCE(contract_id), postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new insuranceByIdService:", error);
    throw error;
  }
};  

