import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";


export const lotterySubscriptionService = async (headers) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.LOTTRY_SUB, { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new lotterySubscriptionService:", error);
    throw error;
  }
};  



export const lotteryUnSubscribeService = async (headers,postData) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.put(endpoints.LOTTRY_UNSUB, postData,{ headers });
    return response.data;
  } catch (error) {
    console.error("Error in new lotteryUnSubscribeService:", error);
    throw error;
  }
};  
