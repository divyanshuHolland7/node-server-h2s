import { StatusCodes } from "http-status-codes";
import { customErrorResponse } from "../utils/common/responseObjects.js";
import {getCountriesService,getCountriesByIdService} from "../services/countriesService.js";






export const getCountries = async (req, res) => {
  try {
    const { authorization } = req.headers;
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
    const response = await getCountriesService(headers);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

export const getCountriesById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const {code} = req.params;

    if (!authorization) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "Token is required ",
        })
      );
    }

    if (!code) {
      return res.status(StatusCodes.BAD_REQUEST).json(
        customErrorResponse({
          message: "code is required ",
        })
      );
    }

    const headers = {
      Authorization: `${authorization}`,
      "Content-Type": "application/json",
    };
    const response = await getCountriesByIdService(headers,code);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in currentCustomer:", error);

    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};