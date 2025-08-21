import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";


export const getAdminUserService = async (headers,userId) => {
  try {
    if (!headers) {
      throw new ClientError({
        message: "Token is required",
        StatusCode: StatusCodes.NOT_FOUND,
      });
    }
  
    const response = await axios.get(endpoints.GET_ADMIN_USER(userId), { headers });
    return response.data;
  } catch (error) {
    console.error("Error in new getAdminUserService:", error);
    throw error;
  }
};  
