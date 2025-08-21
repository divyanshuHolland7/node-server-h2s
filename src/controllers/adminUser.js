import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {getAdminUserService} from "../services/adminUserService.js";


export const getAdminUser = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {userId} = req.params;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "userId is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getAdminUserService(headers,userId);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};



