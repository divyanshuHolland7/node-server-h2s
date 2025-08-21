import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {updateInsuranceService,insuranceByIdService} from "../services/insuranceService.js";



export const updateInsurance = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {arrange} = req.params;
    const postData = req.body;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!arrange) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "arrange is required ",
        })
      );
    }

     if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await updateInsuranceService(headers,arrange,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


export const insuranceById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {contract_id} = req.params;
    const postData = req.body;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!contract_id) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "contract_id is required ",
        })
      );
    }

     if (!postData) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "data is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await insuranceByIdService(headers,contract_id,postData);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in insurance controller:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};