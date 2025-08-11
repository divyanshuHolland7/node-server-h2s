import { StatusCodes } from "http-status-codes";
import {
    customErrorResponse
  } from '../utils/common/responseObjects.js';
import { currentCustomerService } from "../services/customerService.js";


  export async function currentCustomer(req, res) {
  try {
    const {authorization,} =  req.headers
     if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }
    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
 
    const response = await currentCustomerService(headers);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error);
  }
}
