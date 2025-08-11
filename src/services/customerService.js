import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/error/clientError.js";
import endpoints from "../config/endPoint.js";
import axios from "axios";

export const currentCustomerService = async (headers) => {
    try {
        if (!headers) {
            throw new ClientError(
                { message: "Token is required", 
                  statusCode: StatusCodes.NOT_FOUND 
                }
            );
        }

         const response = await axios.get(endpoints.CURRENT_CUSTOMER, { headers });

        return response.data;
    } catch (error) {
        console.error('Error in current customer service:', error);
        throw error;
    }
}